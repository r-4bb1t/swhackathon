import Header from "@/components/Header";
import HomeParent from "./parent";
import HomeSenior from "./senior";
import { useUser } from "../../contexts/useUser";

export default function Home() {
  const { user } = useUser();
  return (
    <div className="w-full h-full">
      <Header />
      {user.type === "parent" ? <HomeParent /> : <HomeSenior />}
    </div>
  );
}
