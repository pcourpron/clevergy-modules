import { ApiProvider } from "../../context/ApiContext";
import { I18nextProvider } from "react-i18next";
import { i18n } from "../../i18n";
import { HouseProfiler as HouseProfilerModule } from "./HouseProfiler";
import { StyleWrapper } from "../../StyleWrapper";
import { RoutesProvider } from "../../context/RoutesContext";

export const HouseProfiler = (props: {
  id: string;
  token: string;
  cups: string;
}) => {
  return (
    <StyleWrapper>
      <ApiProvider>
        <RoutesProvider token={props.token}>
          <I18nextProvider i18n={i18n}>
            <HouseProfilerModule {...props} />
          </I18nextProvider>
        </RoutesProvider>
      </ApiProvider>
    </StyleWrapper>
  );
};
