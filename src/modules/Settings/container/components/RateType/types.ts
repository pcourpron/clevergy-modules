export type RateTypeProps = {
  rateType?: RateTypes;
  onRateChange(Rate: RateTypes): void;
};

export type RateTypes = "FLAT" | "NIGHT" | "REGULATED" | "NONE";
