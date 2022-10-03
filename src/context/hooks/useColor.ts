import { useContext } from "react";
import { ColorContext } from "../ColorContext";

export const useColor = () => useContext(ColorContext);
