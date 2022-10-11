import { useTranslation } from "react-i18next";
import { FC } from "react";
import classNames from "classnames";
import { Profiles } from "./HouseProfiler";

type ProfilerMessageProps = {
  profileColor: string;
  borderColor?: string;
  profile?: string;
  kpiMargin?: number;
};

export const ProfilerMessage: FC<ProfilerMessageProps> = ({
  profileColor,
  borderColor,
  profile,
  kpiMargin,
}) => {
  const { t } = useTranslation();

  const firstMessage = `profiler.message.${
    Profiles[profile as keyof typeof Profiles]
  }.first`;
  const boldMessage = `profiler.message.${
    Profiles[profile as keyof typeof Profiles]
  }.bold`;
  const secondMessage = `profiler.message.${
    Profiles[profile as keyof typeof Profiles]
  }.second`;

  return (
    <div
      className={classNames(
        "clevergy-border-2 clevergy-rounded-lg clevergy-p-2 clevergy-mt-4 clevergy-mx-2",
        borderColor
      )}
    >
      <div className="clevergy-text-grey-p2">
        {t(firstMessage)}
        <span className={classNames("clevergy-font-bold", profileColor)}>
          {t(boldMessage, { kpiMargin })}
        </span>
        {t(secondMessage)}
      </div>
    </div>
  );
};
