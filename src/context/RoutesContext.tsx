import { buildClevergyApiSdk, ClevergySdk } from "clevergy-sdk";
import { createContext, FC, ReactNode } from "react";

export const RoutesContext = createContext<{ clevergySdk?: ClevergySdk }>({});

export const RoutesProvider: FC<{ children: ReactNode; token: string }> = ({
  children,
  token,
}) => {
  const { clevergySdk } = buildClevergyApiSdk(token);
  return (
    <RoutesContext.Provider value={{ clevergySdk }}>
      {children}
    </RoutesContext.Provider>
  );
};
