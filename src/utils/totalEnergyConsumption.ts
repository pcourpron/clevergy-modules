export const totalEnergyConsumption = (
  energyData?: {
    date: string;
    kwh: number;
    categories: {
      label: string;
      kwh: number;
    }[];
  }[]
) => {
  if (!energyData || energyData.length === 0)
    return {
      categories: [],
      totals: {},
    };
  const categories = energyData[0].categories.map(({ label }) => label);
  const totals: { [key: string]: number } = {};

  categories.forEach((category) => {
    totals[category] = energyData
      .flatMap(({ categories }) => categories)
      .reduce((acc, { label, kwh }) => {
        if (label === category) return acc + kwh;
        return acc;
      }, 0);
  });

  return {
    categories,
    totals,
  };
};

export const formatEnergyToString = (
  energy: number,
  scale?: "Wh" | "kWh"
): string => {
  if (scale === "Wh") {
    return `${(energy * 1000).toFixed(1)} Wh`;
  } else if (scale === "kWh") {
    return `${energy.toFixed(1)} kWh`;
  }
  if (energy < 0.09) {
    return `${(energy * 1000).toFixed(1)} Wh`;
  }
  if (energy < 1000) {
    return `${energy.toFixed(1)} kWh`;
  }
  if (energy >= 1000) {
    return `${(energy / 1000).toFixed(1)} MWh`;
  }
  return `${energy.toFixed(1)} kWh`;
};

export const totalConsumption = (
  energyData?: {
    date: string;
    kwh: number;
  }[]
) => {
  return energyData?.reduce((acc, curr) => acc + curr.kwh, 0) ?? 0;
};
