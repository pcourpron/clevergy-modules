import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tips } from "../Tips";

const mockUseGetTip = jest.fn();

const mockMutate = jest.fn();

jest.mock("../hooks/useGetTips", () => ({ useGetTip: () => mockUseGetTip() }));
jest.mock("../hooks/useUpdateTips", () => ({
  useUpdateTip: () => ({ mutateAsync: mockMutate }),
}));

describe("Tips", () => {
  it("should render correctly when empty", () => {
    mockUseGetTip.mockImplementation(() => ({
      isFetched: true,
      isLoading: false,
    }));
    render(<Tips cups="123" token="token" />);
    expect(screen.getByText("No hay mas tips para ti!")).toBeInTheDocument();
  });
  it("should render correctly", () => {
    mockUseGetTip.mockImplementation(() => ({
      data: {
        title: "Title",
        tag: "tag",
      },
      isFetched: true,
      isLoading: false,
    }));
    render(<Tips cups="123" token="token" />);
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("tips.tag")).toBeInTheDocument();
    expect(screen.getByText("tips.util")).toBeInTheDocument();
  });
  it("should update correctly", async () => {
    mockUseGetTip.mockImplementation(() => ({
      data: {
        title: "Title",
        tag: "tag",
        id: "123",
      },
      isFetched: true,
      isLoading: false,
    }));
    render(<Tips cups="123" token="token" />);
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("tips.tag")).toBeInTheDocument();
    expect(screen.getByText("tips.util")).toBeInTheDocument();
    userEvent.click(screen.getByText("👍"));
    await waitFor(() =>
      expect(mockMutate).toHaveBeenCalledWith({
        id: "123",
        token: "token",
        like: true,
        cups: "123",
      })
    );
    userEvent.click(screen.getByText("👎"));
    await waitFor(() =>
      expect(mockMutate).toHaveBeenCalledWith({
        id: "123",
        token: "token",
        like: false,
        cups: "123",
      })
    );
  });
});
