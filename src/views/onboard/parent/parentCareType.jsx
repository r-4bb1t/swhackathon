import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import React, { useEffect, useState } from "react";
import { userInfoState } from "../../../recoil/atoms/userState";
import { useRecoilState } from "recoil";
import Button from "@/components/common/Button";

export default function ParentCareType() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  // 다음 페이지로
  const goToParentChildBirth = () => {
    const careTypes = [
      "등하원 돌봄",
      "아픈아이 돌봄",
      "1회성 돌봄",
      "모임활동 지원",
    ];
    const checkedcareTypes = careTypes.filter((name, index) => {
      return [isChecked1, isChecked2, isChecked3, isChecked4][index];
    });
    console.log("Updating userInfo with care types:", checkedcareTypes);

    setUserInfo((prevState) => ({
      ...prevState,
      careTypes: checkedcareTypes,
    }));
    navigate("../parentChildrenBirth");
  };

  // useEffect(() => {
  //     console.log("Updated userInfo:", userInfo);
  // }, [userInfo]);

  const handleNextButtonClick = () => {
    if (isButtonActive) {
      goToParentChildBirth();
    }
  };

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [numChecked, setNumChecked] = useState(0);

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
    updateNumChecked();
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
    updateNumChecked();
  };

  const handleCheckboxChange3 = () => {
    setIsChecked3(!isChecked3);
    updateNumChecked();
  };

  const handleCheckboxChange4 = () => {
    setIsChecked4(!isChecked4);
    updateNumChecked();
  };

  useEffect(() => {
    updateNumChecked();
  }, [isChecked1, isChecked2, isChecked3, isChecked4]);

  // 페이지 렌더링 될 때마다 실행
  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      userType: "PARENTS",
    }));
  }, []);

  useEffect(() => {
    console.log("Updated userInfo:", userInfo);
  }, [userInfo]);

  const updateNumChecked = () => {
    setNumChecked(
      (isChecked1 ? 1 : 0) +
        (isChecked2 ? 1 : 0) +
        (isChecked3 ? 1 : 0) +
        (isChecked4 ? 1 : 0)
    );
  };

  const isButtonActive = numChecked === 2;

  return (
    <div className="w-full h-full flex flex-col overflow-hidden pt-14">
      <Header />
      <div className="content-wrap h-full flex flex-col justify-between p-6">
        <div className="h-full">
          <p className=" text-black font-bold text-h1">
            어떤 유형의 돌봄을 원하세요?
          </p>
          <p className="text-black-800 mt-3 mb-16">
            <span>가장 필요한 돌봄 서비스 </span>
            <span className="text-subtitle-bold">2개만</span> 선택해주세요.
            <br />
            이후 마이페이지에서 수정할 수 있어요.
          </p>
          <div className="section-1 mb-6">
            <div className="flex items-center">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isChecked1}
                    className="checkbox checkbox-primary"
                    onChange={handleCheckboxChange1}
                  />
                </label>
              </div>
              <p className=" text-subtitle-bold text-black-800 ml-1">
                등하원 돌봄
              </p>
              <span className="badge border-none badge-primary bg-secondary-light ml-2">
                시급 : 10,000원
              </span>
            </div>
            <p className="ml-9 text-body text-black-600">
              등하원지도, 식사 및 간식, 준비물 챙기기, 등교지도 등
            </p>
          </div>
          <div className="section-2 mb-6">
            <div className="flex items-center">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isChecked2}
                    className="checkbox checkbox-primary"
                    onChange={handleCheckboxChange2}
                  />
                </label>
              </div>
              <p className=" text-subtitle-bold text-black-800 ml-1">
                아픈아이 돌봄
              </p>
              <span className="badge border-none badge-primary bg-secondary-light ml-2">
                시급 : 9,000원
              </span>
            </div>
            <p className="ml-9 text-body text-black-600">
              일시적으로 아파 학교를 가기 어려운 자녀 돌봄
            </p>
          </div>
          <div className="sectoon-3 mb-6">
            <div className="flex items-center">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isChecked3}
                    className="checkbox checkbox-primary"
                    onChange={handleCheckboxChange3}
                  />
                </label>
              </div>
              <p className=" text-subtitle-bold text-black-800 ml-1">
                1회성 돌봄
              </p>
              <span className="badge border-none badge-primary bg-secondary-light ml-2">
                시급 : 9,000원
              </span>
            </div>
            <p className="ml-9 text-body text-black-600">
              자녀병원동행, 부모의 긴급 외출, 휴식 등
            </p>
          </div>
          <div className="sectoon-4 mb-6">
            <div className="flex items-center">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isChecked4}
                    className="checkbox checkbox-primary"
                    onChange={handleCheckboxChange4}
                  />
                </label>
              </div>
              <p className=" text-subtitle-bold text-black-800 ml-1">
                모임활동 지원
              </p>
              <span className="badge border-none badge-primary bg-secondary-light ml-2">
                시급 : 12,000원
              </span>
            </div>
            <p className="ml-9 text-body text-black-600">
              부모님들 모임, 행사 시 자녀 돌봄, 1대 다 돌봄
            </p>
          </div>
        </div>
        <Button onClick={handleNextButtonClick} disabled={!isButtonActive}>
          다음
        </Button>
      </div>
    </div>
  );
}
