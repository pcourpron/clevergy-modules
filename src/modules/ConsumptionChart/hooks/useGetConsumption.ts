/* istanbul ignore file */
import { useQuery } from "@tanstack/react-query";
import { Granularity } from "clevergy-sdk/dist/src/routes";
import { format } from "date-fns";
import { useRoutes } from "../../../context/hooks/useRoutes";

export const useGetConsumption = ({
  cups,
  startDate,
  endDate,
  granularity,
}: {
  cups: string;
  startDate: Date;
  endDate: Date;
  granularity: Granularity;
}) => {
  const { clevergySdk } = useRoutes();
  return useQuery(
    [
      "consumptionChart",
      {
        cups,
        granularity,
        startDate: format(startDate, "yyyy-MM-dd'T'00:00:00.000'Z'"),
        endDate: format(endDate, "yyyy-MM-dd'T'23:59:59.999'Z'"),
      },
    ],
    async () =>
      await clevergySdk?.getHouseConsumption({
        payload: {
          cups,
          granularity,
          startDate: format(startDate, "yyyy-MM-dd'T'00:00:00.000'Z'"),
          endDate: format(endDate, "yyyy-MM-dd'T'23:59:59.999'Z'"),
        },
      })
  );
};
