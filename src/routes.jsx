import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Onboard from "./views/onboard";
import Mypage from "./views/mypage";
import { useUser } from "./contexts/useUser";

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
          <Route path="/*" element={<Onboard />} />
        )}
      </Routes>
    </Router>
  );
}
