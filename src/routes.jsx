import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUser } from "./contexts/useUser";
import Home from "./views/home";
import Onboard from "./views/onboard";
import Mypage from "./views/mypage";
import OnboardSelect from "./views/onboard/select";
import OnboardParent from "./views/onboard/parent";
import OnboardSenior from "./views/onboard/senior";

export default function AppRoutes() {
  const { user } = useUser();
  return (
    <Router>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/mypage" element={<Mypage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Onboard />} />
            <Route path="/select" element={<OnboardSelect />} />
            <Route path="/parent" element={<OnboardParent />} />
            <Route path="/senior" element={<OnboardSenior />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
