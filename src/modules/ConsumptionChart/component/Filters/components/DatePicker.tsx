import { useColor } from "../../../../../context/hooks/useColor";
import styled from "styled-components";
import { Dispatch, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  differenceInDays,
  endOfDay,
  startOfDay,
  subDays,
  subYears,
} from "date-fns";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRange } from "@mui/x-date-pickers-pro/DateRangePicker";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";
import esLocale from "date-fns/locale/es";
import { Granularity } from "clevergy-sdk/dist/src/routes";

export const DatePicker = ({
  setEndDate,
  setStartDate,
  setGranularity,
  dateRange,
}: {
  setGranularity: Dispatch<Granularity>;
  setEndDate: Dispatch<Date>;
  dateRange?: {
    firstConsumptionDate: Date;
    lastConsumptionDate: Date;
  };
  setStartDate: Dispatch<Date>;
}) => {
  const [selectedRange, setSelectedRange] = useState<
    "day" | "year" | "month" | "personalized"
  >("month");
  const [value, setValue] = useState<DateRange<Date>>([null, null]);

  const { t } = useTranslation();
  const { primary } = useColor();
  const [rangeOpen, setRangeOpen] = useState(false);

  useEffect(() => {
    const messageListener = (message: MessageEvent) => {
      if (message.isTrusted) {
        if (message.data.clevergy?.calendarPreset) {
          switch (message.data.clevergy?.calendarPreset) {
            case "month":
              setSelectedRange("month");
              setStartDate(subDays(new Date(), 30));
              setGranularity(Granularity.DAILY);
              setEndDate(new Date());
              break;

            default:
              break;
          }
        }
      }
    };
    window.addEventListener("message", messageListener);

    return () => {
      window.removeEventListener("message", messageListener);
    };
  }, [setEndDate, setGranularity, setSelectedRange, setStartDate]);

  useEffect(() => {
    // Select the node that will be observed for mutations
    const targetNode = document.body;

    // Options for the observer (which mutations to observe)
    const config = { attributes: false, childList: true, subtree: false };

    // Callback function to execute when mutations are observed
    const callback = () => {
      const dialog = document.getElementsByClassName(
        "MuiDialogContent-root"
      )[0];
      if (dialog) {
        const message = dialog.firstChild?.firstChild;
        if (message?.textContent === "MUI X: Missing license key") {
          message.remove();
        }
      }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    // Later, you can stop observing
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (value[0] && value[1]) {
      setStartDate(startOfDay(value[0]));
      setEndDate(endOfDay(value[1]));
      const difference = differenceInDays(value[1], value[0]);
      if (difference <= 1) {
        setGranularity(Granularity.HOURLY);
      }
      if (difference > 1 && difference < 30) {
        setGranularity(Granularity.DAILY);
      }
      if (difference >= 60) {
        setGranularity(Granularity.MONTHLY);
      }
    }
  }, [value, setStartDate, setEndDate, setGranularity]);

  useEffect(() => {
    if (selectedRange !== "personalized") {
      setValue([null, null]);
    }
  }, [selectedRange]);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={esLocale}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <SelectedRange
          className="caption2"
          onClick={() => {
            setSelectedRange("day");
            setGranularity(Granularity.HOURLY);
            setStartDate(
              dateRange?.lastConsumptionDate ?? subDays(new Date(), 2)
            );
            setEndDate(
              dateRange?.lastConsumptionDate ?? subDays(new Date(), 2)
            );
          }}
          $color={primary}
          $selected={selectedRange === "day"}
        >
          {t("datePicker.lastDay")}
        </SelectedRange>
        <SelectedRange
          className="caption2"
          onClick={() => {
            setSelectedRange("month");
            setStartDate(subDays(new Date(), 30));
            setGranularity(Granularity.DAILY);
            setEndDate(new Date());
          }}
          $color={primary}
          $selected={selectedRange === "month"}
        >
          {t("datePicker.lastMonth")}
        </SelectedRange>
        <SelectedRange
          className="caption2"
          onClick={() => {
            setSelectedRange("year");
            setStartDate(subYears(new Date(), 1));
            setEndDate(new Date());
            setGranularity(Granularity.MONTHLY);
          }}
          $color={primary}
          $selected={selectedRange === "year"}
        >
          {t("datePicker.lastYear")}
        </SelectedRange>
        <MobileDateRangePicker
          disableFuture
          shouldDisableDate={(date) => {
            if (dateRange) {
              return (
                date < dateRange.firstConsumptionDate ||
                date > dateRange.lastConsumptionDate
              );
            }

            return differenceInDays(new Date(), date) < 2;
          }}
          value={value}
          showToolbar={false}
          open={rangeOpen}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          onClose={() => {
            if (!value[0] || !value[1]) {
              setSelectedRange("year");
              setStartDate(subYears(new Date(), 1));
              setEndDate(new Date());
              setGranularity(Granularity.MONTHLY);
            }
            setRangeOpen(false);
          }}
          renderInput={({ inputRef, ...startProps }, endProps) => (
            <>
              <SelectedRange
                className="caption2"
                onClick={(e) => {
                  setSelectedRange("personalized");
                  setRangeOpen(true);
                }}
                $color={primary}
                $selected={selectedRange === "personalized"}
              >
                {t("datePicker.personalized")}
              </SelectedRange>
            </>
          )}
        ></MobileDateRangePicker>
      </div>
    </LocalizationProvider>
  );
};

const SelectedRange = styled.div<{ $color: string; $selected: boolean }>`
  cursor: pointer;
  ${({ $color, $selected }) =>
    $selected &&
    `
  ${`
  border-bottom: 1px solid ${$color};
  color: ${$color};
  font-weight:700;
  `}`})
`;
