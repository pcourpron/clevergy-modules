import { Dispatch } from "react";

import "react-datepicker/dist/react-datepicker.css";

import { DatePicker } from "./components/DatePicker";

import { TotalRow } from "../TotalRow";
import { clevergyFormat } from "../../../../utils/formatTime";
import { Granularity } from "clevergy-sdk/dist/src/routes";

export const Filters = ({
  startDate,
  setEndDate,
  endDate,
  setStartDate,
  setGranularity,
  totalConsumption,
  dateRange,
}: {
  dateRange?: {
    firstConsumptionDate: Date;
    lastConsumptionDate: Date;
  };
  startDate: Date;
  endDate: Date;
  setStartDate: Dispatch<Date>;
  setEndDate: Dispatch<Date>;
  setGranularity: Dispatch<Granularity>;
  totalConsumption: number;
}) => {
  const total = (
    <div>
      <div className="caption2">Total</div>
      <span>
        <span className="largeTitle">{totalConsumption.toFixed(1)}</span>
        <span className="regular"> kWh</span>
      </span>
    </div>
  );
  return (
    <div>
      <DatePicker
        dateRange={dateRange}
        setGranularity={setGranularity}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <TotalRow
        style={{ marginTop: 24, alignItems: "center" }}
        main={total}
        secondary={`${clevergyFormat(
          startDate,
          "d, MMM yyyy"
        )}-${clevergyFormat(endDate, "d, MMM yyyy")}`}
      />
    </div>
  );
};
