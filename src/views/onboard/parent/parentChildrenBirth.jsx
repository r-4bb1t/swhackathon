import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import BottomDrawer from "../../../components/common/BottomDrawer";
import Icons from "@/components/Icons";
import { useRecoilState, useRecoilValue } from "recoil";
import { childrenInfoState } from "../../../recoil/atoms/childrenState";
import { useNavigate } from "react-router";
import { userInfoState } from "../../../recoil/atoms/userState";
import { childrenBirthSelector } from "../../../recoil/selectors/childrenState";

function ParentChildrenBirth() {
    const [showDrawer, setShowDrawer] = useState(false);
    const [drawerContent, setDrawerContent] = useState(null); // Initialize with null

    const [userInfo, setUserInfo] = useRecoilState(userInfoState);
    const [childrenData, setChildrenData] = useRecoilState(childrenInfoState);
    const childrenBirth = useRecoilValue(childrenBirthSelector);
    const [numChildren, setNumChildren] = useState(1);

    const handleOpenDrawer = (content) => {
        setDrawerContent(content); // Set the content for the Drawer
        setShowDrawer(true);
    };

    const handleCloseDrawer = () => {
        setShowDrawer(false);
    };

    const handleYearSelect = (year, index) => {
        setChildrenData((prevChildrenData) => {
            // Create a new array with the updated year for the specified child
            const updatedChildrenData = [...prevChildrenData];
            updatedChildrenData[index] = {
                ...updatedChildrenData[index],
                year: year,
            };

            return updatedChildrenData;
        });

        handleCloseDrawer();
    };

    const handleMonthSelect = (month, index) => {
        setChildrenData((prevChildrenData) => {
            // Create a new array with the updated month for the specified child
            const updatedChildrenData = [...prevChildrenData];
            updatedChildrenData[index] = {
                ...updatedChildrenData[index],
                month: month,
            };

            return updatedChildrenData;
        });

        handleCloseDrawer();
    };

    // Define the content of the drawer
    const yearContent = (index) => (
        <div className=" p-4 flex flex-col overflow-y-auto mt-5 max-h-72 text-black text-subtitle-lg">
            <button
                className=" my-3"
                onClick={() => handleYearSelect("2012", index)}
            >
                2012년
            </button>
            <button
                className=" my-3"
                onClick={() => handleYearSelect("2013", index)}
            >
                2013년
            </button>
            <button
                className=" my-3"
                onClick={() => handleYearSelect("2014", index)}
            >
                2014년
            </button>
            <button
                className=" my-3"
                onClick={() => handleYearSelect("2015", index)}
            >
                2015년
            </button>
            <button
                className=" my-3"
                onClick={() => handleYearSelect("2016", index)}
            >
                2016년
            </button>
            <button
                className=" my-3"
                onClick={() => handleYearSelect("2017", index)}
            >
                2017년
            </button>
            <button
                className=" my-3"
                onClick={() => handleYearSelect("2018", index)}
            >
                2018년
            </button>
            <button
                className=" my-3"
                onClick={() => handleYearSelect("2019", index)}
            >
                2019년
            </button>
            <button
                className=" my-3"
                onClick={() => handleYearSelect("2020", index)}
            >
                2020년
            </button>
            <button
                className=" my-3"
                onClick={() => handleYearSelect("2021", index)}
            >
                2021년
            </button>
            <button
                className=" my-3"
                onClick={() => handleYearSelect("2022", index)}
            >
                2022년
            </button>
            <button
                className=" my-3"
                onClick={() => handleYearSelect("2023", index)}
            >
                2023년
            </button>
        </div>
    );
    const monthContent = (index) => (
        <div className="p-4 flex flex-col overflow-y-auto mt-5 max-h-72 text-black text-subtitle-lg">
            <button
                className=" my-3"
                onClick={() => handleMonthSelect("01", index)}
            >
                1월
            </button>
            <button
                className=" my-3"
                onClick={() => handleMonthSelect("02", index)}
            >
                2월
            </button>
            <button
                className=" my-3"
                onClick={() => handleMonthSelect("03", index)}
            >
                3월
            </button>
            <button
                className=" my-3"
                onClick={() => handleMonthSelect("04", index)}
            >
                4월
            </button>
            <button
                className=" my-3"
                onClick={() => handleMonthSelect("05", index)}
            >
                5월
            </button>
            <button
                className=" my-3"
                onClick={() => handleMonthSelect("06", index)}
            >
                6월
            </button>
            <button
                className=" my-3"
                onClick={() => handleMonthSelect("07", index)}
            >
                7월
            </button>
            <button
                className=" my-3"
                onClick={() => handleMonthSelect("08", index)}
            >
                8월
            </button>
            <button
                className=" my-3"
                onClick={() => handleMonthSelect("09", index)}
            >
                9월
            </button>
            <button
                className=" my-3"
                onClick={() => handleMonthSelect("10", index)}
            >
                10월
            </button>
            <button
                className=" my-3"
                onClick={() => handleMonthSelect("11", index)}
            >
                11월
            </button>
            <button
                className=" my-3"
                onClick={() => handleMonthSelect("12", index)}
            >
                12월
            </button>
        </div>
    );

    const handleAddChild = () => {
        // Check if the maximum number of children (5) has been reached
        if (numChildren >= 5) {
            return;
        }

        setNumChildren((prevNumChildren) => prevNumChildren + 1);
        const newChild = { year: "2023", month: "08" };
        setChildrenData((prevData) => [...prevData, newChild]);
    };

    useEffect(() => {
        const convertToNumberArray = (data) => {
            return data.map((child) => parseInt(child.year + child.month));
        };

        console.log(childrenData);
        setUserInfo((prevState) => ({
            ...prevState,
            childrenBirths: convertToNumberArray(childrenData),
        }));
    }, [childrenData, setUserInfo]);

    useEffect(() => {
        console.log("Updated userInfo:", userInfo);
    }, [userInfo]);

    const numberWords = ["첫째", "둘째", "셋째", "넷째", "다섯째"];

    // 다음 페이지로
    const navigate = useNavigate();

    const goToWantedGu = () => {
        navigate("../parentWantedGu");
    };

    const handleNextButtonClick = () => {
        console.log("Updated childrenBirth:", childrenBirth);
        console.log("Updated userInfo:", userInfo);

        goToWantedGu();
    };

    return (
        <div>
            <Header />
            <div className="content-wrap p-6">
                <p className="text-black font-bold text-h1">
                    어떤 아이를 돌봐드릴까요?
                </p>
                <p className="text-black-800 mt-3 mb-16">
                    <span>돌봄을 원하는 아이의 생년/월을 입력해주세요. </span>
                </p>
                <div className="flex flex-col">
                    {/* Render buttons for each child */}
                    {childrenData.map((child, index) => (
                        <div key={index} className=" mb-2">
                            <p className="text-black text-body-lg ml-2 mb-2">
                                {numberWords[index]}
                            </p>
                            <div className="flex justify-evenly">
                                <button
                                    onClick={() =>
                                        handleOpenDrawer(yearContent(index))
                                    }
                                    className="btn btn-outline w-2/5 flex justify-between"
                                >
                                    {child.year ? child.year + "년" : "년도"}
                                    <Icons.DownArrow className="object-cover w-6 h-6 " />
                                </button>
                                <button
                                    onClick={() =>
                                        handleOpenDrawer(monthContent(index))
                                    }
                                    className="btn btn-outline btn-md w-2/5 flex justify-between"
                                >
                                    {child.month ? child.month + "월" : "월"}
                                    <Icons.DownArrow className="object-cover w-6 h-6 " />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-center">
                        {numChildren < 5 && (
                            <button
                                className="btn btn-sm btn-block btn-outline w-80 border-primary text-black rounded-full text-body mt-4"
                                onClick={handleAddChild}
                            >
                                아이 추가하기
                            </button>
                        )}
                    </div>

                    {/* Render the BottomDrawer */}
                    {showDrawer && (
                        <BottomDrawer
                            isVisible={showDrawer}
                            onClose={handleCloseDrawer}
                        >
                            {drawerContent}
                        </BottomDrawer>
                    )}
                </div>
            </div>
            <button
                className="btn btn-wide w-80  ml-9
                    bg-primary
                 text-white border-none mt-32 fixed bottom-10"
                onClick={handleNextButtonClick}
            >
                다음
            </button>
        </div>
    );
}

export default ParentChildrenBirth;
