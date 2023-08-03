import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Onboard from "./views/onboard";
import Mypage from "./views/mypage";
import OnboardSelect from "./views/onboard/select";
import OnboardSenior from "./views/onboard/senior";
import ParentCareType from "./views/onboard/parent/parentCareType";
import ParentChildrenBirth from "./views/onboard/parent/parentChildrenBirth";
import ParentwantedGu from "./views/onboard/parent/parentwantedGu";
import ParentIntroduction from "./views/onboard/parent/parentIntroduction";
import { useRecoilValue } from "recoil";
import { userInfoState } from "./recoil/atoms/userState";
import ParentMakeAccount from "./views/onboard/parent/parentMakeAccount";
import HomeParent from "./views/home/parent/index";

export default function AppRoutes() {
    const user = useRecoilValue(userInfoState);
    return (
        <Router>
            <Routes>
                {user.isLogin ? (
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="/mypage" element={<Mypage />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Onboard />} />
                        <Route path="/select" element={<OnboardSelect />} />
                        <Route
                            path="/parentCareType"
                            element={<ParentCareType />}
                        />
                        <Route
                            path="/parentChildrenBirth"
                            element={<ParentChildrenBirth />}
                        />
                        <Route
                            path="/parentwantedGu"
                            element={<ParentwantedGu />}
                        />
                        <Route
                            path="/parentIntroduction"
                            element={<ParentIntroduction />}
                        />
                        <Route
                            path="/parentMakeAccount"
                            element={<ParentMakeAccount />}
                        />
                        <Route path="/parent/*" element={<HomeParent />} />

                        <Route path="/senior/*" element={<OnboardSenior />} />
                    </>
                )}
            </Routes>
        </Router>
    );
}
