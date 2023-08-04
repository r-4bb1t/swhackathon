import Icons from "@/components/Icons";
import { Link } from "react-router-dom";
import Sitter from "../../../components/sitter";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { recommendSittersAtom } from "../../../recoil/atoms/recommendSitters";
import { useEffect } from "react";
import { userInfoState } from "../../../recoil/atoms/userState";

export default function FindSitter() {
    const [recommendSitters, setRecommendSitters] =
        useRecoilState(recommendSittersAtom);

    const [userInfo, setUserInfo] = useRecoilState(userInfoState);

    // 서버에서 추천 시터 정보 가져오기
    useEffect(() => {
        const fetchRecommendSitters = async () => {
            try {
                const response = await axios.get(
                    `http://34.64.176.81:3001/users/sitters/recommend/${
                        userInfo.id
                    }?returnCount=${3}`
                );
                setRecommendSitters(response.data);
                console.log("success fetch recommend sitters");
                console.log("response.data:", response.data);
            } catch (error) {
                throw new Error("Failed to fetch recommended sitters.");
            }
        };
        fetchRecommendSitters();
    }, []);

    return (
        <div>
            <h1 className="text-h1">우리 지역 추천 시니어 시터</h1>
            <div className="text-body text-black-800 mb-8">
                신청서를 기반으로 시터를 추천해드려요.
            </div>
            {/* 대표 추천 시터 3명 */}
            <Sitter items={recommendSitters} />
            <Link to="../sitter/list" className="w-full">
                <button className="w-full btn text-body-lg border-black-600 text-black btn-outline mt-4 mb-10">
                    더 보기
                    <Icons.RightChevron className="w-4 h-4 fill-black-600" />
                </button>
            </Link>
        </div>
    );
}
