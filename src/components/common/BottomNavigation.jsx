import React, { ReactComponent } from "react";
import { useNavigate } from "react-router-dom";
import Icons from "@/components/Icons";

function BottomNavigation({ activeMenu }) {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    // const goToConsultation = () => {
    //     navigate("/consultation");
    // }

    const goToMyPage = () => {
        navigate("/mypage");
    };

    return (
        <div className="btm-nav">
            <button
                className={activeMenu === "home" ? "active" : ""}
                onClick={goToHome}
            >
                <Icons.Home
                    className={
                        activeMenu === "home"
                            ? "fill-black-800 w-5 h-5"
                            : "fill-gray-400 w-5 h-5"
                    }
                    stroke="currentColor"
                ></Icons.Home>

                <span
                    className={`btm-nav-label ${
                        activeMenu === "home" ? "text-black" : "text-gray-700"
                    }`}
                >
                    홈
                </span>
            </button>
            <button className={activeMenu === "consultation" ? "active" : ""}>
                <Icons.Consultation
                    className={
                        activeMenu === "home"
                            ? "fill-black-800 w-6 h-6"
                            : "fill-gray-400 w-6 h-6"
                    }
                    stroke="currentColor"
                ></Icons.Consultation>
                <span
                    className={`btm-nav-label ${
                        activeMenu === "consultation"
                            ? "text-black"
                            : "text-gray-700"
                    }`}
                >
                    고민상담
                </span>{" "}
            </button>
            <button
                className={activeMenu === "myPage" ? "active" : ""}
                onClick={goToMyPage}
            >
                <Icons.MyPage
                    className={
                        activeMenu === "myPage"
                            ? "fill-black-800 w-5 h-5"
                            : "fill-gray-400 w-5 h-5"
                    }
                ></Icons.MyPage>
                <span
                    className={`btm-nav-label ${
                        activeMenu === "myPage" ? "text-black" : "text-gray-700"
                    }`}
                >
                    마이페이지
                </span>{" "}
            </button>
        </div>
    );
}

export default BottomNavigation;
