import Icons from "@/components/Icons";
import { userInfoState } from "@/recoil/atoms/userState";
import { useRecoilValue } from "recoil";

function BottomNavigation() {
  const user = useRecoilValue(userInfoState);
  const activeMenu = window.location.pathname.includes("mypage")
    ? "myPage"
    : "home";

  return user.isLogin ? (
    <div className="btm-nav bg-white">
      <a href={"/"} className={activeMenu === "home" ? "active" : ""}>
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
      </a>
      <a href={"/mypage"} className={activeMenu === "myPage" ? "active" : ""}>
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
      </a>
    </div>
  ) : null;
}

export default BottomNavigation;
