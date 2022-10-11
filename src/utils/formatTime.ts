import { format } from "date-fns";
import { es } from "date-fns/locale";

export const clevergyTimeFormatStart = (date: Date) =>
  format(date, "yyyy-MM-dd'T'00:00:00.000'Z'");
export const clevergyTimeFormatEnd = (date: Date) =>
  format(date, "yyyy-MM-dd'T'23:59:59.999'Z'");

export const clevergyFormat = (
  date: number | Date,
  formatDate: string,
  options?:
    | {
        locale?: Locale | undefined;
        weekStartsOn?: 0 | 2 | 1 | 3 | 5 | 4 | 6 | undefined;
        firstWeekContainsDate?: number | undefined;
        useAdditionalWeekYearTokens?: boolean | undefined;
        useAdditionalDayOfYearTokens?: boolean | undefined;
      }
    | undefined
) => format(date, formatDate, { ...options, locale: es });
