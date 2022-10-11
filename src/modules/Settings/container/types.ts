import { RateTypes } from "./components/RateType/types";

export type UserSettingsProps = {
  userSettings?: UserSettings;
  toggleOverlay(): void;
  refetch(): void;
  asOverlay?: boolean;
  token: string;
  cups: string;
};
export type UserSettings = {
  userId: string;
  completed: boolean;
  houseType?: string;
  meters?: number;
  housePeople?: number;
  devices?: Array<string>;
  rateType?: RateTypes;
};
