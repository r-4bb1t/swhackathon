import Icons from "@/components/Icons";
import { Link } from "react-router-dom";
import Children from "../../../components/children";

export default function SeniorJob() {
  return (
    <div>
      <h1 className="text-h1">내 주변 돌봄 일자리</h1>
      <div className="text-body text-black-800 mb-8">
        신청서를 기반으로 돌봄을 원하는 부모를 연결해 드려요.
      </div>
      <Children items={[{ id: 0 }, { id: 1 }, { id: 2 }]} />
      <Link to="../children/list" className="w-full">
        <button className="w-full btn text-body-lg border-black-600 text-black btn-outline mt-4">
          더 보기
          <Icons.RightChevron className="w-4 h-4 fill-black-600" />
        </button>
      </Link>
    </div>
  );
}
