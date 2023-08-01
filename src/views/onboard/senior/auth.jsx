import Input from "@/components/common/Input";
import Icons from "@/components/Icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/common/Button";
import { PHONE_REGEX } from "../../../constants/phone";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../recoil/atoms/userState";
import { useMutation } from "react-query";
import { postSitters } from "../../../queries/auth";

export default function Auth() {
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");

  const [selected, setSelected] = useState([false, false]);

  const navigate = useNavigate();
  const [userState, setUserState] = useRecoilState(userInfoState);
  const { isLoading, mutate: signUp } = useMutation({
    mutationKey: ["post-sitters"],
    mutationFn: () =>
      postSitters({ ...userState, phoneNum, password, userType: "SITTER" }),
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleSignUp = () => {
    signUp();
  };

  return (
    <>
      <div className="w-full h-full flex flex-col pb-32">
        <h1 className="text-h1">아이디와 비밀번호를 설정해주세요.</h1>
        <div className="text-body text-black-800">
          이제 작성하신 내용으로 연결해 드릴게요.
        </div>

        <div className="mt-4 w-full">
          <Input
            label="휴대폰 번호"
            placeholder="01012341234"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            autoFocus
            type="number"
          />
        </div>
        <div className="mt-4 w-full">
          <Input
            label="비밀번호"
            placeholder="********"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-12">
          <div className="w-full flex justify-between items-center">
            <label className="flex gap-4 items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={selected[0] && selected[1]}
                onChange={(e) => {
                  if (e.currentTarget.checked) setSelected([true, true]);
                  else setSelected([false, false]);
                }}
              />
              <span className="font-semibold">약관 전체 동의</span>
            </label>
            <Icons.RightChevron className="w-4 h-4 fill-black"></Icons.RightChevron>
          </div>

          <div className="divider before:bg-black-200 after:bg-black-200" />

          <div className="w-full flex justify-between items-center">
            <label className="flex gap-4 items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={selected[0]}
                onChange={(e) => {
                  setSelected((s) => [!s[0], s[1]]);
                }}
              />
              <span className="font-semibold">(필수) 서비스 약관 동의</span>
            </label>
            <Icons.RightChevron className="w-4 h-4 fill-black"></Icons.RightChevron>
          </div>

          <div className="w-full flex justify-between items-center mt-8">
            <label className="flex gap-4 items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={selected[1]}
                onChange={(e) => {
                  setSelected((s) => [s[0], !s[1]]);
                }}
              />
              <span className="font-semibold">
                (필수) 개인 정보 처리 방침 동의
              </span>
            </label>
            <Icons.RightChevron className="w-4 h-4 fill-black"></Icons.RightChevron>
          </div>
        </div>
      </div>

      <Button
        disabled={
          !selected[0] ||
          !selected[1] ||
          !PHONE_REGEX.test(phoneNum) ||
          password.length < 8 ||
          isLoading
        }
        onClick={() => handleSignUp()}
      >
        {isLoading ? (
          <Icons.Spinner className="stroke-white w-4 h-4 animate-spin" />
        ) : (
          "완료"
        )}
      </Button>
    </>
  );
}
