import { useQuery } from "@tanstack/react-query";
import { useRoutes } from "../../../context/hooks/useRoutes";

export const useGetUserSettings = (cups: string) => {
  const { clevergySdk } = useRoutes();
  return useQuery(
    ["userSettings", { cups }],
    async () => await clevergySdk!.getHouseSettings({ payload: { cups } }),
    { enabled: !!cups }
  );
};
