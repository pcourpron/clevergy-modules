import { Granularity } from "../../api/types";
import { extractSeries } from "../extractSeries";

describe("extractSeries", () => {
  it("should return a correctly formatted series", () => {
    const series = extractSeries({
      data: mockResponse,
      granularity: Granularity.MONTHLY,
      mini: false,
    });

    expect(series).toStrictEqual([
      {
        name: "Valle",
        type: "bar",
        stack: "energy",
        itemStyle: { color: undefined },
        barWidth: undefined,
        roundCap: false,
        data: [86.9, 76.3, 77.5, 69.7, 82, 28.6],
      },
      {
        name: "Llano",
        type: "bar",
        stack: "energy",
        itemStyle: { color: undefined },
        barWidth: undefined,
        roundCap: false,
        data: [28.7, 29.1, 25, 25.7, 14.9, 4.6],
      },
      {
        name: "Pico",
        type: "bar",
        stack: "energy",
        itemStyle: { color: undefined },
        barWidth: undefined,
        roundCap: false,
        data: [80.9, 91, 77.9, 68.2, 46.2, 12.9],
      },
    ]);
    expect(
      extractSeries({
        granularity: Granularity.MONTHLY,
        mini: false,
      })
    ).toStrictEqual([
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        itemStyle: {},
        name: "",
        roundCap: false,
        stack: "stack",
        type: "bar",
      },
    ]);
    expect(
      extractSeries({
        granularity: Granularity.DAILY,
        mini: false,
      })
    ).toStrictEqual([
      {
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0,
        ],
        roundCap: false,
        itemStyle: {},
        name: "",
        stack: "stack",
        type: "bar",
      },
    ]);
    expect(
      extractSeries({
        mini: false,
        granularity: Granularity.HOURLY,
      })
    ).toStrictEqual([
      {
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0,
        ],
        roundCap: false,
        itemStyle: {},
        name: "",
        stack: "stack",
        type: "bar",
      },
    ]);
  });
});

const mockResponse = [
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
      { label: "Valle", kwh: 28.58099999999999 },
      { label: "Llano", kwh: 4.57 },
      { label: "Pico", kwh: 12.866000000000003 },
    ],
    kwh: 46.016999999999996,
  },
];
