import { ApiProvider } from "../../context/ApiContext";
import { I18nextProvider } from "react-i18next";
import { i18n } from "../../i18n";
import { Settings as SettingsModule } from "./Settings";
import { RoutesProvider } from "../../context/RoutesContext";
import { StyleWrapper } from "../../StyleWrapper";

export const Settings = (props: {
  id: string;
  token: string;
  asOverlay?: boolean;
  cups: string;
}) => {
  return (
    <RoutesProvider token={props.token}>
      <StyleWrapper>
        <ApiProvider>
          <I18nextProvider i18n={i18n}>
            <SettingsModule {...props} />
          </I18nextProvider>
        </ApiProvider>
      </StyleWrapper>
    </RoutesProvider>
  );
};
