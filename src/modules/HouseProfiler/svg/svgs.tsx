import { useColor } from "../../../context/hooks/useColor";

export const Bars = () => {
  const { primary } = useColor();
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.7497 9.177C19.325 9.177 19.7913 9.63352 19.7913 10.1967V20.3934C19.7913 20.9565 19.325 21.4131 18.7497 21.4131C18.1744 21.4131 17.708 20.9565 17.708 20.3934V10.1967C17.708 9.63352 18.1744 9.177 18.7497 9.177Z"
        fill={primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4997 3.05896C13.075 3.05896 13.5413 3.51548 13.5413 4.07863V20.3934C13.5413 20.9565 13.075 21.4131 12.4997 21.4131C11.9244 21.4131 11.458 20.9565 11.458 20.3934V4.07863C11.458 3.51548 11.9244 3.05896 12.4997 3.05896Z"
        fill={primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.24967 13.2557C6.82497 13.2557 7.29134 13.7123 7.29134 14.2754V20.3934C7.29134 20.9566 6.82497 21.4131 6.24967 21.4131C5.67438 21.4131 5.20801 20.9566 5.20801 20.3934V14.2754C5.20801 13.7123 5.67438 13.2557 6.24967 13.2557Z"
        fill={primary}
      />
    </svg>
  );
};

const profilerWidth = "20";

export const profilerBackground = (
  <svg width="208" height="208" style={{ position: "absolute" }}>
    <linearGradient id="linearColors1" gradientTransform="rotate(0)">
      <stop offset="00%" stopColor="#246EB8"></stop>
      <stop offset="100%" stopColor="#EE5253"></stop>
    </linearGradient>
    <linearGradient id="linearColors2" x1="0.5" y1="0" x2="0.5" y2="1">
      <stop offset="0%" stopColor="#FEFF01"></stop>
      <stop offset="100%" stopColor="#FF7E00"></stop>
    </linearGradient>
    <linearGradient id="linearColors3">
      <stop offset="00%" stopColor="#246EB8"></stop>
      <stop offset="100%" stopColor="#246EB8"></stop>
    </linearGradient>
    <linearGradient id="linearColors4">
      <stop offset="0%" stopColor="#FF9F43"></stop>
      <stop offset="80%" stopColor="#EE5253"></stop>
    </linearGradient>
    <linearGradient id="linearColors5" x1="0.5" y1="1" x2="0.5" y2="0">
      <stop offset="0%" stopColor="#FF9F43"></stop>
      <stop offset="40%" stopColor="#FF9F43"></stop>

      <stop offset="100%" stopColor="#108763"></stop>
    </linearGradient>
    <linearGradient id="linearColors6" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stopColor="#108763"></stop>
      <stop offset="80%" stopColor="#108763"></stop>

      <stop offset="100%" stopColor="#246EB8"></stop>
    </linearGradient>

    <path
      d="M104 10 a94 94 0 0 1 81 48"
      fill="none"
      stroke="url(#linearColors3)"
      strokeWidth={profilerWidth}
      strokeLinecap="round"
    />
    <path
      d="M185 154 a94 94 0 0 1 -81 44"
      fill="none"
      stroke="url(#linearColors4)"
      strokeLinecap="round"
      strokeWidth={profilerWidth}
    />
    <path
      d="M104 198 a94 94 0 0 1 -94 -94"
      fill="none"
      stroke="url(#linearColors5)"
      strokeWidth={profilerWidth}
    />
    <path
      d="M10 104 a94 94 0 0 1 94 -94"
      fill="none"
      stroke="url(#linearColors6)"
      strokeWidth={profilerWidth}
    />
  </svg>
);
