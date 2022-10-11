import { Granularity } from "../../api/types";
import { axisTimeFormat } from "../axisTimeFormat";

describe("axisTimeFormat.ts", () => {
  it("should return correct values with Monthly", () => {
    const value = axisTimeFormat({
      granularity: Granularity.MONTHLY,
      date: new Date("2022-01-01"),
    });
    expect(value).toStrictEqual("Ene");
  });
  it("should return correct values with Daily", () => {
    const value = axisTimeFormat({
      granularity: Granularity.DAILY,
      date: new Date("2022-01-01"),
    });
    expect(value).toStrictEqual("01");
  });
  it("should return correct values with Hourly", () => {
    const value = axisTimeFormat({
      granularity: Granularity.HOURLY,
      date: new Date("2022-01-01T00:00:00Z"),
    });
    expect(value).toStrictEqual("1h");
  });
});
