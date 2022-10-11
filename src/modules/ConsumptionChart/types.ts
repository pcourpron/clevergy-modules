export interface ConsumptionChartProps {
  id: string;
  token: string;
  mode?: "mini";
  cups: string;
  houseId: string;
}

export enum Granularity {
  DAILY = "DAILY",
  MONTHLY = "MONTHLY",
  HOURLY = "HOURLY",
}
