import { FC, useState } from "react";
import { clevergyPostMessage } from "../../../utils/postMesssage";
import { BeforeStarting } from "./components/BeforeStarting/BeforeStarting";
import { HomeDevices } from "./components/HomeDevices/HomeDevices";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { useEffect } from "react";
import { useColor } from "../../../context/hooks/useColor";
import { UserSettingsProps } from "./types";
import { updateUserSettings } from "./api/updateUserSettings";
import { RateType } from "./components/RateType/RateType";
import { RateTypes } from "./components/RateType/types";
import { useQueryClient } from "@tanstack/react-query";

export const UpdateSettings: FC<UserSettingsProps> = ({
  toggleOverlay,
  refetch,
  asOverlay,
  userSettings,
  token,
  cups,
}) => {
  const { t } = useTranslation();
  const { primary } = useColor();

  const queryClient = useQueryClient();

  const [houseType, setHouseType] = useState<string | undefined>(
    userSettings?.houseType ?? ""
  );
  const [meters, setMeters] = useState<number>(userSettings?.meters || 0);
  const [housePeople, setHousePeople] = useState<number>(
    userSettings?.housePeople || 0
  );
  const [homeDevicesValues, setHomeDevicesValues] = useState<string[]>(
    userSettings?.devices ?? []
  );
  const [rateType, setRateType] = useState<RateTypes | undefined>(
    userSettings?.rateType
  );
  const [message, setMessage] = useState<string>();
  const [messageColor, setMessageColor] = useState<string>("");
  const [demoCups, setDemoCups] = useState<boolean>(false);
  const submitFunction = async () => {
    try {
      queryClient.removeQueries(["consumptionChart"]);
      await updateUserSettings({
        cups: cups,
        userId: userSettings!.userId,
        houseType: houseType!,
        housePeople,
        meters,
        token,
        homeDevicesValues,
        rateType: rateType!,
      });
      refetch();
      clevergyPostMessage({ refreshDetails: true });
      clevergyPostMessage({ settingsSaved: true });
      toggleOverlay();
      setMessage(t("Guardado correctamente"));
      setMessageColor(t("clevergy-text-green-500"));
      setTimeout(() => {
        setMessage(undefined);
      }, 3000);
    } catch (e) {
      console.log(e);
      setMessageColor(t("clevergy-text-red-500"));

      setMessage(t("Algo ha fallado"));
      setTimeout(() => {
        setMessage(undefined);
      }, 3000);
    }
  };

  useEffect(() => {
    if (userSettings?.completed) {
      setHouseType(userSettings?.houseType);
      setMeters(userSettings?.meters ? userSettings.meters : 0);
      setHousePeople(userSettings?.housePeople ? userSettings.housePeople : 0);
      setHomeDevicesValues(userSettings?.devices ?? []);
    }
  }, [userSettings]);

  useEffect(() => {
    if (cups === "DEMOCUPS") {
      setDemoCups(true);
    }
  }, [cups]);

  const disabled = homeDevicesValues.length === 0 || !houseType;

  return (
    <div
      className={classNames({
        "clevergy-z-[9999] clevergy-fixed clevergy-overflow-y-scroll clevergy-bottom-0 clevergy-top-0 clevergy-left-0 clevergy-right-0":
          asOverlay,
      })}
    >
      <BeforeStarting
        onChange={({ houseType, meters, housePeople }) => {
          houseType && setHouseType(houseType);
          meters && setMeters(meters);
          housePeople && setHousePeople(housePeople);
        }}
        beforeStartingValues={{ houseType, meters, housePeople }}
      />
      <hr className="clevergy-solid clevergy-mt-6" />
      <HomeDevices
        onChange={setHomeDevicesValues}
        devices={homeDevicesValues}
      />
      <hr className="clevergy-solid clevergy-mt-6" />

      <RateType onRateChange={setRateType} rateType={rateType} />

      {!demoCups && (
        <div className="clevergy-px-4">
          <button
            disabled={disabled}
            className={classNames(
              "clevergy-bg-seaGreen clevergy-text-white clevergy-py-3 clevergy-font-semibold clevergy-rounded clevergy-w-full",
              { "clevergy-bg-darkGrey": disabled }
            )}
            style={{ backgroundColor: !disabled ? primary : undefined }}
            onClick={submitFunction}
          >
            {t("user-settings.save")}
          </button>

          <span
            className={classNames(
              " clevergy-mx-auto clevergy-block clevergy-text-center clevergy-mt-1",
              {
                "clevergy-opacity-1": !!message,
                "clevergy-opacity-0": !message,
                [messageColor]: !!messageColor,
              }
            )}
          >
            {message}
          </span>
        </div>
      )}
    </div>
  );
};
