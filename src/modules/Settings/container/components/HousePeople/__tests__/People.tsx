import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HousePeople } from "..";

const mockOnChange = jest.fn();
describe("HousePeople", () => {
  it("should render correctly", () => {
    render(<HousePeople housePeople={4} onChange={mockOnChange} />);
    expect(screen.getByTestId("house-people-1")).toBeInTheDocument();
    expect(screen.getByTestId("house-people-2")).toBeInTheDocument();
    expect(screen.getByTestId("house-people-3")).toBeInTheDocument();
    expect(screen.getByTestId("house-people-4")).toBeInTheDocument();
  });
  it("should fire onchange correctly", () => {
    render(<HousePeople housePeople={4} onChange={mockOnChange} />);
    userEvent.click(screen.getByTestId("house-people-3"));

    expect(mockOnChange).toHaveBeenCalledWith({ housePeople: 3 });
  });
});
