import { atom } from "recoil";

export const applicationInfoState = atom({
    // 유저 정보
    key: "applicationInfoState",
    default: {
        parentsUserId: "",
        date: "",
        dateYear: "",
        dateMonth: "",
        dateDay: "",
        startTime: "",
        startTimeHour: "00",
        startTimeMinute: "00",
        startTimeAMPM: "AM",
        endTime: "",
        endTimeHour: "00",
        endTimeMinute: "00",
        endTimeAMPM: "AM",
        sitterUserId: "",
        childrenId: "",
        contactPhoneNumber: "",
    },
});
