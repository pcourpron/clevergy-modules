import { useTranslation } from "react-i18next";
import { Bars, profilerBackground } from "./svg/svgs";
import { useGetHouseProfiler } from "./hooks/getHouseProfiler";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { ProfilerMessage } from "./ProfilerMessage";
import { MonthNav } from "./MonthsNav";
import { InfoModal } from "./components /InfoModal";
import subMonths from "date-fns/subMonths";
import { Loader } from "clevergy-components";
import { isSameMonth } from "date-fns";
import { FC } from "react";
import { HouseProfilerProps } from "./types";
import { useColor } from "../../context/hooks/useColor";
export enum Profiles {
  TOP_SAVER = "top_saver",
  SAVER = "saver",
  MEDIUM = "medium",
  CAN_IMPROVE = "can_improve",
}
const getColorByProfile = (pro?: string): string => {
  if (!pro) return "darkGrey";
  switch (Profiles[pro as keyof typeof Profiles]) {
    case Profiles.TOP_SAVER:
      return "blueStreak";
    case Profiles.SAVER:
      return "cadmium";
    case Profiles.MEDIUM:
      return "darkOrange";
    case Profiles.CAN_IMPROVE:
      return "red";
    default:
      return "darkGrey";
  }
};

export const HouseProfiler: FC<HouseProfilerProps> = ({ cups }) => {
  const todayPreviousMonth = subMonths(new Date(), 1);

  const { t } = useTranslation();
  const [profileColor, setProfileColor] = useState<string>("blueStreak");
  const [nextProfileColor, setNextProfileColor] = useState<string>("darkGrey");
  const [previousProfileColor, setPreviousProfileColor] =
    useState<string>("darkGrey");
  const [borderColor, setBorderColor] = useState<string>();
  const [profileLabel, setProfileLabel] = useState<string>(
    "profiler.profiles.top_saver"
  );
  const [date, setDate] = useState<Date>(subMonths(new Date(), 1));
  const [leftPosition, setLeftPosition] = useState<string>("0px");
  const [topPosition, setTopPosition] = useState<string>("0px");
  const { primary } = useColor();

  const { data, isLoading } = useGetHouseProfiler({
    cups,
    date,
  });

  useEffect(() => {
    const pro = data ? data.profile : "TOP_SAVER";
    switch (Profiles[pro as keyof typeof Profiles]) {
      case Profiles.TOP_SAVER:
        setProfileColor("clevergy-text-blueStreak");
        setBorderColor("clevergy-border-blueStreak");

        setLeftPosition("clevergy-left-[138px]");
        setTopPosition("clevergy-top-[8px]");
        break;
      case Profiles.SAVER:
        setProfileColor("clevergy-text-cadmium");
        setBorderColor("clevergy-border-cadmium");

        setLeftPosition("clevergy-left-[8px]");
        setTopPosition("clevergy-top-[30px]");
        break;
      case Profiles.MEDIUM:
        setProfileColor("clevergy-text-darkOrange");
        setBorderColor("clevergy-border-darkOrange");

        setLeftPosition("clevergy-left-[33px]");
        setTopPosition("clevergy-top-[163px]");
        break;

      case Profiles.CAN_IMPROVE:
        setProfileColor("clevergy-text-red");
        setBorderColor("clevergy-border-red");

        setLeftPosition("clevergy-left-[155px]");
        setTopPosition("clevergy-top-[150px]");
        break;
      default:
        setProfileColor("clevergy-text-darkGrey");
        setBorderColor("clevergy-border-darkGrey");

        setLeftPosition("clevergy-left-[178px]");
        setTopPosition("clevergy-top-[25px]");
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const label = `profiler.profiles.${
        Profiles[data.profile as keyof typeof Profiles]
      }`;
      setProfileLabel(label);
    }
  }, [data]);

  useEffect(() => {
    const nextPro = data ? data.nextProfile : undefined;
    const previousPro = data ? data.previousProfile : undefined;
    setNextProfileColor(getColorByProfile(nextPro));
    setPreviousProfileColor(getColorByProfile(previousPro));
  }, [data]);

  return (
    <div>
      <div className="clevergy-mb-6">
        <div className="clevergy-flex clevergy-items-center clevergy-justify-between clevergy-relative">
          <div
            className="clevergy-flex clevergy-items-start"
            style={{ maxWidth: "calc(100% - 25px)" }}
          >
            <div className="clevergy-mr-1">
              <Bars />
            </div>
            <span
              className="clevergy-text-lightSeaGreen clevergy-text-xl clevergy-font-semibold"
              style={{ color: primary }}
            >
              {t("profiler.title")}
            </span>
          </div>
          <div>
            <InfoModal />
          </div>
        </div>
      </div>
      <div className="clevergy-relative clevergy-flex clevergy-justify-center clevergy-items-center clevergy-bg-contain clevergy-m-auto  clevergy-w-[209px] clevergy-h-[209px] clevergy-bg-center clevergy-bg-no-repeat  ]">
        {profilerBackground}

        {data?.profile && (
          <div
            className={classNames(
              "clevergy-w-[40px] clevergy-h-[40px] clevergy-bg-white clevergy-rounded-full clevergy-border-8 clevergy-absolute clevergy-animate-pulse-slow",
              topPosition,
              borderColor,
              leftPosition
            )}
          />
        )}
        <div className="clevergy-text-center clevergy-p-2 clevergy-mt-[-10px]">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <p
                className={classNames(
                  "clevergy-text-3xl clevergy-font-bold",
                  profileColor
                )}
              >
                {data?.kpi} €
              </p>
              <p
                className={classNames(
                  "clevergy-text-sm clevergy-font-semibold clevergy-mx-6 clevergy-mt-px",
                  profileColor
                )}
              >
                {t(profileLabel)}
              </p>
            </>
          )}
        </div>
      </div>
      <MonthNav
        date={date}
        nextProColor={nextProfileColor}
        previousProColor={previousProfileColor}
        onChange={(date) => setDate(date)}
      />

      {data && isSameMonth(todayPreviousMonth, new Date(date)) && (
        <ProfilerMessage
          profileColor={profileColor}
          borderColor={borderColor}
          profile={data.profile}
          kpiMargin={data?.kpiMargin}
        />
      )}
    </div>
  );
};
