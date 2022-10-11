import classNames from "classnames";
import { Card } from "clevergy-components";
import { useColor } from "../../../../../context/hooks/useColor";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../Header";
import { RateTypes, RateTypeProps } from "./types";
import { Radio } from "./svg/Radio";
import { Moon } from "./svg/Moon";
import { Flat } from "./svg/Flat";
import { Other } from "./svg/Other";
export const RateType: FC<RateTypeProps> = ({ onRateChange, rateType }) => {
  const { primary } = useColor();
  const { t } = useTranslation();
  return (
    <div className="clevergy-mb-10">
      <Header title={t("user-settings.rate.title")} />
      <div className="clevergy-grid clevergy-grid-cols-4 clevergy-auto-cols-auto clevergy-gap-2 clevergy-text-[14px] clevergy-px-4">
        {["REGULATED", "FLAT", "NIGHT", "OTHER"].map((type) => {
          return (
            <Card
              key={type}
              className={classNames(
                `clevergy-border-2 clevergy-text-center clevergy-font-semibold clevergy-text-darkGrey clevergy-text-[11px] clevergy-p-1 clevergy-bg-white clevergy-border-borderGrey clevergy-flex clevergy-flex-col clevergy-justify-center clevergy-h-[80px]`,
                {
                  "clevergy-border-seaGreen clevergy-text-seaGreen clevergy-font-bold":
                    rateType === type,
                }
              )}
              style={{
                whiteSpace: "pre-line",
                borderColor: rateType === type ? primary : undefined,
                fill: rateType === type ? primary : "#B3B3B3",
                stroke: rateType === type ? primary : "#B3B3B3",
                color: rateType === type ? primary : undefined,
              }}
              onClick={() => {
                onRateChange(type as RateTypes);
              }}
            >
              {svgs[type as keyof typeof svgs]}
              <div className="clevergy-mt-1">{t(type)}</div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const svgs = {
  REGULATED: <Radio />,
  NIGHT: <Moon />,
  FLAT: <Flat />,
  OTHER: <Other />,
} as const;
