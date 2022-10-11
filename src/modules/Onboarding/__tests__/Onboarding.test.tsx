import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Onboarding } from "../Onboarding";

const mockPostMessage = jest.fn();
jest.mock("utils/postMesssage", () => ({
  clevergyPostMessage: (props: any) => mockPostMessage(props),
}));

describe("Onboarding", () => {
  it("should render correctly", () => {
    render(<Onboarding />);
    expect(screen.getByText("onboarding.app")).toBeInTheDocument();

    expect(screen.getByText("onboarding.steps.1.title")).toBeInTheDocument();
    expect(
      screen.getByText("onboarding.steps.1.description1")
    ).toBeInTheDocument();
    expect(
      screen.getByText("onboarding.steps.1.description2")
    ).toBeInTheDocument();
    expect(
      screen.getByText("onboarding.steps.1.description3")
    ).toBeInTheDocument();
    expect(screen.getByText("onboarding.next")).toBeInTheDocument();
    expect(screen.queryByText("<")).not.toBeInTheDocument();
  });
  it("should run through steps correctly", () => {
    render(<Onboarding />);
    userEvent.click(screen.getByText("onboarding.next"));
    expect(screen.getByText("<")).toBeInTheDocument();
    expect(screen.getByText(">")).toBeInTheDocument();

    userEvent.click(screen.getByText(">"));
    expect(screen.getByTestId("onboarding-next")).toHaveTextContent(
      "onboarding.app"
    );
    userEvent.click(screen.getByTestId("onboarding-next"));
    expect(mockPostMessage).toHaveBeenCalledTimes(1);
  });
});
