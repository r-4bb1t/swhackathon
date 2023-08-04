import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../recoil/atoms/userState";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import Icons from "@/components/Icons";

async function getUsersAPI(phoneNumData) {
  try {
    const response = await axios.get(
      `http://34.64.176.81:3001/users?phoneNum=${phoneNumData}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users.");
  }
}

export default function Onboard() {
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://34.64.176.81:3001/login", {
        phoneNum,
        password,
      });

      // 로그인 성공시
      const accessToken = response.data.accessToken;

      setUserInfo(
        (prev) => ({
          ...prev,
          isLogin: true,
          accessToken: accessToken,
        }),
        () => {
          console.log("login success : parent user");
          console.log("userInfo after login:", userInfo);
        }
      );

      // 로그인한 유저 정보 가져오기
      const userData = await getUsersAPI(phoneNum);

      // 로그인한 유저 타입 recoil에 저장
      setUserInfo((prev) => ({
        ...prev,
        id: userData.id,
        name: userData.name,
        phoneNum: userData.phoneNum,
        introduction: userData.introduction,
        password: userData.password,
        userType: userData.userType,
      }));
    } catch (error) {
      console.log("로그인 실패:", error);
      // 로그인 실패 처리 (예: 오류 메시지 표시)
    }
  };

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="relative flex justify-center w-full h-1/2 bg-secondary-light shrink-0 pb-12">
          <img
            src="/assets/familyPhoto.svg"
            className="w-full h-full object-contain"
          />
          <Icons.Logo className="absolute w-1/3 h-auto bottom-12" />
        </div>
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex flex-col items-center p-8 gap-4">
            <Input
              placeholder="01012341234"
              label={"휴대폰 번호"}
              type="tel"
              onChange={(e) => setPhoneNum(e.target.value)}
            />
            <Input
              placeholder="password"
              label={"비밀번호"}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col items-center p-8 gap-4">
            <Button onClick={handleLogin}>로그인</Button>
            <Link to="./select" className="w-full">
              <Button className="btn-neutral bg-black-400 border-black-400 hover:bg-black-600 hover:border-black-600 !text-black">
                회원가입
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
