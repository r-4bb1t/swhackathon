import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../recoil/atoms/userState";
import { useNavigate } from "react-router";
import Button from "@/components/common/Button";

const locations = [
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
  "송파구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구",
];

function ParentwantedGu() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const handleLocationButtonClick = (location) => {
    setSelectedLocation(location);
  };

  useEffect(() => {
    console.log("Updated userInfo:", userInfo);
  }, [userInfo]);

  const navigate = useNavigate();

  const goToIntroduction = () => {
    navigate("../parentIntroduction");
  };

  // 다음 페이지로
  const handleNextButtonClick = () => {
    setUserInfo((prevState) => ({
      ...prevState,
      wantedGuName: selectedLocation,
    }));
    console.log("Updated userInfo:", userInfo);

    goToIntroduction();
  };

  return (
    <div>
      <Header />
      <div className="content-wrap p-6">
        <p className="text-black font-bold text-h1">어디서 돌봐드릴까요?</p>
        <p className="text-black-800 mt-3 mb-3">
          <span>현재 서울시 전지역에서 돌봄 서비스를 받을 수 있어요. </span>
        </p>
        <div className="overflow-y-scroll max-h-500px pb-32">
          <div className=" grid grid-cols-2 gap-4 p-6">
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => handleLocationButtonClick(location)}
                className={`btn text-body border-none shadow-md ${
                  selectedLocation === location
                    ? "bg-primary text-white"
                    : "bg-black-200 text-black"
                }`}
              >
                {" "}
                {location}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-14 inset-x-0 flex p-8">
        <Button
          onClick={handleNextButtonClick}
          className={`mt-32 bottom-10 `}
          disabled={!selectedLocation}
        >
          다음
        </Button>
      </div>
    </div>
  );
}

export default ParentwantedGu;
