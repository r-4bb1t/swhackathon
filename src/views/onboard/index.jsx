import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../recoil/atoms/userState";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Icons from "@/components/Icons";
import { getUserInfo, postLogin } from "@/queries/auth";
import { useAlert } from "@/contexts/useAlert";

export default function Onboard() {
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { push } = useAlert();

  const { mutate: getMe } = useMutation({
    mutationFn: () => getUserInfo(phoneNum),
    onSuccess: (data) => {
      setUserInfo((prev) => ({
        ...prev,
        id: data.id,
        name: data.name,
        phoneNum: data.phoneNum,
        introduction: data.introduction,
        password: data.password,
        userType: data.userType,
      }));
    },
  });

  const { mutate: Login } = useMutation({
    mutationFn: () => postLogin({ phoneNum, password }),
    onSuccess: (data) => {
      setUserInfo(
        (prev) => ({
          ...prev,
          isLogin: true,
          accessToken: data.accessToken,
        }),
        () => {
          console.log("login success : parent user");
          console.log("userInfo after login:", userInfo);
        }
      );
      getMe();
    },
    onError: (error) => push({ message: error }),
  });

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
            <Button onClick={Login}>로그인</Button>
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
