import { atom } from "recoil";
import { childrenBirthSelector } from "../selectors/childrenState";

export const userInfoState = atom({
    // 유저 정보
    key: "userInfoState",
    default: {
        introduction: "",
        password: "",
        phoneNum: "",
        userType: "",
        careType: [],
        childrenBirths: [],
        wantedGuName: "",
        isLogin: false,
    },

});
