import Header from "@/components/Header";
import { Route, Routes } from "react-router-dom";
import Check from "./check";
import Type from "./type";
import Child from "./child";
import Region from "./region";
import Introduction from "./introduction";
import Auth from "../auth";

export default function OnboardSenior() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <Header hasBackRoute />
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
