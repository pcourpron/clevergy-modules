import { render, screen } from "@testing-library/react";
import { HouseProfiler } from "../HouseProfiler";

let mockedProfiler: {
  data: {
    userId: string;
    firstDayMonth: Date;
    profile?: string;
    kpi: number;
    kpiMargin: number;
  };
};
jest.mock("../hooks/getHouseProfiler", () => ({
  useGetHouseProfiler: () => mockedProfiler,
}));
jest.useFakeTimers().setSystemTime(new Date("2022-07-19"));

describe("House profiler", () => {
  it("should render house profiler section", () => {
    mockedProfiler = {
      data: {
        userId: "userId",
        firstDayMonth: new Date("2022-06-01"),
        profile: "TOP_SAVER",
        kpi: 46.4,
        kpiMargin: 15,
      },
    };
    render(<HouseProfiler cups="123" id="12345" token="token" />);
    expect(screen.getByText("profiler.title")).toBeInTheDocument();
    expect(screen.getByText("common.months.5")).toBeInTheDocument();
  });

  it("should render house profiler for top ahorrador", () => {
    mockedProfiler = {
      data: {
        userId: "userId",
        firstDayMonth: new Date("2022-06-01"),
        profile: "TOP_SAVER",
        kpi: 46.4,
        kpiMargin: 15,
      },
    };
    render(<HouseProfiler cups="123" id="12345" token="token" />);
    expect(screen.getByText("profiler.profiles.top_saver")).toBeInTheDocument();
    expect(screen.getByText("profiler.profiles.top_saver")).toHaveClass(
      "clevergy-text-blueStreak"
    );
    expect(screen.getByText("46.4 €")).toBeInTheDocument();
    expect(screen.getByText("46.4 €")).toHaveClass("clevergy-text-blueStreak");

    expect(screen.getByText("profiler.message.top_saver.bold")).toHaveClass(
      "clevergy-text-blueStreak"
    );
  });

  it("should render house profiler for perfil ahorrador", () => {
    mockedProfiler = {
      data: {
        userId: "userId",
        firstDayMonth: new Date("2022-06-01"),
        profile: "SAVER",
        kpi: 52.0,
        kpiMargin: 15,
      },
    };
    render(<HouseProfiler cups="123" id="12345" token="token" />);
    expect(screen.getByText("profiler.profiles.saver")).toBeInTheDocument();
    expect(screen.getByText("profiler.profiles.saver")).toHaveClass(
      "clevergy-text-cadmium"
    );
    expect(screen.getByText("52 €")).toBeInTheDocument();
    expect(screen.getByText("52 €")).toHaveClass("clevergy-text-cadmium");

    expect(screen.getByText("profiler.message.saver.bold")).toHaveClass(
      "clevergy-text-cadmium"
    );
  });

  it("should render house profiler for perfil medio", () => {
    mockedProfiler = {
      data: {
        userId: "userId",
        firstDayMonth: new Date("2022-06-01"),
        profile: "MEDIUM",
        kpi: 63.2,
        kpiMargin: 15,
      },
    };
    render(<HouseProfiler cups="123" id="12345" token="token" />);
    expect(screen.getByText("profiler.profiles.medium")).toBeInTheDocument();
    expect(screen.getByText("profiler.profiles.medium")).toHaveClass(
      "clevergy-text-darkOrange"
    );
    expect(screen.getByText("63.2 €")).toBeInTheDocument();
    expect(screen.getByText("63.2 €")).toHaveClass("clevergy-text-darkOrange");

    expect(screen.getByText("profiler.message.medium.bold")).toHaveClass(
      "clevergy-text-darkOrange"
    );
  });

  it("should render house profiler for puedes mejorar", () => {
    mockedProfiler = {
      data: {
        userId: "userId",
        firstDayMonth: new Date("2022-06-01"),
        profile: "CAN_IMPROVE",
        kpi: 66.0,
        kpiMargin: 15,
      },
    };
    render(<HouseProfiler cups="123" id="12345" token="token" />);
    expect(
      screen.getByText("profiler.profiles.can_improve")
    ).toBeInTheDocument();
    expect(screen.getByText("profiler.profiles.can_improve")).toHaveClass(
      "clevergy-text-red"
    );
    expect(screen.getByText("66 €")).toBeInTheDocument();
    expect(screen.getByText("66 €")).toHaveClass("clevergy-text-red");

    expect(screen.getByText("profiler.message.can_improve.bold")).toHaveClass(
      "clevergy-text-red"
    );
  });

  it("should render house profiler for undefined", () => {
    mockedProfiler = {
      data: {
        userId: "userId",
        firstDayMonth: new Date("2022-06-01"),
        profile: undefined,
        kpi: 10.0,
        kpiMargin: 0.0,
      },
    };
    render(<HouseProfiler cups="123" id="12345" token="token" />);
    expect(screen.getByText("profiler.profiles.undefined")).toBeInTheDocument();
    expect(screen.getByText("profiler.profiles.undefined")).toHaveClass(
      "clevergy-text-darkGrey"
    );
  });
});
