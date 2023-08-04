import Icons from "@/components/Icons";
import Button from "@/components/common/Button";
import { getCareRequested, getCareRequestedByParents } from "@/queries/sitter";
import { userInfoState } from "@/recoil/atoms/userState";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { CaredItem } from "./CaredItem";

export default function SeniorCared() {
  const user = useRecoilValue(userInfoState);
  const { data: applied } = useQuery({
    queryKey: ["cared-list-applied"],
    queryFn: () => getCareRequested({ sitterUserId: user.id, returnCount: 3 }),
  });
  const { data: requested } = useQuery({
    queryKey: ["cared-list-requested"],
    queryFn: () =>
      getCareRequestedByParents({ sitterUserId: user.id, returnCount: 3 }),
  });

  return (
    <>
      <h1 className="text-h1 flex items-center justify-between">돌봄한 내역</h1>

      <section className="mt-8">
        <div className="text-subtitle-lg flex items-center justify-between">
          내가 신청한 내역
          <div className="flex items-center gap-2 text-body">
            전체 보기 <Icons.RightChevron className="w-4 h-4 fill-black-800" />
          </div>
        </div>

        <div className="flex flex-col divide-y gap-6 mt-6">
          {applied &&
            applied.map((item, i) => <CaredItem item={item} key={i} />)}
        </div>
      </section>

      <section className="mt-12">
        <div className="text-subtitle-lg flex items-center justify-between">
          부모님이 신청한 내역
          <div className="flex items-center gap-2 text-body">
            전체 보기 <Icons.RightChevron className="w-4 h-4 fill-black-800" />
          </div>
        </div>

        <div className="flex flex-col divide-y gap-6 mt-6">
          {requested &&
            requested.map((item, i) => <CaredItem item={item} key={i} />)}
        </div>
      </section>
    </>
  );
}
