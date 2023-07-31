import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../recoil/atoms/userState";
import { useNavigate } from "react-router";

function ParentIntroduction() {
    const [text, setText] = useState("");
    const charCount = text.length;
    const isActive = charCount >= 10 && charCount <= 500;
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleNextButtonClick = () => {
        if (isActive) {
            setUserInfo((prevState) => ({
                ...prevState,
                introduction: text,
            }));
            console.log("Updated userInfo:", userInfo);
            // navigate("../makeAccount");
        }
    };

    useEffect(() => {
        console.log("Updated userInfo:", userInfo);
    }, [userInfo]);

    return (
        <div>
            <Header hasBackRoute />
            <div className="content-wrap p-6">
                {" "}
                <p className="text-black font-bold text-h1">
                    간단한 소개를 작성해주세요.
                </p>
                <p className="text-black-800 mt-3 mb-3">
                    <span>
                        돌봄을 위해
                        <br /> 시터님이 알아야할 내용이 있다면 알려주세요.
                    </span>
                </p>
                <div className="form-control">
                    <textarea
                        className="textarea textarea-bordered h-96 text-black"
                        placeholder="최소 10자 이상 입력해주세요."
                        value={text}
                        onChange={handleChange}
                    ></textarea>
                    <label className="label">
                        <span className="label-text-alt"></span>
                        <span className="label-text-alt">{charCount}/500</span>
                    </label>
                </div>
            </div>
            <button
                onClick={handleNextButtonClick}
                className={`btn btn-wide w-80 ml-9 text-white border-none mt-32 fixed bottom-10 ${
                    isActive ? "bg-primary" : "bg-black-400"
                }`}
            >
                다음
            </button>
        </div>
    );
}

export default ParentIntroduction;
