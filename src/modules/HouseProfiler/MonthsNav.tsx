import { useTranslation } from "react-i18next";
import { FC } from "react";
import { addMonths, subMonths } from "date-fns";
import { isSameMonth } from "date-fns";
import classNames from "classnames";

type MonthNavProps = {
  onChange(date: Date): void;
  date: Date;
  nextProColor: string;
  previousProColor: string;
};

export const MonthNav: FC<MonthNavProps> = ({ onChange, date, nextProColor,  previousProColor}) => {
  const { t } = useTranslation();
  const nextMonth = addMonths(date, 1);
  const previousMonth = subMonths(date, 1);

  return (
    <div className="clevergy-mx-6 clevergy-items-center clevergy-grid clevergy-grid-cols-3">
      <div className=" clevergy-flex  clevergy-justify-start">
        <button
          onClick={() => onChange(previousMonth)}
          className={classNames(
            "clevergy-w-[60px] clevergy-bg-grey clevergy-h-[60px] clevergy-text-darkGrey clevergy-font-semibold clevergy-text-center clevergy-border-4 clevergy-rounded-full","clevergy-border-" + previousProColor)}
        >
          {t(`common.months.${new Date(previousMonth).getMonth()}`).substring(
            0,
            3
          )}
        </button>
      </div>
      <div className="clevergy-flex clevergy-flex-col">
        <h3 className="clevergy-text-onyx clevergy-font-semibold clevergy-text-center ">
          {t(`common.months.${date.getMonth()}`)}
        </h3>
      </div>
      <div className="clevergy-p-2 clevergy-flex  clevergy-justify-end">
        {!isSameMonth(nextMonth, addMonths(new Date(), 1)) && (
          <button
            onClick={() => onChange(nextMonth)}
            className={classNames("clevergy-w-[60px] clevergy-h-[60px]  clevergy-bg-grey clevergy-text-darkGrey clevergy-font-semibold clevergy-text-center clevergy-border-4 clevergy-rounded-full","clevergy-border-" + nextProColor )}
          >
            {t(`common.months.${new Date(nextMonth).getMonth()}`).substring(
              0,
              3
            )}
          </button>
        )}
      </div>
    </div>
  );
};
