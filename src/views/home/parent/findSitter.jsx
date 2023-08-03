import Icons from "@/components/Icons";
import { Link } from "react-router-dom";
import Sitter from "../../../components/sitter";

export default function FindSitter() {
    return (
        <div>
            <h1 className="text-h1">우리 지역 추천 시니어 시터</h1>
            <div className="text-body text-black-800 mb-8">
                신청서를 기반으로 시터를 추천해드려요.
            </div>
            {/* 대표 추천 시터 3명 */}
            <Sitter items={[{ id: 0 }, { id: 1 }, { id: 2 }]} />
            <Link to="../sitter/list" className="w-full">
                <button className="w-full btn text-body-lg border-black-600 text-black btn-outline mt-4 mb-10">
                    더 보기
                    <Icons.RightChevron className="w-4 h-4 fill-black-600" />
                </button>
            </Link>
        </div>
    );
}
