import { useRecoilValue } from "recoil";
import Header from "../../components/Header";
import MypageParent from "./parent";
import MypageSenior from "./senior";
import { userInfoState } from "../../recoil/atoms/userState";

export default function Mypage() {
  const user = useRecoilValue(userInfoState);
  return (
    <div className="w-full h-full pt-14">
      <Header />
      {user.userType === "parent" ? <MypageParent /> : <MypageSenior />}
    </div>
  );
}
