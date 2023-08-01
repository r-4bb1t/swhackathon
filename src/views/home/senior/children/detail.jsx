import { useParams } from "react-router";
import FAQ from "@/components/FAQ";
import Button from "../../../../components/common/Button";

export default function ChildrenDetail() {
  const { id } = useParams();
  return (
    <div className="w-full h-full flex flex-col shrink">
      <div className="w-full p-8 pt-12">
        <div className="badge badge-accent font-medium mb-4">영등포구</div>
        <h1 className="text-h1">23년 4월생</h1>
        <div className="text-subtitle mt-1">12회 신청</div>
        <div className="text-body break-all text-black-800 mt-2">
          asdfadsfasdfoiaefgj;rakflwernskbgwhro;iwltgera;fkldndblqwfrgweisu쟈뎌ㅣ퓨ㅑ심ㄴ;아류ㅣ쟈ㅏㅓㅣㄴㅍ러;ㅙㅑㅎㄱ도ㅑㄹ;ㅓㅈ딕ㅈㅎ곧랃넌펴ㅠㅛ돞ㄱ니샤ㅕㅍ짇ㄱㅎ
        </div>

        <div className="divider before:bg-black-400 after:bg-black-400"></div>

        <div className="text-subtitle-bold mb-4">원하는 돌봄 서비스</div>
        <div className="grid grid-cols-2 gap-4 justify-center">
          <div className="border border-primary rounded flex flex-col items-center justify-center text-center w-full py-4 gap-2">
            <div>등하원 돌봄</div>
            <div className="badge badge-accent font-medium">시급 12,000원</div>
          </div>
          <div className="border border-primary rounded flex flex-col items-center justify-center text-center w-full py-4 gap-2">
            <div>등하원 돌봄</div>
            <div className="badge badge-accent font-medium">시급 12,000원</div>
          </div>
        </div>

        <div className="divider before:bg-black-400 after:bg-black-400"></div>

        <div className="text-subtitle-bold mb-4">원하는 돌봄 서비스</div>
        <div className="flex w-full justify-center">
          <div className="border border-primary rounded flex items-center justify-center text-center w-full py-4 gap-2">
            <div>신생아</div>
          </div>
        </div>

        {/* TODO: 아이 부모님이 남긴 고민 글 */}
      </div>
      <FAQ />

      <div className="p-8">
        <Button>신청하기</Button>
      </div>
    </div>
  );
}
