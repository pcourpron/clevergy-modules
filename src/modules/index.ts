import { ConsumptionChart } from "./ConsumptionChart";

export { Tips } from "./Tips";
export { HouseProfiler } from "./HouseProfiler";
export { Onboarding } from "./Onboarding";
export { Settings } from "./Settings";
export { ConsumptionChart } from "./ConsumptionChart";

class ClevergyConsumptionChart extends HTMLElement {
  // connect component
  connectedCallback() {
    ConsumptionChart;
  }
}
export const initializeClevergyConsumptionChart = () => {
  customElements.define("clevergy-consumption", ClevergyConsumptionChart);
};
