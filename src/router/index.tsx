import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../components/pages/Home";
import ArmaTuPlanPage from "../components/pages/ArmaTuPlan";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<HomePage />} />
      <Route path="arma-tu-plan" element={<ArmaTuPlanPage />} />
    </Route>
  )
);

export default router;
