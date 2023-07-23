import Header from "../../components/Header";
import HomeParent from "./parent";
import HomeSenior from "./senior";

export default function Home() {
  const user = { type: "senior" };
  return (
    <div className="w-full h-full">
      <Header />
      {user === "parent" && <HomeParent />}
      {user === "senior" && <HomeSenior />}
    </div>
  );
}
