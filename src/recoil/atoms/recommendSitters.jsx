import { atom } from "recoil";

// Define an atom to store the recommended sitters data
export const recommendSittersAtom = atom({
    key: "recommendSittersAtom",
    default: [
        {
            sitterUserId: "c4b5617e-f8ce-4650-b50a-bb7e09b75ef2",
            sitterUserName: "920",
            sitterUserCreatedAt: "2023-07-31T08:46:00.676Z",
            sitterUserCareTypeNames: ["아픈아이 돌봄", "등하원 돌봄"],
            sitterUserChildTypeNames: ["신생아", "영아"],
        },
        {
            sitterUserId: "287b6abc-28de-4f48-a654-d64e9f31d4d9",
            sitterUserName: "921",
            sitterUserCreatedAt: "2023-07-31T08:46:05.979Z",
            sitterUserCareTypeNames: ["등하원 돌봄", "아픈아이 돌봄"],
            sitterUserChildTypeNames: ["신생아", "영아"],
        },
        {
            sitterUserId: "e7b0d684-e2df-44ae-80aa-e2be2f8844a8",
            sitterUserName: "922",
            sitterUserCreatedAt: "2023-07-31T08:46:12.592Z",
            sitterUserCareTypeNames: ["아픈아이 돌봄", "등하원 돌봄"],
            sitterUserChildTypeNames: ["영아", "신생아"],
        },
    ],
});
