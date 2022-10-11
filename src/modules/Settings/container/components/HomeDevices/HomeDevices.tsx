import { FC, useEffect } from "react";
import { Card } from "clevergy-components";
import { Header } from "../Header/Header";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { useColor } from "../../../../../context/hooks/useColor";
import { deviceLogos } from "./devices";

type HomeDevicesProps = {
  devices: string[];
  onChange(devices: string[]): void;
};
export enum Devices {
  HOT_WATER = "Agua caliente",
  HEATING = "Calefacción",
  AC = "A/C",
  FRIDGE = "Frigorífico",
  FREEZER = "Congelador",
  OVEN = "Horno",
  CERAMIC = "Vitro o inducción",
  WASHING_MACHINE = "Lavadora",
  DRYER = "Secadora",
  DISHWASHER = "Lavavajillas",
  TV = "TV",
  COMPUTER = "Ordenadores",
}

export const HomeDevices: FC<HomeDevicesProps> = ({ onChange, devices }) => {
  const { t } = useTranslation();

  const { primary } = useColor();

  useEffect(() => {
    onChange(devices);
  }, [devices, onChange]);

  const updateDevicesList = (device: string) => {
    onChange(toggleDevice(device));
  };

  const toggleDevice = (device: string) => {
    if (devices.includes(device))
      return devices?.filter((element) => element !== device);
    return [...devices, device];
  };

  return (
    <div>
      <Header title={t("user-settings.home-devices.title")} />
      <div className="clevergy-grid clevergy-grid-cols-3 clevergy-auto-cols-auto clevergy-gap-4 clevergy-text-[14px] clevergy-px-4">
        {(Object.keys(Devices) as (keyof typeof Devices)[]).map((key) => {
          const selected = devices?.includes(key);
          return (
            <Card
              key={`card-${key}`}
              className={classNames(
                `clevergy-border-2 clevergy-bg-white clevergy-border-borderGrey clevergy-flex clevergy-flex-col clevergy-justify-center clevergy-h-[100px]`,
                {
                  "clevergy-border-seaGreen": selected,
                }
              )}
              style={{
                borderColor: selected ? primary : undefined,
                fill: selected ? primary : "#B3B3B3",
                stroke: selected ? primary : "#B3B3B3",
              }}
              onClick={() => {
                updateDevicesList(key);
              }}
            >
              {deviceLogos[key]}
              <div
                data-testid={`device-${key}`}
                className={classNames(
                  `clevergy-text-darkGrey clevergy-font-semibold`,
                  {
                    "clevergy-text-seaGreen": devices?.includes(key),
                  }
                )}
                style={{
                  color: devices?.includes(key) ? primary : undefined,
                }}
              >
                {Devices[key]}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
