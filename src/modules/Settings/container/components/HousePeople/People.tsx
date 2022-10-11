import { useColor } from "../../../../../context/hooks/useColor";
import { Card } from "clevergy-components";
import classNames from "classnames";
import { HousePeople1 } from "../svg/HousePeople1";
import { HousePeople2 } from "../svg/HousePeople2";
import { HousePeople3 } from "../svg/HousePeople3";
import { HousePeople4 } from "../svg/HousePeople4";
import { FC } from "react";
import { HousePeopleProps } from "./types";

export const HousePeople: FC<HousePeopleProps> = ({
  housePeople,
  onChange,
}) => {
  const { primary } = useColor();

  const peopleSVGs = {
    1: <HousePeople1 />,
    2: <HousePeople2 />,
    3: <HousePeople3 />,
    4: <HousePeople4 />,
  } as const;

  return (
    <div
      className={`clevergy-grid clevergy-grid-cols-4 clevergy-auto-cols-auto clevergy-gap-4 clevergy-items-center clevergy-px-4 `}
    >
      {[1, 2, 3, 4].map((number) => (
        <Card
          key={`house-card-${number}`}
          className={classNames(
            `clevergy-border-2 clevergy-bg-white clevergy-border-borderGrey clevergy-py-4 clevergy-flex-col clevergy-w-[74px] clevergy-m-auto`,
            {
              "clevergy-border-seaGreen": housePeople === number,
            }
          )}
          style={{
            borderColor: housePeople === number ? primary : undefined,
            fill: housePeople === number ? primary : "#B3B3B3",
            stroke: housePeople === number ? primary : "#B3B3B3",
          }}
          onClick={() => onChange({ housePeople: number })}
        >
          <div data-testid={`house-people-${number}`} />
          {peopleSVGs[number as keyof typeof peopleSVGs]}
        </Card>
      ))}
    </div>
  );
};
