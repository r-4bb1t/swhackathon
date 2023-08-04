import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../recoil/atoms/userState";
import { useNavigate } from "react-router";
import Button from "@/components/common/Button";
import { GU_TYPE } from "@/constants/region";

function ParentwantedGu() {
  const [selectedLocation, setSelectedLocation] = useState(GU_TYPE[0]);
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
    <div className="w-full h-full flex flex-col overflow-hidden">
      <Header />
      <div className="w-full h-full flex flex-col justify-between p-8 pt-12">
        <div className="w-full h-full flex flex-col pb-32">
          <h1 className="text-h1">활동할 수 있는 지역을 선택해주세요.</h1>
          <div className="text-body text-black-800">
            거주지에서 가장 가까운 지역 1군데만 선택해주세요.
          </div>

          <div className="grid grid-cols-2 justify-center gap-6 mt-12 py-2 h-full overflow-auto">
            {GU_TYPE.map((location) => (
              <input
                type="radio"
                name="location"
                key={location}
                className="w-full btn btn-primary btn-outline checked:!bg-primary checked:!text-white text-h2 flex items-center h-auto py-2"
                defaultChecked={selectedLocation === location}
                onChange={() => handleLocationButtonClick(location)}
                aria-label={location}
              />
            ))}
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
    </div>
  );
}

export default ParentwantedGu;
