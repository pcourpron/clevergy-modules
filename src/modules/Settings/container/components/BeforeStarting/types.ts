export type BeforeStartingProps = {
  beforeStartingValues: {
    houseType?: string;
    meters: number;
    housePeople: number;
  };
  onChange({
    houseType,
    meters,
    housePeople,
  }: {
    houseType?: string;
    meters?: number;
    housePeople?: number;
  }): void;
};
