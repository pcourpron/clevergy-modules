import { Granularity } from "clevergy-sdk/dist/src/routes";
import { missingSwitchCaseHandling } from "./missingSwitchCaseHandling";
import { formatEnergyToString } from "./totalEnergyConsumption";
// FIX ME: will not work in edge cases

type GlobalConsumptionData = {
  date: string;
  kwh: number;
  categories: {
    label: string;
    kwh: number;
  }[];
}[];
export const extractSeries = ({
  data,
  forceColor,
  granularity,
  isFlat,
  mini,
}: {
  mini: boolean;
  data?: GlobalConsumptionData;
  forceColor?: string;
  isFlat?: boolean;
  granularity: Granularity;
}) => {
  if (!data || data.length === 0)
    return [
      {
        name: "",
        type: "bar",
        roundCap: mini,
        stack: "stack",
        itemStyle: {},
        data: emptyDataGenerator({ granularity }),
      },
    ];

  const names = data[0].categories.map(({ label }) => label);
  const forcedColor = (name: string) => {
    if (isFlat) return "#3BA9A0";
    return name === "Total" ? "lightGrey" : forceColor;
  };

  let powerKeys: Set<string> = new Set();

  const provisionalSeries = names.map((name: string) => ({
    name,
    type: "bar",
    stack: "energy",
    barWidth: mini ? "8px" : undefined,
    itemStyle: {
      color: forcedColor(name),
    },
    data: data.map(({ categories }) => {
      return formatEnergyToString(
        categories.find(({ label }) => label === name)!.kwh
      );
    }),
  }));
  provisionalSeries
    .flatMap(({ data }) => data)
    .forEach((point) => {
      const power = point.split(" ")[1];
      const kwh = parseFloat(point.split(" ")[0]);
      if (kwh > 0) powerKeys.add(power);
    });
  if (powerKeys.size === 1) {
    return names.map((name) => ({
      name,
      type: "bar",
      stack: "energy",
      itemStyle: {
        color: forcedColor(name),
      },
      barWidth: mini ? "8px" : undefined,
      roundCap: mini,

      data: data.map(({ categories }) => {
        return (
          parseFloat(
            formatEnergyToString(
              categories.find(({ label }) => label === name)!.kwh
            )
          ) ?? 0
        );
      }),
    }));
  }
  if (powerKeys.has("Wh")) {
    return names.map((name) => ({
      name,
      type: "bar",
      stack: "energy",
      barWidth: mini ? "8px" : undefined,
      roundCap: mini,

      itemStyle: {
        color: forcedColor(name),
      },
      data: data.map(({ categories }) => {
        return (
          parseFloat(
            formatEnergyToString(
              categories.find(({ label }) => label === name)!.kwh,
              "Wh"
            )
          ) ?? 0
        );
      }),
    }));
  }
  if (powerKeys.has("kWh")) {
    return names.map((name) => ({
      name,
      type: "bar",
      stack: "energy",
      roundCap: mini,
      barWidth: mini ? "8px" : undefined,
      itemStyle: {
        color: forcedColor(name),
      },
      data: data.map(({ categories }) => {
        return (
          parseFloat(
            formatEnergyToString(
              categories.find(({ label }) => label === name)!.kwh,
              "kWh"
            )
          ) ?? 0
        );
      }),
    }));
  }
  return names.map((name) => ({
    name,
    type: "bar",
    stack: "energy",
    roundCap: mini,
    barWidth: mini ? "8px" : undefined,
    itemStyle: {
      color: forcedColor(name),
    },
    data: data.map(({ categories }) => {
      return (
        parseFloat(
          formatEnergyToString(
            categories.find(({ label }) => label === name)!.kwh
          )
        ) ?? 0
      );
    }),
  }));
};

// FIX ME: will not work in edge cases
export const extractScale = ({ data }: { data?: GlobalConsumptionData }) => {
  if (!data || data.length === 0) return "kWh";
  const names = data[0].categories.map(({ label }) => label);

  let powerKeys: Set<string> = new Set();
  const provisionalSeries = names.map((name) => ({
    data: data.map(({ categories }) => {
      return formatEnergyToString(
        categories.find(({ label }) => label === name)!.kwh
      );
    }),
  }));
  provisionalSeries
    .flatMap(({ data }) => data)
    .forEach((point) => {
      const power = point.split(" ")[1];
      const kwh = parseFloat(point.split(" ")[0]);
      if (kwh > 0) powerKeys.add(power);
    });
  if (powerKeys.has("Wh")) return "Wh";
  if (powerKeys.has("kWh")) return "kWh";
  return "MWh";
};

const emptyDataGenerator = ({ granularity }: { granularity: Granularity }) => {
  switch (granularity) {
    case Granularity.DAILY:
      const days = Array.from(Array(30).keys());
      return days.map(() => 0);
    case Granularity.MONTHLY:
      const months = Array.from(Array(12).keys());
      return months.map(() => 0);
    case Granularity.HOURLY:
      const hours = Array.from(Array(24).keys());
      return hours.map(() => 0);
    default:
      missingSwitchCaseHandling(granularity);
  }
};
