import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import { Meters } from "../Meters";

const TestMeters = ({ initialMeters }: { initialMeters: number }) => {
  const [meters, setMeters] = useState(initialMeters);
  return (
    <Meters meters={meters} onChange={({ meters }) => setMeters(meters)} />
  );
};

describe("Meters", () => {
  it("should render correctly", () => {
    render(<TestMeters initialMeters={20} />);
    expect(screen.getByTestId("meters-output")).toHaveTextContent("20 m2");
    fireEvent.change(screen.getByTestId("meters-slider"), {
      target: { value: 50 },
    });

    expect(screen.getByTestId("meters-output")).toHaveTextContent("50 m2");
  });
});
