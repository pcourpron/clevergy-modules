import { useContext } from "react";
import { RoutesContext } from "../RoutesContext";

export const useRoutes = () => useContext(RoutesContext);
