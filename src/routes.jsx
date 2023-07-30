import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Onboard from "./views/onboard";
import Mypage from "./views/mypage";
import OnboardSelect from "./views/onboard/select";
import OnboardParent from "./views/onboard/parent";
import OnboardSenior from "./views/onboard/senior";
import { useRecoilValue } from "recoil";
import { userInfoState } from "./recoil/atoms/userState";

export default function AppRoutes() {
  const user = useRecoilValue(userInfoState);
  return (
    <Router>
      <Routes>
        {user.isLogin ? (
          <>
            <Route path="/*" element={<Home />} />
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
