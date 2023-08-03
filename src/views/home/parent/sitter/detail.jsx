import { useParams } from "react-router";
import FAQ from "@/components/FAQ";
import Button from "../../../../components/common/Button";
import Icons from "@/components/Icons";
import Header from "../../../../components/Header";
import { useEffect, useState } from "react";
import BottomDrawer from "../../../../components/common/BottomDrawer";
import "./detail.css";
import { useRecoilState } from "recoil";
import { applicationInfoState } from "../../../../recoil/atoms/applicationState";

export default function SitterDetail() {
    const { id } = useParams();
    const [currentPage, setCurrentPage] = useState(1);

    const [showDrawer, setShowDrawer] = useState(false);
    const [showYearDrawer, setShowYearDrawer] = useState(false);
    const [showMonthDrawer, setShowMonthDrawer] = useState(false);
    const [showDayDrawer, setShowDayDrawer] = useState(false);
    const [showStartTimeHourDrawer, setShowStartTimeHourDrawer] =
        useState(false);
    const [showStartTimeMinuteDrawer, setShowStartTimeMinuteDrawer] =
        useState(false);
    const [showEndTimeHourDrawer, setShowEndTimeHourDrawer] = useState(false);
    const [showEndTimeMinuteDrawer, setShowEndTimeMinuteDrawer] =
        useState(false);
    const [selectedStartTimeAMPM, setSelectedStartTimeAMPM] = useState("AM");
    const [selectedEndTimeAMPM, setSelectedEndTimeAMPM] = useState("AM");
    const [applicationInfo, setApplicationInfo] =
        useRecoilState(applicationInfoState);
    const [showAlert, setShowAlert] = useState(false);

    const handleOpenDrawer = () => {
        setShowDrawer(true);
    };

    const handleCloseDrawer = () => {
        setShowDrawer(false);
        setCurrentPage(1); // Reset the page to 1 when the drawer is closed
        // Reset the applicationInfo
        setApplicationInfo({
            dateYear: "",
            dateMonth: "",
            dateDay: "",
            startTimeHour: "00",
            startTimeMinute: "00",
            startTimeAMPM: "AM",
            endTimeHour: "00",
            endTimeMinute: "00",
            endTimeAMPM: "AM",
        });
        setSelectedStartTimeAMPM("AM");
        setSelectedEndTimeAMPM("AM");
    };

    const handleOpenYearDrawer = () => {
        setShowYearDrawer(true);
    };

    const handleCloseYearDrawer = () => {
        setShowYearDrawer(false);
        setShowDrawer(true); // Show the main drawer when YearDrawer is closed
    };

    const handleOpenMonthDrawer = () => {
        setShowMonthDrawer(true);
    };

    const handleCloseMonthDrawer = () => {
        setShowMonthDrawer(false);
        setShowDrawer(true); // Show the main drawer when MonthDrawer is closed
    };

    const handleOpenDayDrawer = () => {
        setShowDayDrawer(true);
    };

    const handleCloseDayDrawer = () => {
        setShowDayDrawer(false);
        setShowDrawer(true); // Show the main drawer when DayDrawer is closed
    };

    const handleOpenStartTimeHourDrawer = () => {
        setShowStartTimeHourDrawer(true);
    };

    const handleCloseStartTimeHourDrawer = () => {
        setShowStartTimeHourDrawer(false);
        setShowDrawer(true);
    };

    const handleOpenStartTimeMinuteDrawer = () => {
        setShowStartTimeMinuteDrawer(true);
    };

    const handleCloseStartTimeMinuteDrawer = () => {
        setShowStartTimeMinuteDrawer(false);
        setShowDrawer(true);
    };

    const handleOpenEndTimeHourDrawer = () => {
        setShowEndTimeHourDrawer(true);
    };

    const handleCloseEndTimeHourDrawer = () => {
        setShowEndTimeHourDrawer(false);
        setShowDrawer(true);
    };

    const handleOpenEndTimeMinuteDrawer = () => {
        setShowEndTimeMinuteDrawer(true);
    };

    const handleCloseEndTimeMinuteDrawer = () => {
        setShowEndTimeMinuteDrawer(false);
        setShowDrawer(true);
    };

    const handleYearSelect = (year) => {
        setApplicationInfo((prevApplicationInfo) => ({
            ...prevApplicationInfo,
            dateYear: year,
        }));

        // Close the YearDrawer and go back to Page2
        setShowYearDrawer(false);
        setCurrentPage(2);
    };

    const handleMonthSelect = (month) => {
        setApplicationInfo((prevApplicationInfo) => ({
            ...prevApplicationInfo,
            dateMonth: month,
        }));

        setShowMonthDrawer(false);
        setCurrentPage(2);
    };

    const handleDaySelect = (day) => {
        setApplicationInfo((prevApplicationInfo) => ({
            ...prevApplicationInfo,
            dateDay: day,
        }));

        setShowDayDrawer(false);
        setCurrentPage(2);
    };

    const handleStartTimeHourSelect = (hour) => {
        setApplicationInfo((prevApplicationInfo) => ({
            ...prevApplicationInfo,
            startTimeHour: hour,
        }));

        setShowStartTimeHourDrawer(false);
        setCurrentPage(2);
    };

    const handleStartTimeMinuteSelect = (minute) => {
        setApplicationInfo((prevApplicationInfo) => ({
            ...prevApplicationInfo,
            startTimeMinute: minute,
        }));

        setShowStartTimeMinuteDrawer(false);
        setCurrentPage(2);
    };

    const handleEndTimeHourSelect = (hour) => {
        setApplicationInfo((prevApplicationInfo) => ({
            ...prevApplicationInfo,
            endTimeHour: hour,
        }));

        setShowEndTimeHourDrawer(false);
        setCurrentPage(2);
    };

    const handleEndTimeMinuteSelect = (minute) => {
        setApplicationInfo((prevApplicationInfo) => ({
            ...prevApplicationInfo,
            endTimeMinute: minute,
        }));

        setShowEndTimeMinuteDrawer(false);
        setCurrentPage(2);
    };

    const handleStartTimeAMPMSelect = (ampm) => {
        setSelectedStartTimeAMPM(ampm);
        setApplicationInfo((prevApplicationInfo) => ({
            ...prevApplicationInfo,
            startTimeAMPM: ampm,
        }));
    };

    const handleEndTimeAMPMSelect = (ampm) => {
        setSelectedEndTimeAMPM(ampm);
        setApplicationInfo((prevApplicationInfo) => ({
            ...prevApplicationInfo,
            endTimeAMPM: ampm,
        }));
    };

    const YearContent = () => {
        return (
            <div className="p-4 flex flex-col  mt-5 max-h-72 text-black text-subtitle-lg">
                <button
                    className="my-3"
                    onClick={() => handleYearSelect("2023")}
                >
                    2023년
                </button>
                <button
                    className="my-3"
                    onClick={() => handleYearSelect("2024")}
                >
                    2024년
                </button>
                {/* Add other year buttons here */}
            </div>
        );
    };

    const MonthContent = () => {
        const months = [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
        ];

        return (
            <div className="p-4 flex flex-col mt-5 max-h-72 text-black text-subtitle-lg">
                {months.map((month, index) => (
                    <button
                        key={index}
                        className="my-3"
                        onClick={() => handleMonthSelect(index + 1)}
                    >
                        {month}
                    </button>
                ))}
            </div>
        );
    };

    const DayContent = () => {
        // Generate an array of numbers from 1 to 31
        const days = Array.from({ length: 31 }, (_, index) => index + 1);

        return (
            <div className="p-4 flex flex-col mt-5 max-h-72 text-black text-subtitle-lg">
                {days.map((day) => (
                    <button
                        key={day}
                        className="my-3"
                        onClick={() => handleDaySelect(day.toString())}
                    >
                        {day}일
                    </button>
                ))}
            </div>
        );
    };

    const StartTimeHourContent = () => {
        // Function to generate hour buttons from 1 to 12 with 1-hour increments
        const renderHourButtons = () => {
            const hourButtons = [];
            for (let i = 1; i <= 12; i++) {
                const hour = i < 10 ? `0${i}` : `${i}`; // Add leading zero for single-digit hours
                hourButtons.push(
                    <button
                        key={hour}
                        className="my-3"
                        onClick={() => handleStartTimeHourSelect(hour)}
                    >
                        {hour}시
                    </button>
                );
            }
            return hourButtons;
        };

        return (
            <div className="p-4 flex flex-col mt-5 text-black text-subtitle-lg">
                {renderHourButtons()}
            </div>
        );
    };

    const StartTimeMinuteContent = () => {
        return (
            <div className="p-4 flex flex-col  mt-5  text-black text-subtitle-lg">
                <button
                    className="my-3"
                    onClick={() => handleStartTimeMinuteSelect("00")}
                >
                    0분
                </button>
                <button
                    className="my-3"
                    onClick={() => handleStartTimeMinuteSelect("10")}
                >
                    10분
                </button>
                <button
                    className="my-3"
                    onClick={() => handleStartTimeMinuteSelect("20")}
                >
                    20분
                </button>
                <button
                    className="my-3"
                    onClick={() => handleStartTimeMinuteSelect("30")}
                >
                    30분
                </button>
                <button
                    className="my-3"
                    onClick={() => handleStartTimeMinuteSelect("40")}
                >
                    40분
                </button>
                <button
                    className="my-3"
                    onClick={() => handleStartTimeMinuteSelect("50")}
                >
                    50분
                </button>
            </div>
        );
    };

    const EndTimeHourContent = () => {
        // Function to generate hour buttons from 1 to 12 with 1-hour increments
        const renderHourButtons = () => {
            const hourButtons = [];
            for (let i = 1; i <= 12; i++) {
                const hour = i < 10 ? `0${i}` : `${i}`; // Add leading zero for single-digit hours
                hourButtons.push(
                    <button
                        key={hour}
                        className="my-3"
                        onClick={() => handleEndTimeHourSelect(hour)}
                    >
                        {hour}시
                    </button>
                );
            }
            return hourButtons;
        };

        return (
            <div className="p-4 flex flex-col mt-5 text-black text-subtitle-lg">
                {renderHourButtons()}
            </div>
        );
    };

    const EndTimeMinuteContent = () => {
        return (
            <div className="p-4 flex flex-col  mt-5  text-black text-subtitle-lg">
                <button
                    className="my-3"
                    onClick={() => handleEndTimeMinuteSelect("00")}
                >
                    0분
                </button>

                <button
                    className="my-3"
                    onClick={() => handleEndTimeMinuteSelect("10")}
                >
                    10분
                </button>

                <button
                    className="my-3"
                    onClick={() => handleEndTimeMinuteSelect("20")}
                >
                    20분
                </button>

                <button
                    className="my-3"
                    onClick={() => handleEndTimeMinuteSelect("30")}
                >
                    30분
                </button>

                <button
                    className="my-3"
                    onClick={() => handleEndTimeMinuteSelect("40")}
                >
                    40분
                </button>

                <button
                    className="my-3"
                    onClick={() => handleEndTimeMinuteSelect("50")}
                >
                    50분
                </button>
            </div>
        );
    };

    // Define the content of the drawer
    const DrawerContent = () => {
        const nextPage = () => {
            setCurrentPage((prevPage) => prevPage + 1);
        };

        const getPageContent = () => {
            switch (currentPage) {
                case 1:
                    return <Page1 nextPage={nextPage} />;
                case 2:
                    return <Page2 nextPage={nextPage} />;
                case 3:
                    return <Page3 />;
                default:
                    return null;
            }
        };

        return <div style={{ padding: "16px" }}>{getPageContent()}</div>;
    };

    const Page1 = ({ nextPage }) => {
        const [checkedIndex, setCheckedIndex] = useState(-1);
        const isChecked = (index) => index === checkedIndex;
        const isButtonActive = checkedIndex !== -1;

        const handleCheckboxChange = (index) => {
            setCheckedIndex(isChecked(index) ? -1 : index);
        };
        return (
            <div className="flex flex-col justify-center">
                <div className=" text-subtitle-lg font-bold pb-5">
                    돌봄을 신청할 아이를 선택해주세요.
                </div>
                <div className="child">
                    {" "}
                    <div className="flex items-center">
                        <div className="form-control mr-2">
                            <label className="label cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isChecked(0)}
                                    onChange={() => handleCheckboxChange(0)}
                                    className="checkbox checkbox-primary"
                                />
                            </label>
                        </div>
                        <div className=" font-semibold">첫째</div>
                    </div>
                    <div className=" text-body text-black-600 pl-10">
                        23년 4월생
                    </div>
                </div>
                <div className="child">
                    {" "}
                    <div className="flex items-center">
                        <div className="form-control mr-2">
                            <label className="label cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isChecked(1)}
                                    onChange={() => handleCheckboxChange(1)}
                                    className="checkbox checkbox-primary"
                                />
                            </label>
                        </div>
                        <div className=" font-semibold">둘째</div>
                    </div>
                    <div className=" text-body text-black-600 pl-10">
                        23년 4월생
                    </div>
                </div>
                <div className="child">
                    {" "}
                    <div className="flex items-center">
                        <div className="form-control mr-2">
                            <label className="label cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isChecked(2)}
                                    onChange={() => handleCheckboxChange(2)}
                                    className="checkbox checkbox-primary"
                                />
                            </label>
                        </div>
                        <div className=" font-semibold">셋째</div>
                    </div>
                    <div className=" text-body text-black-600 pl-10">
                        23년 4월생
                    </div>
                </div>
                <div className="child">
                    {" "}
                    <div className="flex items-center">
                        <div className="form-control mr-2">
                            <label className="label cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isChecked(4)}
                                    onChange={() => handleCheckboxChange(4)}
                                    className="checkbox checkbox-primary"
                                />
                            </label>
                        </div>
                        <div className=" font-semibold">넷째</div>
                    </div>
                    <div className=" text-body text-black-600 pl-10">
                        23년 4월생
                    </div>
                </div>
                <div className="child">
                    {" "}
                    <div className="flex items-center">
                        <div className="form-control mr-2">
                            <label className="label cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isChecked(5)}
                                    onChange={() => handleCheckboxChange(5)}
                                    className="checkbox checkbox-primary"
                                />
                            </label>
                        </div>
                        <div className=" font-semibold">다섯째</div>
                    </div>
                    <div className=" text-body text-black-600 pl-10">
                        23년 4월생
                    </div>
                </div>
                <div className=" flex justify-center">
                    <Button
                        onClick={nextPage}
                        className={` w-3/4 fixed bottom-10 ${
                            isButtonActive
                                ? "bg-primary"
                                : "bg-black-400 border-none"
                        }`}
                    >
                        다음
                    </Button>
                </div>
            </div>
        );
    };

    const Page2 = ({ nextPage }) => {
        const isButtonActive =
            !!applicationInfo.dateYear &&
            !!applicationInfo.dateMonth &&
            !!applicationInfo.dateDay &&
            !!applicationInfo.startTimeHour &&
            !!applicationInfo.startTimeMinute &&
            !!applicationInfo.startTimeAMPM &&
            !!applicationInfo.endTimeHour &&
            !!applicationInfo.endTimeMinute &&
            !!applicationInfo.endTimeAMPM;

        const [showDrawer, setShowDrawer] = useState(false);

        useEffect(() => {
            console.log(applicationInfo);
        }, [applicationInfo]);

        const handleNextButtonClick = () => {
            const {
                dateYear,
                dateMonth,
                dateDay,
                startTimeAMPM,
                endTimeAMPM,
                startTimeHour,
                startTimeMinute,
                endTimeHour,
                endTimeMinute,
            } = applicationInfo;

            // Format month and day with leading zeros
            const formattedMonth =
                dateMonth < 10 ? `0${dateMonth}` : `${dateMonth}`;
            const formattedDay = dateDay < 10 ? `0${dateDay}` : `${dateDay}`;
            const date = `${dateYear}-${formattedMonth}-${formattedDay}`;

            // Format hours with leading zeros
            let formattedStartTimeHour =
                startTimeHour < 10 ? `0${startTimeHour}` : `${startTimeHour}`;
            let formattedEndTimeHour =
                endTimeHour < 10 ? `0${endTimeHour}` : `${endTimeHour}`;

            // Convert startTime based on AM/PM
            let startTime = `${formattedStartTimeHour}:${startTimeMinute}`;
            if (startTimeAMPM === "PM" && formattedStartTimeHour !== "12") {
                const hour = parseInt(formattedStartTimeHour, 10) + 12;
                formattedStartTimeHour = hour < 10 ? `0${hour}` : `${hour}`;
                startTime = `${formattedStartTimeHour}:${startTimeMinute}`;
            }

            // Convert endTime based on AM/PM
            let endTime = `${formattedEndTimeHour}:${endTimeMinute}`;
            if (endTimeAMPM === "PM" && formattedEndTimeHour !== "12") {
                const hour = parseInt(formattedEndTimeHour, 10) + 12;
                formattedEndTimeHour = hour < 10 ? `0${hour}` : `${hour}`;
                endTime = `${formattedEndTimeHour}:${endTimeMinute}`;
            }

            setApplicationInfo((prevApplicationInfo) => ({
                ...prevApplicationInfo,
                date,
                startTime,
                endTime,
            }));

            nextPage();
        };

        return (
            <div>
                <div className=" text-subtitle-lg font-bold pb-5">
                    원하는 돌봄 일정을 알려주세요.
                </div>
                <div className="start-date">시작 날짜</div>
                <div className="date-button-wrap mt-2 flex justify-around px-10">
                    {" "}
                    <button
                        onClick={() => handleOpenYearDrawer()}
                        className="application-year  text-subtitle-lg px-2 btn btn-outline w-2/5 mx-2 flex justify-between"
                    >
                        {applicationInfo.dateYear
                            ? applicationInfo.dateYear + "년"
                            : "년도"}
                    </button>
                    <button
                        onClick={() => handleOpenMonthDrawer()}
                        className="application-month  text-subtitle-lg px-2 btn btn-outline w-2/5 mx-2 flex justify-between"
                    >
                        {applicationInfo.dateMonth
                            ? applicationInfo.dateMonth + "월"
                            : "월"}
                    </button>
                    <button
                        onClick={() => handleOpenDayDrawer()}
                        className="application-day  text-subtitle-lg px-2 btn btn-outline w-2/5 mx-2 flex justify-between"
                    >
                        {applicationInfo.dateDay
                            ? applicationInfo.dateDay + "일"
                            : "일"}
                    </button>
                </div>
                <div className="divider before:bg-black-400 after:bg-black-400"></div>

                <div className="start-date">시작 시간</div>
                <div className="flex mt-2 items-center justify-between">
                    <div className="flex">
                        <button
                            onClick={() => handleOpenStartTimeHourDrawer()}
                            className=" w-16 text-h1 btn btn-outline flex justify-between"
                        >
                            {applicationInfo.startTimeHour
                                ? applicationInfo.startTimeHour
                                : "00"}
                        </button>
                        <div className=" text-h1 mx-2">:</div>
                        <button
                            onClick={() => handleOpenStartTimeMinuteDrawer()}
                            className="w-16 text-h1 btn btn-outline flex justify-between"
                        >
                            {applicationInfo.startTimeMinute
                                ? applicationInfo.startTimeMinute
                                : "00"}
                        </button>
                    </div>

                    <div className=" flex mx-2">
                        <button
                            onClick={() => handleStartTimeAMPMSelect("AM")}
                            className={`btn btn-primary mx-2  text-subtitle-lg ${
                                selectedStartTimeAMPM === "AM"
                                    ? "bg-primary text-white"
                                    : "bg-black-400 text-white border-none"
                            }`}
                        >
                            오전
                        </button>
                        <button
                            onClick={() => handleStartTimeAMPMSelect("PM")}
                            className={`btn btn-primary mx-2  text-subtitle-lg ${
                                selectedStartTimeAMPM === "PM"
                                    ? "bg-primary text-white"
                                    : "bg-black-400 text-white border-none"
                            }`}
                        >
                            오후
                        </button>
                    </div>
                </div>
                <div className="divider before:bg-black-400 after:bg-black-400"></div>

                <div className="start-date">종료 시간</div>
                <div className="flex mt-2 items-center justify-between">
                    <div className="flex">
                        {" "}
                        <button
                            onClick={() => handleOpenEndTimeHourDrawer()}
                            className="w-16 text-h1 btn btn-outline flex justify-between"
                        >
                            {applicationInfo.endTimeHour
                                ? applicationInfo.endTimeHour
                                : "00"}
                        </button>
                        <div className=" text-h1 mx-2">:</div>
                        <button
                            onClick={() => handleOpenEndTimeMinuteDrawer()}
                            className="w-16 text-h1 btn btn-outline flex justify-between"
                        >
                            {applicationInfo.endTimeMinute
                                ? applicationInfo.endTimeMinute
                                : "00"}
                        </button>
                    </div>

                    <div className="flex mx-2">
                        <button
                            onClick={() => handleEndTimeAMPMSelect("AM")}
                            className={`btn btn-primary mx-2 text-subtitle-lg ${
                                selectedEndTimeAMPM === "AM"
                                    ? "bg-primary text-white"
                                    : "bg-black-400 text-white border-none"
                            }`}
                        >
                            오전
                        </button>
                        <button
                            onClick={() => handleEndTimeAMPMSelect("PM")}
                            className={`btn btn-primary mx-2  text-subtitle-lg ${
                                selectedEndTimeAMPM === "PM"
                                    ? "bg-primary text-white"
                                    : "bg-black-400 text-white border-none"
                            }`}
                        >
                            오후
                        </button>
                    </div>
                </div>

                <div className=" flex justify-center">
                    <Button
                        onClick={handleNextButtonClick}
                        className={` w-3/4 fixed bottom-10 ${
                            isButtonActive
                                ? "bg-primary"
                                : "bg-black-400 border-none"
                        }`}
                    >
                        다음
                    </Button>
                </div>
            </div>
        );
    };

    const Page3 = () => {
        const [isChecked, setIsChecked] = useState(false);

        const isButtonActive = isChecked; // Update isButtonActive based on the checkbox state

        const handleCheckboxChange = () => {
            setIsChecked(!isChecked);
        };

        useEffect(() => {
            console.log(applicationInfo);
        }, [applicationInfo]);

        return (
            <>
                <div className=" text-subtitle-lg font-bold pb-5">
                    시터와의 원활한 소통을 위해
                    <br />
                    연락처를 입력해주세요.
                </div>
                <div>전화번호</div>
                <input
                    type="text"
                    placeholder="01012345678"
                    className="input input-bordered w-full max-w-xs mt-2"
                />
                <div className="flex mt-5">
                    <div className="form-control mr-2">
                        <label className="label cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                className="checkbox checkbox-primary"
                            />
                        </label>
                    </div>
                    <div>
                        입력하신 전화번호가 시터에게 전달됩니다.
                        <br /> 정보 제공에 동의합니다.
                    </div>
                </div>
                <div className=" flex justify-center">
                    <Button
                        disabled={!isButtonActive}
                        onClick={() => {
                            setShowDrawer(false);
                            setShowAlert(true);
                        }}
                        className={` w-3/4 fixed bottom-10 ${
                            isButtonActive
                                ? "bg-primary"
                                : "bg-black-400 border-none"
                        }`}
                    >
                        신청 완료
                    </Button>
                </div>
            </>
        );
    };

    return (
        <div className="w-full h-full flex flex-col shrink">
            <Header></Header>

            <div className="w-full p-8 pt-4">
                <div className="badge badge-accent font-medium mb-4">
                    영등포구
                </div>
                <h1 className="text-h1">강다정 시터님</h1>
                <div className="text-subtitle mt-1">12회 돌봄</div>
                <div className=" text-subtitle-lg text-primary mt-1">
                    ✓ 정부교육이수 완료
                </div>
                <div className="text-body break-all text-black-800 mt-2">
                    아들 둘과 딸 셋을 키웠어요. 육아 고수의 경험을 살려 주변의
                    아이들을 돌보는 일을 하며 보람을 얻고 있습니다. 저는 주로
                    평일 9시부터 6시까지 가능해요.
                </div>

                <div className="divider before:bg-black-400 after:bg-black-400"></div>

                <div className="text-subtitle-bold mb-4">
                    가능한 돌봄 서비스
                </div>
                <div className="grid grid-cols-2 gap-4 justify-center">
                    <div className="border border-primary rounded flex flex-col items-center justify-center text-center w-full py-4 gap-2">
                        <div>등하원 돌봄</div>
                        <div className="badge badge-accent font-medium">
                            시급 12,000원
                        </div>
                    </div>
                    <div className="border border-primary rounded flex flex-col items-center justify-center text-center w-full py-4 gap-2">
                        <div>1회성 돌봄</div>
                        <div className="badge badge-accent font-medium">
                            시급 14,000원
                        </div>
                    </div>
                </div>
                <p className=" text-body text-black-600 mt-3">
                    *서비스 이용 수수료가 포함된 가격입니다.
                </p>

                <div className="divider before:bg-black-400 after:bg-black-400"></div>

                <div className="text-subtitle-bold mb-4">가능한 돌봄 연령</div>
                <div className="flex w-full justify-center">
                    <div className="border border-primary rounded flex items-center justify-center text-center w-full py-4 gap-2">
                        <div>신생아</div>
                    </div>
                </div>
                <div className="divider before:bg-black-400 after:bg-black-400"></div>

                <div className="text-subtitle-bold mb-4">
                    시터님이 답변을 남긴 육아고민 글
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">
                            23년생 4월생 부모, 관악구
                        </h2>
                        <p>
                            아이를 꼭 영어유치원에 보내야할까요? 주변 엄마들이
                            다들 보내고 있어서 고민되네요...
                        </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-lg badge-outline border-none">
                                <Icons.Comment className="w-5 h-5 mr-1"></Icons.Comment>
                                2
                            </div>
                            <div className="badge badge-lg badge-outline border-none">
                                <Icons.QuestionMark className="w-5 h-5 mr-1"></Icons.QuestionMark>
                                17
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FAQ />

            <div className="p-8">
                <Button onClick={handleOpenDrawer}>신청하기</Button>
            </div>
            {/* Render the BottomDrawer */}
            {showDrawer && (
                <BottomDrawer
                    isVisible={showDrawer}
                    onClose={handleCloseDrawer}
                >
                    <DrawerContent />
                </BottomDrawer>
            )}
            {/* Render Year Drawer */}
            {showYearDrawer && (
                <BottomDrawer
                    isVisible={showYearDrawer}
                    onClose={handleCloseYearDrawer}
                >
                    <YearContent />
                </BottomDrawer>
            )}
            {/* Render Month Drawer */}
            {showMonthDrawer && (
                <BottomDrawer
                    isVisible={showMonthDrawer}
                    onClose={handleCloseMonthDrawer}
                >
                    <MonthContent />
                </BottomDrawer>
            )}
            {/* Render Day Drawer */}
            {showDayDrawer && (
                <BottomDrawer
                    isVisible={showDayDrawer}
                    onClose={handleCloseDayDrawer}
                >
                    <DayContent />
                </BottomDrawer>
            )}
            {/* Render StartTimeHour Drawer */}
            {showStartTimeHourDrawer && (
                <BottomDrawer
                    isVisible={showStartTimeHourDrawer}
                    onClose={handleCloseStartTimeHourDrawer}
                >
                    <StartTimeHourContent />
                </BottomDrawer>
            )}
            {/* Render StartTimeMinute Drawer */}
            {showStartTimeMinuteDrawer && (
                <BottomDrawer
                    isVisible={showStartTimeMinuteDrawer}
                    onClose={handleCloseStartTimeMinuteDrawer}
                >
                    <StartTimeMinuteContent />
                </BottomDrawer>
            )}
            {/* Render EndTimeHour Drawer */}
            {showEndTimeHourDrawer && (
                <BottomDrawer
                    isVisible={showEndTimeHourDrawer}
                    onClose={handleCloseEndTimeHourDrawer}
                >
                    <EndTimeHourContent />
                </BottomDrawer>
            )}
            {/* Render EndTimeMinute Drawer */}
            {showEndTimeMinuteDrawer && (
                <BottomDrawer
                    isVisible={showEndTimeMinuteDrawer}
                    onClose={handleCloseEndTimeMinuteDrawer}
                >
                    <EndTimeMinuteContent />
                </BottomDrawer>
            )}

            {/* Render the Alert */}
            {showAlert && (
                <div className=" fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                    <div className="alert w-72 p-5 flex flex-col bg-white text-black border-none shadow-lg">
                        <span>
                            신청이 완료되었습니다.
                            <br />
                            1시간안에 문자로 안내드릴게요.
                        </span>
                        <div>
                            <button
                                onClick={() => {
                                    setShowAlert(false);
                                }}
                                className="btn btn-wide text-white btn-primary "
                            >
                                확인
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
