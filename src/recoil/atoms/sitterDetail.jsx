import { atom } from "recoil";

export const SitterInfoAtom = atom({
    key: "SitterInfoAtom",
    default: {
        sitterUserId: "c4b5617e-f8ce-4650-b50a-bb7e09b75ef2",
        sitterUserWantedGu: "강북구",
        sitterUserName: "유한수",
        sitterUserCareCounting: 1,
        sitterUserImage:
            "https://storage.googleapis.com/karuru-storage/2023-08-02/5b677e6d-5cf0-49f1-bb6a-c42db0e62e35/3.png",
        sitterUserIntroduction: "안녕하세요. 시니어 시터 유한수입니다.",
        sitterUserCareTypeNames: ["아픈아이 돌봄", "등하원 돌봄"],
        sitterUserChildTypeNames: ["초등학생", "유아"],
    },
});
