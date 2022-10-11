import { format } from "date-fns";
import { missingSwitchCaseHandling } from "./missingSwitchCaseHandling";
import { es } from "date-fns/locale";
import { Granularity } from "clevergy-sdk/dist/src/routes";

export const axisTimeFormat = ({
  granularity,
  date,
}: {
  granularity: Granularity;
  date: Date;
}): string => {
  switch (granularity) {
    case Granularity.MONTHLY:
      const month = format(date, "MMM", { locale: es });
      return `${month.charAt(0).toUpperCase()}${month.slice(1)}`;
    case Granularity.DAILY:
      return format(date, "dd", { locale: es });
    case Granularity.HOURLY:
      const hours = parseInt(format(date, "HH'h'"));
      if (hours > 9) return format(date, "HH'h'", { locale: es });
      return format(date, "H'h'", { locale: es });
    default:
      missingSwitchCaseHandling(granularity);
  }
};
