import { atom } from "recoil";
import { childrenBirthSelector } from "../selectors/childrenState";

export const userInfoState = atom({
    // 부모 유저 정보
    key: "userInfoState",
    default: {
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
