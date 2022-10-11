/* istanbul ignore file */
import { useQuery } from "@tanstack/react-query";
import { useRoutes } from "../../../context/hooks/useRoutes";

export const useGetDateRange = (houseId: string) => {
  const { clevergySdk } = useRoutes();
  return useQuery(
    [
      "consumptionRange",
      {
        houseId,
      },
    ],
    async () => {
      const { firstConsumptionDate, lastConsumptionDate } =
        await clevergySdk!.getLastConsumptionData({ payload: { houseId } });
      return {
        firstConsumptionDate: new Date(firstConsumptionDate),
        lastConsumptionDate: new Date(lastConsumptionDate),
      };
    },
    {
      enabled: !!houseId,
    }
  );
};
