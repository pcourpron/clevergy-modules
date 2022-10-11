import { UserSettings } from "../types";

export const updateUserSettings = async ({
  cups,
  token,
  meters,
  housePeople,
  houseType,
  homeDevicesValues,
  rateType,
}: {
  cups: string;
  token: string;
  homeDevicesValues: string[];
  rateType: string;
} & Omit<UserSettings, "completed" | "devices">) => {
  return await fetch(`https://api.clever.gy/user-settings/${cups}`, {
    method: "POST",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      houseType,
      rateType,
      meters,
      housePeople,
      cups,
      devices: homeDevicesValues,
      completed: true,
    }),
  });
};
