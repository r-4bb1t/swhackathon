import { atom } from "recoil";
import { childrenBirthSelector } from "../selectors/childrenState";

export const userInfoState = atom({
    // 유저 정보
    key: "userInfoState",
    default: {
        id: "",
        introduction: "",
        name: "",
        password: "",
        phoneNum: "",
        userType: "",
        careTypes: [],
        childTypeIds: [],
        childrenBirths: [],
        wantedGuName: "",
        isLogin: false,
    },
});
