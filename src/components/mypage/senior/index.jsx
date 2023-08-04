import Icons from "@/components/Icons";
import Callout from "@/components/common/Callout";
import { Link } from "react-router-dom";

export default function SeniorMypage() {
  return (
    <>
      <h1 className="text-h1">마이 페이지</h1>
      <ul className="mt-8 divide-y">
        <li>
          <Link
            to="./seniorcared"
            className="w-full flex justify-between items-center p-6 text-subtitle-lg"
          >
            돌봄한 내역
            <Icons.RightChevron className="w-6 h-6 fill-black-800" />
          </Link>
        </li>
        <li>
          <Link className="w-full flex justify-between items-center p-6 text-subtitle-lg">
            회원 탈퇴
            <Icons.RightChevron className="w-6 h-6 fill-black-800" />
          </Link>
        </li>
      </ul>
      <Callout className="mt-8">
        <div className="flex items-center gap-4">
          <div>
            <Icons.Call className="w-12 h-12 fill-primary" />
          </div>
          <div className="text-body text-black-800">
            궁금한 사항은 고객센터로 전화주세요.
            <div className="font-medium text-black">02 - 6999 - 1444</div>
          </div>
        </div>
      </Callout>
    </>
  );
}
