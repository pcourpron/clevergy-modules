import { ApiProvider } from "../../context/ApiContext";
import { I18nextProvider } from "react-i18next";
import { i18n } from "../../i18n";
import { Onboarding as OnboardingModule } from "./Onboarding";
import { RoutesProvider } from "../../context/RoutesContext";
import { StyleWrapper } from "../../StyleWrapper";

export const Onboarding = () => {
  return (
    <RoutesProvider token="">
      <StyleWrapper>
        <ApiProvider>
          <I18nextProvider i18n={i18n}>
            <OnboardingModule />
          </I18nextProvider>
        </ApiProvider>
      </StyleWrapper>
    </RoutesProvider>
  );
};
