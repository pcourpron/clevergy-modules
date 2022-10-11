import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useRoutes } from "../../../context/hooks/useRoutes";

export const useGetHouseProfiler = ({
  cups,
  date,
}: {
  cups: string;
  date: Date;
}) => {
  const { clevergySdk } = useRoutes();
  return useQuery(
    [
      "houseProfiler",
      {
        cups,
        date: format(date, "yyyy-MM-dd'T'00:00:00.000'Z'"),
      },
    ],
    async () => {
      try {
        const result = await clevergySdk?.getHouseProfile({
          payload: { cups, date: format(date, "yyyy-MM-dd'T'00:00:00.000'Z'") },
        });

        return result;
      } catch (e) {
        console.log(e);
        throw new Error("Error getting house profile");
      }
    },
    { enabled: !!cups }
  );
};
