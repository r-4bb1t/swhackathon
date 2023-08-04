import Icons from "@/components/Icons";
import Button from "@/components/common/Button";
import { getCareRequested } from "@/queries/sitter";
import { userInfoState } from "@/recoil/atoms/userState";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";

export default function SeniorCared() {
  const user = useRecoilValue(userInfoState);
  const { data: requested } = useQuery({
    queryKey: ["cared-list-requested"],
    queryFn: () => getCareRequested({ sitterUserId: user.id, returnCount: 3 }),
  });
  return (
    <>
      <h1 className="text-h1 flex items-center justify-between">
        돌봄한 내역 <div className="badge badge-accent">총 20건</div>
      </h1>

      <section className="mt-8">
        <div className="text-subtitle-lg flex items-center justify-between">
          내가 신청한 내역
          <div className="flex items-center gap-2 text-body">
            전체 보기 <Icons.RightChevron className="w-4 h-4 fill-black-800" />
          </div>
        </div>

        <div className="flex flex-col divide-y gap-4 mt-6">
          {requested.map((item, i) => (
            <div className="w-full" key={i}>
              <div className="text-subtitle-lg">
                {item.birth.slice(0, 4)}년 {item.birth.slice(4, 6)}월생,{" "}
                {item.wantedGu}
              </div>
              <div className="text-subtitle-lg">
                {item.date}
                <div className="text-body">
                  {item.startTime} - {item.endTime}
                </div>
              </div>
              {item.status === "SCHEDULE" ? (
                <Button outline className="mt-4">
                  신청 취소하기
                </Button>
              ) : (
                <Button disabled>진행 완료</Button>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
