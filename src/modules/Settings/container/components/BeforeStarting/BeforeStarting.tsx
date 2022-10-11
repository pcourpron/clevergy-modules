import { FC } from "react";
import { Card } from "clevergy-components";
import { Header } from "../Header/Header";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Piso } from "../svg/Piso";
import { House } from "../svg/House";
import { useColor } from "../../../../../context/hooks/useColor";
import { Meters } from "../Meters";
import { HousePeople } from "../HousePeople/People";
import { BeforeStartingProps } from "./types";

export const BeforeStarting: FC<BeforeStartingProps> = ({
  onChange,
  beforeStartingValues,
}) => {
  const { houseType, meters, housePeople } = beforeStartingValues;
  const { t } = useTranslation();
  const { primary } = useColor();
  return (
    <div>
      <Header title={t("user-settings.before-starting.title")} />
      <div className="clevergy-grid clevergy-grid-cols-2 clevergy-auto-cols-auto clevergy-gap-4 clevergy-px-4">
        <Card
          className={classNames(
            `clevergy-border-2 clevergy-bg-white clevergy-border-borderGrey clevergy-py-4`
          )}
          style={{
            borderColor: houseType === "FLAT" ? primary : undefined,
          }}
          onClick={() => {
            onChange({ houseType: "FLAT" });
          }}
        >
          <div
            className={classNames(
              `clevergy-text-darkGrey clevergy-font-semibold clevergy-text-[14px]`
            )}
            style={{
              color: houseType === "FLAT" ? primary : undefined,
            }}
          >
            {t("user-settings.flat")}
          </div>
          <Piso />
        </Card>
        <Card
          className={classNames(
            `clevergy-border-2 clevergy-bg-white clevergy-border-borderGrey clevergy-py-4`
          )}
          style={{
            borderColor: houseType === "HOME" ? primary : undefined,
          }}
          onClick={() => onChange({ houseType: "HOME" })}
        >
          <div
            className={classNames(
              `clevergy-text-darkGrey clevergy-font-semibold clevergy-text-[14px] clevergy-whitespace-nowrap`
            )}
            style={{
              color: houseType === "HOME" ? primary : undefined,
            }}
          >
            {t("user-settings.home")}
          </div>
          <House />
        </Card>
      </div>

      <hr className="clevergy-solid mt-6" />
      <Header title={t("user-settings.people.title")} />
      <HousePeople housePeople={housePeople} onChange={onChange} />
      <div className="clevergy-px-4">
        <Meters meters={meters} onChange={onChange} />
      </div>
    </div>
  );
};
