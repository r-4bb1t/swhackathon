import Header from "@/components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import Check from "./check";
import Type from "./type";
import Child from "./child";
import Region from "./region";
import Introduction from "./introduction";
import Auth from "../auth";
import { useState } from "react";
import { useMutation } from "react-query";
import { postSitters } from "../../../queries/auth";
import { useSetRecoilState } from "recoil";
import { userInfoState } from "../../../recoil/atoms/userState";

export default function OnboardSenior() {
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(userInfoState);
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
  const { isLoading, mutate: signUp } = useMutation({
    mutationKey: ["post-sitters"],
    mutationFn: () => postSitters(seniorOnboardInfo),
    onSuccess: (data) => {
      setUserState({
        id: data.id,
        name: data.name,
        userType: data.userType,
        isLogin: true,
      });
      navigate("/");
    },
  });

  const handleSignUp = (seniorOnboardInfo) => {
    signUp(seniorOnboardInfo);
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
          <Route
            path="/auth"
            element={
              <Auth
                seniorOnboardInfo={seniorOnboardInfo}
                isLoading={isLoading}
                handleSignUp={handleSignUp}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}
