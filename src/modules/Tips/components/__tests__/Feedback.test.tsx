import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Feedback } from "../Feedback";

const mockOnClick = jest.fn();

describe("Feedback", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render correctly", () => {
    render(
      <Feedback onClick={mockOnClick} className="clevergy-test">
        test
      </Feedback>
    );

    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("test")).toHaveClass(
      "clevergy-py-[10px] clevergy-px-[27px] clevergy-rounded clevergy-border clevergy-test"
    );
    userEvent.click(screen.getByText("test"));

    expect(mockOnClick).toHaveBeenCalled();
  });
  it("should render correctly while loading and be disabled", () => {
    render(
      <Feedback onClick={mockOnClick} loading>
        test
      </Feedback>
    );

    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("test")).toBeDisabled();

    userEvent.click(screen.getByText("test"));
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
