import {
  formatEnergyToString,
  totalEnergyConsumption,
} from "../totalEnergyConsumption";

describe("formatEnergyToString", () => {
  it("Should format correctly", () => {
    expect(formatEnergyToString(10)).toStrictEqual("10.0 kWh");
    expect(formatEnergyToString(0.001)).toStrictEqual("1.0 Wh");
    expect(formatEnergyToString(1001)).toStrictEqual("1.0 MWh");
    expect(formatEnergyToString(1001, "kWh")).toStrictEqual("1001.0 kWh");
    expect(formatEnergyToString(1001, "Wh")).toStrictEqual("1001000.0 Wh");
  });
});

describe("totalEnergyConsumption", () => {
  it("should return a correct total energy", () => {
    expect(totalEnergyConsumption(mockResponse)).toStrictEqual({
      categories: ["Valle", "Llano", "Pico"],
      totals: {
        Llano: 127.99600000000001,
        Pico: 377.0629999999999,
        Valle: 420.96900000000005,
      },
    });
    expect(totalEnergyConsumption()).toStrictEqual({
      categories: [],
      totals: {},
    });
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
