import Header from "../../components/Header";
import MypageParent from "./parent";
import MypageSenior from "./senior";

export default function Mypage() {
  const user = { type: "senior" };
  return (
    <div className="w-full h-full">
      <Header hasBackRoute />
      {user === "parent" && <MypageParent />}
      {user === "senior" && <MypageSenior />}
    </div>
  );
}
