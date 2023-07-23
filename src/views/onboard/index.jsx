import Header from "../../components/Header";
import OnboardParent from "./parent";
import OnboardSenior from "./senior";

export default function Onboard() {
  const user = { type: "senior" };
  return (
    <div className="w-full h-full">
      <Header />
      {user === "parent" && <OnboardParent />}
      {user === "senior" && <OnboardSenior />}
    </div>
  );
}
