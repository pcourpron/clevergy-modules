import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Header", () => {
  it("should render correctly", () => {
    render(<Header title="title" />);
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("title")).toHaveClass(
      "clevergy-font-semibold clevergy-text-xl"
    );
  });
  it("should render correctly with content", () => {
    render(<Header title="title" content="content" />);
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("content")).toBeInTheDocument();
    expect(screen.getByText("content")).toHaveClass(
      "clevergy-text-darkGrey text-[12px]"
    );
  });
});
