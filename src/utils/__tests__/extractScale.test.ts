import { extractScale, extractSeries } from "../extractSeries";

describe("ExtractScale.ts", () => {
  it("should return correct scale", () => {
    expect(extractScale({ data: mockResponsekWh })).toStrictEqual("kWh");
    expect(extractScale({ data: mockResponseWh })).toStrictEqual("Wh");
    expect(extractScale({ data: mockResponseMWh })).toStrictEqual("MWh");
    expect(extractScale({})).toStrictEqual("kWh");
  });
});

const mockResponseWh = [
  {
    date: "2022-01-01T00:00:00",
    categories: [
      { label: "Valle", kwh: 0.008858 },
      { label: "Llano", kwh: 0.006000000000006 },
      { label: "Pico", kwh: 0.00687999999999998 },
    ],
    kwh: 196.42,
  },
  {
    date: "2022-02-01T00:00:00",
    categories: [
      { label: "Valle", kwh: 0.0031800000000003 },
      { label: "Llano", kwh: 0.00127999999999997 },
      { label: "Pico", kwh: 0.0001599999999998 },
    ],
    kwh: 196.462,
  },
];

const mockResponseMWh = [
  {
    date: "2022-01-01T00:00:00",
    categories: [
      { label: "Valle", kwh: 8600.858 },
      { label: "Llano", kwh: 2800.682000000000006 },
      { label: "Pico", kwh: 8000.87999999999998 },
    ],
    kwh: 196.42,
  },
  {
    date: "2022-02-01T00:00:00",
    categories: [
      { label: "Valle", kwh: 7600.31800000000003 },
      { label: "Llano", kwh: 2900.127999999999997 },
      { label: "Pico", kwh: 9100.01599999999998 },
    ],
    kwh: 196.462,
  },
  {
    date: "2022-03-01T00:00:00",
    categories: [
      { label: "Valle", kwh: 7700.50899999999999 },
      { label: "Llano", kwh: 2400.985000000000003 },
      { label: "Pico", kwh: 7700.92399999999999 },
    ],
    kwh: 180.41799999999998,
  },
  {
    date: "2022-04-01T00:00:00",
    categories: [
      { label: "Valle", kwh: 6900.66800000000003 },
      { label: "Llano", kwh: 2500.686000000000007 },
      { label: "Pico", kwh: 6800.193 },
    ],
    kwh: 163.54700000000003,
  },
  {
    date: "2022-05-01T00:00:00",
    categories: [
      { label: "Valle", kwh: 8200.03500000000001 },
      { label: "Llano", kwh: 1400.945 },
      { label: "Pico", kwh: 4600.18399999999998 },
    ],
    kwh: 143.164,
  },
  {
    date: "2022-06-01T00:00:00",
    categories: [
      { label: "Valle", kwh: 2800.58099999999999 },
      { label: "Llano", kwh: 4000.57 },
      { label: "Pico", kwh: 1200.866000000000003 },
    ],
    kwh: 46.016999999999996,
  },
];

const mockResponsekWh = [
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
