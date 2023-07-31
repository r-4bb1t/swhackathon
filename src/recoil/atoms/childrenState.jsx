// childrenState.jsx

import { atom } from "recoil";

// Initial data for the first child
const initialChild = { year: "2023", month: "08" };

// Define the Recoil atom for childrenData
export const childrenInfoState = atom({
    key: "childrenInfoState", // Unique key for the atom
    default: [initialChild], // Initial value for the state (array containing the first child)
});
