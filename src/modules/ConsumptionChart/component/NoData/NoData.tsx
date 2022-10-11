import { useTranslation } from "react-i18next";
import { NoDataSvg } from "./NoDataSvg";
export const NoData = () => {
  const { t } = useTranslation();
  return (
    <div className="clevergy-text-center clevergy-flex clevergy-flex-col clevergy-items-center">
      <NoDataSvg />
      <div className="clevergy-text-xl clevergy-font-bold">
        {t("No hay datos")}
      </div>
      <div className="clevergy-text-grey-p2 clevergy-mt-2">
        {t("No hay datos de consumo para las fechas seleccionadas")}
      </div>
    </div>
  );
};
