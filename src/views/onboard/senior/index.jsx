import Header from "@/components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import Check from "./check";
import Type from "./type";
import Child from "./child";
import Region from "./region";
import Introduction from "./introduction";
import Auth from "./auth";
import { useMutation } from "react-query";
import { postSitters } from "../../../queries/auth";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../recoil/atoms/userState";

export default function OnboardSenior() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden pt-14">
      <Header />
      <div className="w-full h-full flex flex-col justify-between p-8 pt-12">
        <Routes>
          <Route path="/check" element={<Check />} />
          <Route path="/type" element={<Type />} />
          <Route path="/child" element={<Child />} />
          <Route path="/region" element={<Region />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </div>
  );
}
