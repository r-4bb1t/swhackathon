import cc from "classcat";
import BottomNavigation from "./common/BottomNavigation";
import { useRecoilValue } from "recoil";
import { userInfoState } from "@/recoil/atoms/userState";

export default function Layout({ children }) {
  const user = useRecoilValue(userInfoState);
  return (
    <div className="w-full h-screen flex flex-col items-center overflow-auto">
      <main
        className={cc([
          "w-full h-full max-w-xl overflow-auto",
          user.isLogin && "pb-16",
        ])}
      >
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
}
