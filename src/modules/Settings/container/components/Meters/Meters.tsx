import { useColor } from "../../../../../context/hooks/useColor";
import { FC, useEffect } from "react";
import { useRef, useState } from "react";

const min = 0;
const max = 400;

type MetersProps = {
  meters: number;
  onChange: ({ meters }: { meters: number }) => void;
};

export const Meters: FC<MetersProps> = ({ meters, onChange }) => {
  const [left, setLeft] = useState<number>(50);
  const { primary } = useColor();
  const output = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newValue = Number(((meters - min) * 100) / (max - min)),
      newPosition = 10 - newValue * 0.2;
    setLeft(newValue);
    if (output.current)
      output.current.style.left = `calc(${newValue}% + (${newPosition}px))`;
  }, [meters]);

  return (
    <div className="clevergy-mt-[72px] clevergy-relative">
      <div
        data-testid="meters-output"
        ref={output}
        className="clevergy-text-center clevergy-w-[74px] clevergy-text-sm clevergy-absolute clevergy-pointer-events-none slider-container clevergy-shadow clevergy-py-2 clevergy-px-3 "
        style={{
          transform: "translate(-50%, calc(-100% - 10px))",
          borderRadius: 16,
        }}
      >
        {meters} m<sup>2</sup>
      </div>
      <input
        data-testid="meters-slider"
        type="range"
        min={min}
        max={max}
        step="5"
        value={meters}
        onChange={({ target }) => {
          onChange({ meters: Number(target.value) });
        }}
        style={{
          backgroundImage: `linear-gradient(90deg, ${primary} ${left}%, #D9D9D9 ${left}%`,
        }}
        className="clevergy-appearance-none clevergy-h-2 clevergy-w-full clevergy-rounded-lg clevergy-bg-seaGreen"
      />
    </div>
  );
};
