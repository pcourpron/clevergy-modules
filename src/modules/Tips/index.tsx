import { ApiProvider } from "../../context/ApiContext";
import { I18nextProvider } from "react-i18next";
import { i18n } from "../../i18n";
import { Tips as TipsModule } from "./Tips";
import { RoutesProvider } from "../../context/RoutesContext";
import { StyleWrapper } from "../../StyleWrapper";

export const Tips = (props: { id: string; token: string; cups: string }) => {
  return (
    <StyleWrapper>
      <ApiProvider>
        <RoutesProvider token={props.token}>
          <I18nextProvider i18n={i18n}>
            <TipsModule {...props} />
          </I18nextProvider>
        </RoutesProvider>
      </ApiProvider>
    </StyleWrapper>
  );
};
