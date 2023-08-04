import SeniorMypage from "@/components/mypage/senior";
import SeniorCared from "@/components/mypage/senior/cared";
import { Route, Routes } from "react-router-dom";

export default function MypageSenior() {
  return (
    <div className="w-full h-full flex flex-col shrink p-8 pt-12">
      <Routes>
        <Route path="/" element={<SeniorMypage />} />
        <Route path="/seniorcared" element={<SeniorCared />} />
      </Routes>
    </div>
  );
}
