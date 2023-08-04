import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../recoil/atoms/userState";
import { useNavigate } from "react-router";
import Button from "@/components/common/Button";

function ParentIntroduction() {
  const [text, setText] = useState("");
  const charCount = text.length;
  const isActive = charCount >= 10 && charCount <= 500;
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleNextButtonClick = () => {
    if (isActive) {
      setUserInfo((prevState) => ({
        ...prevState,
        introduction: text,
      }));
      console.log("Updated userInfo:", userInfo);
      navigate("../parentMakeAccount");
    }
  };

  useEffect(() => {
    console.log("Updated userInfo:", userInfo);
  }, [userInfo]);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden pt-14">
      <Header />
      <div className="h-full flex flex-col content-wrap p-6">
        <div className="h-full">
          <p className="text-black font-bold text-h1">
            간단한 소개를 작성해주세요.
          </p>
          <p className="text-black-800 mt-3 mb-3">
            <span>
              돌봄을 위해
              <br /> 시터님이 알아야할 내용이 있다면 알려주세요.
            </span>
          </p>
          <div className="form-control">
            <textarea
              className="textarea textarea-bordered h-96 text-black"
              placeholder="최소 10자 이상 입력해주세요."
              value={text}
              onChange={handleChange}
            ></textarea>
            <label className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt">{charCount}/500</span>
            </label>
          </div>
        </div>
        <Button
          onClick={handleNextButtonClick}
          className={`text-white border-none ${
            isActive ? "bg-primary" : "bg-black-400"
          }`}
        >
          다음
        </Button>
      </div>
    </div>
  );
}

export default ParentIntroduction;
