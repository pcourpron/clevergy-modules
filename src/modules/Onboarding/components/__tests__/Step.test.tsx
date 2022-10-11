import { render, screen } from "@testing-library/react";
import { Step } from "../Step";

describe("Step", () => {
  it("should render correctly", () => {
    render(<Step title="title" description="description" />);

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
  });
});
