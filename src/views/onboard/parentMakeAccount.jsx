import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Icons from "../../components/Icons";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../recoil/atoms/userState";
import { useNavigate } from "react-router";
import { useMutation } from "react-query";
import axios from "axios";

const createUser = (userData) => {
  return axios.post("/users/parents", userData);
};

function ParentMakeAccount() {
  const [password, setPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidPhoneNum, setIsValidPhoneNum] = useState(true);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const navigate = useNavigate();
  const createUserMutation = useMutation(createUser);

  const isActive =
    isValidPassword &&
    isValidPhoneNum &&
    (isChecked1 || (isChecked2 && isChecked3));

  useEffect(() => {
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    setIsValidPassword(passwordRegEx.test(password));
  }, [password]);

  useEffect(() => {
    setIsValidPhoneNum(phoneNum.length == 11);
  }, [phoneNum]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneNumChange = (e) => {
    setPhoneNum(e.target.value);
  };

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const handleCheckboxChange3 = () => {
    setIsChecked3(!isChecked3);
  };

  useEffect(() => {
    if (isChecked1) {
      setIsChecked2(true);
      setIsChecked3(true);
    } else {
      setIsChecked2(false);
      setIsChecked3(false);
    }
  }, [isChecked1]);

  useEffect(() => {
    if (isChecked2 && isChecked3) {
      setIsChecked1(true);
    } else {
      setIsChecked1(false);
    }
  }, [isChecked2, isChecked3]);

  const handleCompleteButtonClick = () => {
    if (isActive) {
      setUserInfo((prevState) => ({
        ...prevState,
        password: password,
        phoneNum: phoneNum,
      }));
      const userDataToSend = { ...userInfo };
      delete userDataToSend.isLogin;
      createUserMutation.mutate(userDataToSend);
      navigate("/");
    }
  };
  useEffect(() => {
    console.log("Updated userInfo:", userInfo);
  }, [userInfo]);

  return (
    <div>
      <Header />
      <div className="content-wrap p-6">
        <p className="text-black font-bold text-h1">
          아이디와 비밀번호를 설정해주세요.
        </p>
        <p className="text-black-800 mt-3 mb-6">
          <span>이제 작성하신 내용으로 연결해드릴게요.</span>
        </p>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-black">아이디 전화번호</span>
          </label>
          <input
            type="text"
            value={phoneNum}
            onChange={handlePhoneNumChange}
            placeholder="전화번호를 입력해주세요"
            className={`input input-bordered w-full max-w-xs text-black-800`}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-black">비밀번호</span>
          </label>
          <input
            type="text"
            value={password}
            onChange={handlePasswordChange}
            placeholder="영/숫자 조합 6자리 이상 입력해주세요."
            className={`input input-bordered w-full max-w-xs text-black-800 `}
          />
        </div>
        <div className="flex items-center mt-5">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked1}
                onChange={handleCheckboxChange1}
                className="checkbox checkbox-primary"
              />
            </label>
          </div>
          <div className="flex w-full justify-between">
            <p className="text-black ml-2">약관 전체 동의</p>
            <Icons.Next className="w-5 h-5"></Icons.Next>
          </div>
        </div>
        <div className="border-t border-gray-300 my-4"></div>
        <div className="flex items-center">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked2}
                onChange={handleCheckboxChange2}
                className="checkbox checkbox-primary"
              />
            </label>
          </div>
          <div className="flex w-full justify-between">
            <p className="text-black ml-2">(필수) 서비스 약관 동의</p>
            <Icons.Next className="w-5 h-5"></Icons.Next>
          </div>{" "}
        </div>
        <div className="flex items-center">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked3}
                onChange={handleCheckboxChange3}
                className="checkbox checkbox-primary"
              />
            </label>
          </div>
          <div className="flex w-full justify-between">
            <p className="text-black ml-2">(필수) 개인 정보 처리 방침 동의</p>
            <Icons.Next className="w-5 h-5"></Icons.Next>
          </div>{" "}
        </div>
      </div>
      <button
        onClick={handleCompleteButtonClick}
        className={`btn btn-wide w-80 ml-9 text-white border-none mt-32 fixed bottom-10 ${
          isActive ? "bg-primary" : "bg-black-400"
        }`}
      >
        완료
      </button>
    </div>
  );
}

export default ParentMakeAccount;
