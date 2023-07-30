import { atom } from "recoil";
// user 관련 atoms 예시

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    id: "",
    name: "",
    userType: "senior",
    isLogin: true,
  },
});
