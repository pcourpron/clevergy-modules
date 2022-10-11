import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HomeDevices } from "..";

const mockOnChange = jest.fn();
describe("HomeDevices", () => {
  it("should render correclty", () => {
    render(<HomeDevices onChange={mockOnChange} devices={["HOT_WATER"]} />);
    expect(screen.getByTestId("device-HOT_WATER")).toHaveClass(
      "clevergy-text-seaGreen"
    );
    expect(screen.getByTestId("device-HEATING")).not.toHaveClass(
      "clevergy-text-seaGreen"
    );
  });
  it("should call mockOnChange correctly", () => {
    render(<HomeDevices onChange={mockOnChange} devices={["HOT_WATER"]} />);
    userEvent.click(screen.getByTestId("device-HOT_WATER"));
    expect(mockOnChange).toHaveBeenCalledWith([]);
    userEvent.click(screen.getByTestId("device-HEATING"));
    expect(mockOnChange).toHaveBeenCalledWith(["HOT_WATER", "HEATING"]);
  });
});
