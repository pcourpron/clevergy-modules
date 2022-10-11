import { initializeClevergyConsumptionChart } from "./modules";

export {
  Tips,
  HouseProfiler,
  Onboarding,
  Settings,
  ConsumptionChart,
} from "./modules";

const run = () => {
  initializeClevergyConsumptionChart();
};

run();
