import Header from "@/components/Header";
import HomeParent from "./parent";
import HomeSenior from "./senior";
import { userInfoState } from "../../recoil/atoms/userState";
import { useRecoilValue } from "recoil";

export default function Home() {
  const user = useRecoilValue(userInfoState);
  return (
    <div className="w-full h-full">
      <Header />
      {user.type === "parent" ? <HomeParent /> : <HomeSenior />}
    </div>
  );
}
