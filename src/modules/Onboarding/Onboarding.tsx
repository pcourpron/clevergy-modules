import classNames from "classnames";
import { useState } from "react";
import { Step } from "./components/Step";
import { useTranslation } from "react-i18next";
import { useColor } from "../../context/hooks/useColor";
import { clevergyPostMessage } from "../../utils/postMesssage";
import { Button } from "clevergy-components";

export const Onboarding = () => {
  const [step, setStep] = useState<number>(0);

  const { t } = useTranslation();
  const { primary, onboarding, textColor } = useColor();

  return (
    <>
      <div
        style={{ zIndex: 9999, color: textColor }}
        className="clevergy-fixed clevergy-overflow-hidden clevergy-top-0 clevergy-left-0 clevergy-right-0 clevergy-bottom-0 clevergy-bg-white"
      >
        <div
          style={{
            transform: `translate(-${step}00%,0px)`,
            color: textColor,
          }}
          className=" clevergy-transition-all clevergy-w-full clevergy-duration-500 clevergy-absolute clevergy-top-0 clevergy-bottom-0 clevergy-left-0 clevergy-bg-offGreen"
        >
          <div
            className="onboarding-images clevergy-w-[400%] clevergy-overflow-hidden clevergy-h-[55%]  clevergy-bg-lightAcidGreen clevergy-flex clevergy-relative clevergy-items-end clevergy-pb-3"
            style={{ backgroundColor: onboarding.background }}
          >
            <img
              className=" clevergy-translate-y-[40%] clevergy-h-auto"
              style={{
                maxWidth: "unset",
                width: "21%",
                marginLeft: "2%",
                marginRight: "2%",
              }}
              alt="comparator"
              src="https://storage.googleapis.com/clevergy-shared/images/comparadoriPhone.png"
            />
            <img
              className=" clevergy-translate-y-[0%]  clevergy-h-auto"
              style={{ maxWidth: "unset", width: "25%", marginLeft: "8%" }}
              alt="know"
              src="https://storage.googleapis.com/clevergy-shared/images/consumptionIphone.png"
            />
            <img
              className=" clevergy-ml-[4%]  clevergy-h-auto"
              alt="know"
              style={{
                objectFit: "cover",
                objectPosition: "50% 0",
                width: "25%",
              }}
              src="https://storage.googleapis.com/clevergy-shared/images/desagregationIphone.png"
            />
            <img
              className=" clevergy-h-auto clevergy-translate-x-[-48%]"
              alt="know"
              style={{
                zIndex: 10,
                width: "25%",

                objectFit: "cover",
                objectPosition: "-100px 0",
              }}
              src="https://storage.googleapis.com/clevergy-shared/images/marketplaceIphone.png"
            />
          </div>
          <div className="clevergy-relative clevergy-h-[45%] clevergy-w-[300%]  clevergy-py-6 clevergy-flex clevergy-text-cadmium">
            <Step
              title={t("onboarding.steps.1.title")}
              description={
                <>
                  <div>{t("onboarding.steps.1.description1")}</div>
                  <div>{t("onboarding.steps.1.description2")}</div>
                  <div>{t("onboarding.steps.1.description3")}</div>
                </>
              }
            />
            <Step
              title={t("onboarding.steps.2.title")}
              description={t("onboarding.steps.2.description")}
            />
            <Step
              title={t("onboarding.steps.3.title")}
              description={t("onboarding.steps.3.description")}
            />
          </div>
        </div>
        <div className="clevergy-absolute clevergy-bottom-0 clevergy-left-0 clevergy-right-0  clevergy-px-4 clevergy-pb-0">
          <div className=" clevergy-mb-1 clevergy-flex clevergy-justify-between clevergy-items-end clevergy-px-3">
            <div className="clevergy-flex clevergy-mb-4 ">
              <div
                className={classNames(
                  "clevergy-bg-seaGreen clevergy-transition-all clevergy-mr-2 clevergy-h-2 clevergy-w-2 clevergy-rounded-full",
                  { "clevergy-w-10": step === 0 }
                )}
                style={{ backgroundColor: primary }}
              ></div>
              <div
                className={classNames(
                  "clevergy-bg-seaGreen clevergy-transition-all clevergy-mr-2 clevergy-h-2 clevergy-w-2 clevergy-rounded-full",
                  { "clevergy-w-10": step === 1 }
                )}
                style={{ backgroundColor: primary }}
              ></div>
              <div
                className={classNames(
                  "clevergy-bg-seaGreen clevergy-mr-2 clevergy-transition-all clevergy-h-2 clevergy-w-2 clevergy-rounded-full",
                  { "clevergy-w-10": step === 2 }
                )}
                style={{ backgroundColor: primary }}
              ></div>
            </div>
            <div className="clevergy-flex">
              {step > 0 && step !== 2 && (
                <Button
                  className="clevergy-text-white clevergy-py-2 clevergy-px-6 clevergy-rounded-xl"
                  style={{ backgroundColor: primary }}
                  onClick={() => {
                    setStep(step - 1);
                  }}
                >
                  {"<"}
                </Button>
              )}
              <Button
                className={classNames(
                  "clevergy-text-white clevergy-py-2  clevergy-rounded-xl clevergy-ml-1 clevergy-font-[500]",
                  {
                    "clevergy-px-3 ": step === 2,
                    "clevergy-px-6 ": step !== 2,
                  }
                )}
                style={{ backgroundColor: primary }}
                data-testid="onboarding-next"
                onClick={() => {
                  if (step < 2) setStep(step + 1);
                  else {
                    clevergyPostMessage({ onboarding: { action: "close" } });
                    document.body.style.position = "initial";
                  }
                }}
              >
                {step === 0 && t("onboarding.next")}
                {step === 1 && ">"}
                {step === 2 && t("onboarding.app")}
              </Button>
            </div>
          </div>
          <button
            className={classNames(
              "clevergy-mx-auto clevergy-block clevergy-text-seaGreen",
              {
                "clevergy-opacity-0 clevergy-pointer-events-none": step === 2,
              }
            )}
            style={{ color: primary }}
            onClick={() => {
              clevergyPostMessage({ onboarding: { action: "close" } });
              document.body.style.position = "initial";
            }}
          >
            {t("onboarding.app")}
          </button>
        </div>
      </div>
    </>
  );
};
