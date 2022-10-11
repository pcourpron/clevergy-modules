import { Button } from "clevergy-components";
import { useTranslation } from "react-i18next";
import { ErrorSvg } from "./ErrorSvg";
export const Error = ({ onClick }: { onClick?(): void }) => {
  const { t } = useTranslation();
  return (
    <div className="clevergy-text-center clevergy-w-full clevergy-flex clevergy-flex-col clevergy-items-center">
      <ErrorSvg />
      <div className="clevergy-text-xl clevergy-font-bold">
        {t("Vaya... ha ocurrido algo")}
      </div>
      <div className="clevergy-text-grey-p2 clevergy-mt-2">
        {t("Se ha perdido la conexión con el servidor")}
      </div>
      {onClick && (
        <Button
          className="clevergy-mt-6"
          onClick={onClick}
          style={{ width: "192px" }}
        >
          {t("Reintentar")}
        </Button>
      )}
    </div>
  );
};
