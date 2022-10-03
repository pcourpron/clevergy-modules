import { FC, ReactNode } from "react";
import { createContext } from "react";
import { useGetColors } from "./hooks/useGetColors";
//HERE
const defaultColors = {
  primary: "#3BA9A0",
  lightGrey: "#F7F7F7",
  grey: "#F9F9F9",
  darkGrey: "#B3B3B3",
  darkerGrey: "#E0E5EB",
  borderGrey: "#DEE0EB",
  terciary: "#B1DCB5",
  secondary: "#FEC639",
  warning: "#FF902A",
  mossGreen: "#8F915C",
  blueStreak: "#246EB8",
  red: "#EE5253",
  onboarding: {
    background: "#DFEBE7",
  },
  textColor: "#404040",
  granularity: {
    buttonColor: "#3BA9A0B2",
    textColor: "#404040",
  },
  datePicker: "#3BA9A0B2",
  chart: {
    offPeak: "#B1DCB5",
    standard: "#FEC639",
    peak: "#FF902A",
    plana: "#3BA9A0",
    day: "#C8CB47",
    night: "#006633",
  },
  breakdown: {
    colors: ["#3BA9A0B2", "#8F915C", "#FEC639", "#006633"],
  },
};

const naturgyDefault = {
  primary: "#004571",
  lightGrey: "#F7F7F7",
  grey: "#F9F9F9",
  darkGrey: "#B3B3B3",
  darkerGrey: "#E0E5EB",
  borderGrey: "#DEE0EB",
  terciary: "#E57200",
  secondary: "#E57200",
  warning: "#FF902A",
  mossGreen: "#8F915C",
  blueStreak: "#246EB8",
  red: "#EE5253",
  onboarding: {
    background: "#DFEBE7",
  },
  textColor: "#004571",
  granularity: {
    buttonColor: "#004571",
    textColor: "#404040",
  },
  datePicker: "#E57200",
  chart: {
    offPeak: "#FF757C",
    standard: "#FFBB7D",
    peak: "#E5ED7C",
    plana: "#E57200",
    day: "#E5ED7C",
    night: "#FF757C",
  },
  breakdown: {
    colors: ["#3BA9A0B2", "#8F915C", "#FEC639", "#006633"],
  },
};

const colors: { [key: string]: { [key: string]: any } } = {
  naturgy: naturgyDefault,
  "": defaultColors,
  default: {},
} as const;

const company = localStorage.getItem("company") ?? "";
export const ColorContext = createContext(colors[company]);

export const ColorProvider: FC<{
  children: ReactNode;
  element: HTMLElement;
}> = ({ children, element }) => {
  const color = useGetColors(element);
  return (
    <ColorContext.Provider value={{ ...defaultColors, ...color }}>
      {children}
    </ColorContext.Provider>
  );
};
