import Header from "@/components/Header";
import HomeParent from "./parent";
import HomeSenior from "./senior";
import { userInfoState } from "../../recoil/atoms/userState";
import { useRecoilValue } from "recoil";

export default function Home() {
  const user = useRecoilValue(userInfoState);
  return (
    <div className="w-full h-full pt-14">
      <Header />
      <div className="w-full h-auto flex flex-col justify-between">
        {user.userType === "PARENTS" ? <HomeParent /> : <HomeSenior />}
      </div>
    </div>
  );
}
