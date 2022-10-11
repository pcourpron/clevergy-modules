import { clevergyTimeFormatEnd, clevergyTimeFormatStart } from "../formatTime";

describe("formattime", () => {
  it("should return correct value", () => {
    expect(clevergyTimeFormatStart(new Date("2022-01-01"))).toStrictEqual(
      "2022-01-01T00:00:00.000Z"
    );
    expect(clevergyTimeFormatEnd(new Date("2022-01-01"))).toStrictEqual(
      "2022-01-01T23:59:59.999Z"
    );
  });
});
