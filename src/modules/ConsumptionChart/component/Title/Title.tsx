import { format } from "date-fns";
import { useEffect, useState } from "react";
import { missingSwitchCaseHandling } from "../../../../utils/missingSwitchCaseHandling";
import { es } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import { useColor } from "../../../../context/hooks/useColor";
import { Granularity } from "../../types";

export const Title = ({
  granularity,
  date,
}: {
  granularity: Granularity;
  date: Date;
}) => {
  const [text, setText] = useState<string>();

  const { t } = useTranslation();
  const { primary } = useColor();
  useEffect(() => {
    switch (granularity) {
      case Granularity.DAILY:
        setText(format(date, "MMMM yyyy", { locale: es }));

        break;
      case Granularity.HOURLY:
        setText(format(date, "dd MMMM yyyy", { locale: es }));

        break;
      case Granularity.MONTHLY:
        setText(format(date, "yyyy", { locale: es }));

        break;
      default:
        missingSwitchCaseHandling(granularity);
    }
  }, [granularity, date]);
  return (
    <div className="clevergy-mb-6 clevergy-flex clevergy-items-baseline">
      <h2 className="clevergy-text-3xl clevergy-font-semibold">
        {t("consumption.title")}
      </h2>
      <div
        className="clevergy-ml-2 clevergy-capitalize"
        style={{ color: primary }}
      >
        {text}
      </div>
    </div>
  );
};
