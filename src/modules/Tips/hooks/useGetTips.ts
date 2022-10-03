/* istanbul ignore file */
import { useQuery } from "@tanstack/react-query";
import { useRoutes } from "../../../context/hooks/useRoutes";

export const useGetTip = ({ cups }: { cups: string }) => {
  const { clevergySdk } = useRoutes();
  return useQuery(
    [
      "gettip",
      {
        cups,
      },
    ],
    async () => {
      const result = await clevergySdk?.getTip({ payload: { cups } });
      if (result?.outcome === "FAILURE") {
        throw new Error("Get tip failure");
      } else return result?.data;
    },
    {
      staleTime: 0,
    }
  );
};
