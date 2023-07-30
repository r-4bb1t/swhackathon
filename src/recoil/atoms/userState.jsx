import { atom } from "recoil";
// user 관련 atoms 예시

export const userInfoState = atom({
  // 유저 정보
  key: "userInfoState",
  default: {
    id: "",
    name: "",
    userType: "",
    isLogin: false,
  },
});
