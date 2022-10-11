import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ConsumptionChart } from "../ConsumptionChart";

const mockInit = jest.fn();
jest.mock("echarts", () => ({
  init: () => mockInit(),
}));

jest.mock("../hooks/useGetConsumption", () => ({
  useGetConsumption: () => ({
    data: {
      data: [
        {
          date: "2022-01-01T00:00:00",
          categories: [
            { label: "Valle", kwh: 86.858 },
            { label: "Llano", kwh: 28.682000000000006 },
            { label: "Pico", kwh: 80.87999999999998 },
          ],
          kwh: 196.42,
        },
        {
          date: "2022-02-01T00:00:00",
          categories: [
            { label: "Valle", kwh: 76.31800000000003 },
            { label: "Llano", kwh: 29.127999999999997 },
            { label: "Pico", kwh: 91.01599999999998 },
          ],
          kwh: 196.462,
        },
        {
          date: "2022-03-01T00:00:00",
          categories: [
            { label: "Valle", kwh: 77.50899999999999 },
            { label: "Llano", kwh: 24.985000000000003 },
            { label: "Pico", kwh: 77.92399999999999 },
          ],
          kwh: 180.41799999999998,
        },
        {
          date: "2022-04-01T00:00:00",
          categories: [
            { label: "Valle", kwh: 69.66800000000003 },
            { label: "Llano", kwh: 25.686000000000007 },
            { label: "Pico", kwh: 68.193 },
          ],
          kwh: 163.54700000000003,
        },
        {
          date: "2022-05-01T00:00:00",
          categories: [
            { label: "Valle", kwh: 82.03500000000001 },
            { label: "Llano", kwh: 14.945 },
            { label: "Pico", kwh: 46.18399999999998 },
          ],
          kwh: 143.164,
        },
        {
          date: "2022-06-01T00:00:00",
          categories: [
            { label: "Valle", kwh: 32.53499999999999 },
            { label: "Llano", kwh: 7.327 },
            { label: "Pico", kwh: 19.940000000000005 },
          ],
          kwh: 59.80199999999999,
        },
      ],
      rateType: "REGULATED",
    },
  }),
}));

describe("ConsumptionChart", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2020, 3, 1));
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  it("should render correctly", () => {
    render(<ConsumptionChart id="12345" cups="123" token="token" />);
    expect(mockInit).toHaveBeenCalledTimes(1);
    expect(screen.getByText("2022")).toBeInTheDocument();
    expect(screen.getByText("consumption.title")).toBeInTheDocument();
    expect(screen.getByText("424.9 kWh")).toBeInTheDocument();
    expect(screen.getByText("130.8 kWh")).toBeInTheDocument();
    expect(screen.getByText("384.1 kWh")).toBeInTheDocument();
  });
  it("should filter correctly", () => {
    render(<ConsumptionChart id="12345" cups="123" token="token" />);
    userEvent.click(screen.getByText("424.9 kWh"));
    expect(screen.getByText("424.9 kWh").closest("button")).toHaveAttribute(
      "style"
    );
    expect(screen.getByText("424.9 kWh").closest("button")).not.toHaveClass(
      "clevergy-border-transparent"
    );

    expect(screen.getByText("130.8 kWh").closest("button")).not.toHaveAttribute(
      "style"
    );
    expect(screen.getByText("130.8 kWh").closest("button")).toHaveClass(
      "clevergy-border-transparent"
    );
    expect(screen.getByText("384.1 kWh").closest("button")).not.toHaveAttribute(
      "style"
    );
    expect(screen.getByText("384.1 kWh").closest("button")).toHaveClass(
      "clevergy-border-transparent"
    );
  });
});
