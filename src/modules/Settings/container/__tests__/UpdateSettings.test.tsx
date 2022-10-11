import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactNode } from "react";
import { deviceLogos } from "../components/HomeDevices/devices";
import { UpdateSettings } from "../UpdateSettings";

const mockToggleOverlay = jest.fn();
const mockRefetch = jest.fn();
const mockUpdateUserSettings = jest.fn();

jest.mock("../api/updateUserSettings", () => ({
  updateUserSettings: (props: any) => mockUpdateUserSettings(props),
}));
const queryClient = new QueryClient({});
const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("UpdateSettings", () => {
  it("should render correclty", () => {
    render(
      <Wrapper>
        <UpdateSettings
          toggleOverlay={mockToggleOverlay}
          refetch={mockRefetch}
          token="123"
          cups="123"
        />
      </Wrapper>
    );
    expect(screen.getByText("user-settings.save")).toBeInTheDocument();
    Object.keys(deviceLogos).forEach((key) => {
      expect(screen.getByTestId(`device-${key}`)).toBeInTheDocument();
    });
  });
  it("should call update correctly", async () => {
    render(
      <Wrapper>
        <UpdateSettings
          token="123"
          cups="123"
          toggleOverlay={mockToggleOverlay}
          refetch={mockRefetch}
          userSettings={{ userId: "123", completed: false }}
        />
      </Wrapper>
    );
    userEvent.click(screen.getByTestId("device-HEATING"));
    userEvent.click(screen.getByTestId("house-people-3"));
    userEvent.click(screen.getByText("user-settings.flat"));

    fireEvent.change(screen.getByTestId("meters-slider"), {
      target: { value: 50 },
    });
    jest.useFakeTimers();

    userEvent.click(screen.getByText("user-settings.save"));

    await waitFor(() => expect(mockRefetch).toHaveBeenCalled());
    expect(screen.getByText("Guardado correctamente")).toBeInTheDocument();
    jest.runAllTimers();
    await waitFor(() =>
      expect(
        screen.queryByText("Guardado correctamente")
      ).not.toBeInTheDocument()
    );
  });
  it("should throw error", async () => {
    mockUpdateUserSettings.mockImplementationOnce(() => {
      throw new Error();
    });
    render(
      <Wrapper>
        <UpdateSettings
          token="123"
          cups="123"
          toggleOverlay={mockToggleOverlay}
          refetch={mockRefetch}
          userSettings={{ completed: false, userId: "123" }}
        />
      </Wrapper>
    );
    userEvent.click(screen.getByTestId("device-HEATING"));
    userEvent.click(screen.getByTestId("house-people-3"));
    userEvent.click(screen.getByText("user-settings.flat"));
    fireEvent.change(screen.getByTestId("meters-slider"), {
      target: { value: 50 },
    });

    userEvent.click(screen.getByText("user-settings.save"));

    expect(await screen.findByText("Algo ha fallado")).toBeInTheDocument();
    jest.runAllTimers();
    await waitFor(() =>
      expect(screen.queryByText("Algo ha fallado")).not.toBeInTheDocument()
    );
  });
  it("should prepopulate fields", async () => {
    render(
      <Wrapper>
        <UpdateSettings
          token="123"
          cups="123"
          toggleOverlay={mockToggleOverlay}
          refetch={mockRefetch}
          userSettings={{
            completed: true,
            userId: "123",
            housePeople: 1,
            houseType: "FLAT",
            meters: 50,
            devices: ["HEATING"],
          }}
        />
      </Wrapper>
    );
    await waitFor(() =>
      expect(screen.getByText("user-settings.flat")).toHaveClass(
        "clevergy-text-seaGreen"
      )
    );
    expect(screen.getByDisplayValue("2002")).toBeInTheDocument();
    expect(screen.getByTestId("meters-slider")).toHaveValue("50");
  });
});
