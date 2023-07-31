import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Onboard from "./views/onboard";
import Mypage from "./views/mypage";
import OnboardSelect from "./views/onboard/select";
import OnboardSenior from "./views/onboard/senior";
import ParentCareType from "./views/onboard/parentCareType";
import ParentChildrenBirth from "./views/onboard/parentChildrenBirth";
import ParentwantedGu from "./views/onboard/parentwantedGu";
import ParentIntroduction from "./views/onboard/parentIntroduction";

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
                        <Route path="/senior" element={<OnboardSenior />} />
                    </>
                )}
            </Routes>
        </Router>
    );

}
