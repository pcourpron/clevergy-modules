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
      try {
        const result = await clevergySdk?.getTip({ payload: { cups } });
        return result;
      } catch (e) {
        throw new Error("Get tip failure");
      }
    },
    {
      staleTime: 0,
      enabled: !!cups,
    }
  );
};
