import { ApiProvider } from "../../context/ApiContext";
import { I18nextProvider } from "react-i18next";
import { i18n } from "../../i18n";
import { ConsumptionChartModule } from "./ConsumptionChart";
import { RoutesProvider } from "../../context/RoutesContext";
import { StyleWrapper } from "../../StyleWrapper";

export const ConsumptionChart = (props: {
  id: string;
  token: string;
  mode?: "mini";
  cups: string;
  houseId: string;
}) => {
  return (
    <RoutesProvider token="token">
      <StyleWrapper>
        <ApiProvider>
          <I18nextProvider i18n={i18n}>
            <ConsumptionChartModule {...props} />
          </I18nextProvider>
        </ApiProvider>
      </StyleWrapper>
    </RoutesProvider>
  );
};
