import { selector } from "recoil";
import { childrenInfoState } from "../atoms/childrenState";

export const childrenBirthSelector = selector({
    key: "childrenBirthSelector",
    get: ({ get }) => {
        const childrenData = get(childrenInfoState);
        const childrenBirth = childrenData.map((child) => {
            return child.year + child.month;
        });
        return childrenBirth;
    },
});
