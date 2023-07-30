import Header from "@/components/Header";
import { Route, Routes } from "react-router-dom";
import Check from "./check";
import Type from "./type";
import Child from "./child";
import Region from "./region";
import Introduction from "./introduction";
import Auth from "../auth";
import { useState } from "react";

export default function OnboardSenior() {
  const [seniorOnboardInfo, setSeniorOnboardInfo] = useState({
    careTypes: null,
    childType: null,
    wantedGuName: null,
    username: null,
    introduction: null,
    phoneNum: null,
    password: null,
  });
  const setCareTypes = (careTypes) => {
    setSeniorOnboardInfo((seniorOnboardInfo) => {
      return { ...seniorOnboardInfo, careTypes };
    });
  };
  const setChildType = (childType) => {
    setSeniorOnboardInfo((seniorOnboardInfo) => {
      return { ...seniorOnboardInfo, childType };
    });
  };
  const setWantedGuName = (wantedGuName) => {
    setSeniorOnboardInfo((seniorOnboardInfo) => {
      return { ...seniorOnboardInfo, wantedGuName };
    });
  };
  const setIntroduction = ({ username, introduction }) => {
    setSeniorOnboardInfo((seniorOnboardInfo) => {
      return { ...seniorOnboardInfo, username, introduction };
    });
  };
  const setAccount = ({ phoneNum, password }) => {
    setSeniorOnboardInfo((seniorOnboardInfo) => {
      return { ...seniorOnboardInfo, phoneNum, password };
    });
  };

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <Header hasBackRoute />
      <div className="w-full h-full flex flex-col justify-between p-8 pt-12">
        <Routes>
          <Route path="/check" element={<Check />} />
          <Route path="/type" element={<Type setCareTypes={setCareTypes} />} />
          <Route
            path="/child"
            element={<Child setChildType={setChildType} />}
          />
          <Route
            path="/region"
            element={<Region setWantedGuName={setWantedGuName} />}
          />
          <Route
            path="/introduction"
            element={<Introduction setIntroduction={setIntroduction} />}
          />
          <Route path="/auth" element={<Auth setAccount={setAccount} />} />
        </Routes>
      </div>
    </div>
  );
}
