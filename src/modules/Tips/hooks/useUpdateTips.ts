/* istanbul ignore file */

import { useMutation } from "@tanstack/react-query";
import { useRoutes } from "../../../context/hooks/useRoutes";

export const useUpdateTip = () => {
  const { clevergySdk } = useRoutes();
  return useMutation(clevergySdk!.updateTip);
};
