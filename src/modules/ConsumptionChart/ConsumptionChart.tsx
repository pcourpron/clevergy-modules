import * as echarts from "echarts";
import { useEffect, useState } from "react";
import { useGetConsumption } from "./hooks/useGetConsumption";
import { useRef } from "react";
import { axisTimeFormat } from "../../utils/axisTimeFormat";
import {
  formatEnergyToString,
  totalConsumption,
  totalEnergyConsumption,
} from "../../utils/totalEnergyConsumption";
import { Card } from "clevergy-components";
import classNames from "classnames";
import { Filters } from "./component/Filters";
import { extractSeries } from "../../utils/extractSeries";
import { Lightning } from "./svg/Lightning";
import { useCallback } from "react";
import { clevergyPostMessage } from "../../utils/postMesssage";
import { subDays } from "date-fns";
import { useColor } from "../../context/hooks/useColor";
import { NoData, Error } from "./component";
import { FC } from "react";
import { ConsumptionChartProps, Granularity } from "./types";
import { ApiProvider } from "../../context/ApiContext";
import { useGetDateRange } from "./hooks/useGetDateRange";
export const ConsumptionChart: FC<ConsumptionChartProps> = ({
  id,
  houseId,
  cups,
  token,
  mode,
}) => {
  const { data: dateRange } = useGetDateRange(houseId);

  const [echartInstance, setEchartsIntance] = useState<echarts.EChartsType>();
  const [filter, setFilter] = useState<string>();
  const [colorIndex, setColorIndex] = useState<number>();
  const [startDate, setStartDate] = useState<Date>(subDays(new Date(), 30));
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [granularity, setGranularity] = useState<Granularity>(
    Granularity.DAILY
  );
  const [halfwayValue, setHalfwayValue] = useState<number>(0);
  const { chart, textColor } = useColor();

  useEffect(() => {
    if (dateRange?.lastConsumptionDate) {
      setEndDate(new Date(dateRange.lastConsumptionDate));
    }
  }, [dateRange]);

  const emitUpdateStartDate = useCallback(() => {
    clevergyPostMessage({ startDate });
  }, [startDate]);
  const emitUpdateEndDate = useCallback(() => {
    clevergyPostMessage({ endDate });
  }, [endDate]);
  const emitUpdateGranularity = useCallback(() => {
    clevergyPostMessage({ granularity, emitter: "consumptionChart" });
  }, [granularity]);

  useEffect(() => {
    emitUpdateEndDate();
  }, [emitUpdateEndDate]);
  useEffect(() => {
    emitUpdateStartDate();
  }, [emitUpdateStartDate]);
  useEffect(() => {
    emitUpdateGranularity();
  }, [emitUpdateGranularity]);

  const { data, isLoading, error, refetch } = useGetConsumption({
    cups,
    startDate,
    endDate,
    granularity,
  });

  const filteredData = data?.data?.reduce(
    (acc, curr) => {
      if (filter) {
        const filteredCategory = curr.categories.find(
          ({ label }) => label === filter
        )!;
        acc.push({
          date: curr.date,
          kwh: curr.kwh,
          categories: [
            filteredCategory,
            { label: "Total", kwh: curr.kwh - filteredCategory.kwh },
          ],
        });
      } else acc.push(curr);
      return acc;
    },
    [] as {
      date: string;
      kwh: number;
      categories: { label: string; kwh: number }[];
    }[]
  );

  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current! as HTMLElement);
    setEchartsIntance(chart);
  }, [chartRef]);
  const summedEnergyConsumption = totalEnergyConsumption(data?.data);

  useEffect(() => {
    if (echartInstance) {
      if (isLoading) echartInstance.showLoading();
      if (error) echartInstance.hideLoading();
    }
  }, [isLoading, echartInstance, error]);

  useEffect(() => {
    const regulatedColors = [chart.offPeak, chart.standard, chart.peak];
    const dayColors = [chart.day, chart.night];
    const flatColors = [chart.plana];
    let defaultHexColorPalette;
    switch (data?.rateType) {
      case "REGULATED":
        defaultHexColorPalette = regulatedColors;
        break;
      case "FLAT":
        defaultHexColorPalette = flatColors;
        break;
      case "NIGHT":
        defaultHexColorPalette = dayColors;
        break;

      default:
        defaultHexColorPalette = regulatedColors;

        break;
    }
    if (echartInstance && filteredData) {
      const isMini = mode === "mini";
      let chartlineShown = false;
      const maxValue = Math.max(
        ...filteredData.map(({ kwh }) => kwh).slice(isMini ? -5 : 0)
      );
      echartInstance.setOption({
        tooltip: {},
        xAxis: {
          axisLine: {
            show: mode !== "mini",
          },
          data: filteredData
            ?.map(({ date }) =>
              axisTimeFormat({ date: new Date(date), granularity })
            )
            .slice(isMini ? -5 : 0),
          axisTick: {
            show: mode !== "mini",
          },
          axisLabel: {
            rotate: granularity === "HOURLY" ? 90 : 0,
          },
          boundaryGap: mode !== "mini",
        },

        yAxis: {
          axisLine: {
            show: mode !== "mini",
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            formatter: (value: number) => {
              if (mode !== "mini") return value;
              if (
                value > maxValue * 0.4 &&
                value < maxValue * 0.6 &&
                !chartlineShown
              ) {
                chartlineShown = true;
                setHalfwayValue(value);
                return value;
              }
            },
          },

          axisTick: {
            show: mode !== "mini",
          },
          nameTextStyle: {
            height: 0,
          },
          name: mode !== "mini" ? "kWh" : undefined,
        },
        grid: {
          top: isMini ? 0 : 30,
          bottom: 30,
        },
        color: defaultHexColorPalette,
        series: [
          ...extractSeries({
            mini: mode === "mini",
            isFlat: data?.rateType === "FLAT",
            granularity,
            data: filteredData.slice(isMini ? -5 : 0),
            forceColor: colorIndex
              ? defaultHexColorPalette[colorIndex]
              : undefined,
          }),
          {
            type: "line",
            zlevel: -1,
            width: 10,
            showSymbol: false,
            lineStyle: { type: "dashed", color: "#B3B3B3" },
            data: [
              ...filteredData.map(() => halfwayValue).slice(isMini ? -5 : 0),
            ],
          },
        ],
      });
      echartInstance.hideLoading();
      const resize = () => echartInstance.resize();

      window.addEventListener("resize", resize);

      return () => {
        echartInstance.clear();
        window.removeEventListener("resize", resize);
      };
    }
  }, [
    filteredData,
    echartInstance,
    granularity,
    colorIndex,
    filter,
    data,
    mode,
    halfwayValue,
    chart.offPeak,
    chart.standard,
    chart.peak,
    chart.day,
    chart.night,
    chart.plana,
  ]);
  const regulatedColors = [chart.offPeak, chart.standard, chart.peak];
  const dayColors = [chart.day, chart.night];
  const flatColors = [chart.plana];
  let defaultHexColorPalette: string[];
  switch (data?.rateType) {
    case "REGULATED":
      defaultHexColorPalette = regulatedColors;
      break;
    case "FLAT":
      defaultHexColorPalette = flatColors;
      break;
    case "NIGHT":
      defaultHexColorPalette = dayColors;
      break;

    default:
      defaultHexColorPalette = regulatedColors;

      break;
  }

  useEffect(() => {
    return () => {
      (window as any).consumptionLoaded = false;
    };
  }, []);
  const noData =
    mode !== "mini" && !isLoading && filteredData?.length === 0 && !error;
  return (
    <div
      className="clevergy-flex clevergy-flex-col clevergy-w-full clevergy-h-full"
      style={{ color: textColor }}
    >
      {mode !== "mini" && (
        <>
          <div style={{ marginBottom: "25px" }}>
            <Filters
              dateRange={dateRange}
              endDate={endDate}
              setGranularity={setGranularity}
              setEndDate={setEndDate}
              setStartDate={setStartDate}
              startDate={startDate}
              totalConsumption={
                filteredData?.reduce((acc, curr) => {
                  return (acc += curr.kwh);
                }, 0) ?? 0
              }
            />
          </div>
        </>
      )}
      <div className="clevergy-grow clevergy-flex clevergy-items-end">
        <>
          <div
            ref={chartRef}
            className={classNames({
              "clevergy-h-[200px] clevergy-w-full": mode !== "mini",
              "clevergy-h-[80px] clevergy-w-[230px]": mode === "mini",
              "clevergy-hidden":
                (mode !== "mini" && !isLoading && filteredData?.length === 0) ||
                error,
            })}
            id="clevergy-consumption"
          />
          {noData && <NoData />}
          {error && <Error onClick={refetch} />}
          {mode === "mini" && (
            <div className="clevergy-flex clevergy-items-end clevergy-pb-2">
              <div className="clevergy-text-lightSeaGreen clevergy-font-bold clevergy-text-[33px] clevergy-leading-[33px] clevergy-mr-1">
                {
                  formatEnergyToString(totalConsumption(filteredData)).split(
                    " "
                  )[0]
                }
              </div>
              <div className=" clevergy-text-[12px]">
                {
                  formatEnergyToString(totalConsumption(filteredData)).split(
                    " "
                  )[1]
                }
              </div>
            </div>
          )}
        </>
      </div>
      {mode !== "mini" && !noData && !error && (
        <div
          className={classNames(
            "clevergy-grid clevergy-auto-cols-auto clevergy-gap-4 clevergy-px-4 clevergy-h-[100px]",
            {
              "clevergy-grid-cols-3":
                summedEnergyConsumption.categories.length === 3,
              "clevergy-grid-cols-2":
                summedEnergyConsumption.categories.length === 2,
              "clevergy-grid-cols-1":
                summedEnergyConsumption.categories.length === 1,
            }
          )}
        >
          {summedEnergyConsumption.categories.map((category, index) => {
            const textColor =
              !filter || filter === category
                ? defaultHexColorPalette[index]
                : undefined;
            const borderColor =
              filter && filter === category
                ? defaultHexColorPalette[index]
                : undefined;
            return (
              <Card
                key={category}
                style={{ borderColor }}
                className={classNames("clevergy-justify-between", {
                  "clevergy-text-xl":
                    summedEnergyConsumption.categories.length === 2,
                  "clevergy-text-2xl":
                    summedEnergyConsumption.categories.length === 1,
                  "clevergy-border-2 clevergy-bg-white": filter === category,
                  "clevergy-border-2 clevergy-border-transparent":
                    filter !== category,
                })}
                onClick={() => {
                  if (summedEnergyConsumption.categories.length > 1) {
                    if (filter === category) {
                      setFilter(undefined);
                      setColorIndex(undefined);
                    } else {
                      setFilter(category);
                      setColorIndex(index);
                    }
                  }
                }}
              >
                <Lightning fill={textColor ?? "grey"} />
                <div
                  style={{ color: textColor }}
                  className={classNames(
                    ` clevergy-font-semibold clevergy-whitespace-nowrap`,
                    {
                      "clevergy-text-darkGrey": filter !== category && filter,
                    }
                  )}
                >
                  {formatEnergyToString(
                    summedEnergyConsumption.totals[category]
                  )}
                </div>
                <div className="clevergy-text-darkGrey clevergy-font-semibold clevergy-text-sm">
                  {category}
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const ConsumptionChartModule = ({
  id,
  token,
  cups,
  mode,
  houseId,
}: {
  cups: string;
  id: string;
  token: string;
  mode?: "mini";
  houseId: string;
}) => (
  <ApiProvider>
    <ConsumptionChart
      houseId={houseId}
      token={token}
      id={id}
      mode={mode}
      cups={cups}
    />
  </ApiProvider>
);
