import { useParams } from "react-router";
import FAQ from "@/components/FAQ";
import Button from "@/components/common/Button";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getChild } from "@/queries/children";
import { CARE_TYPES } from "@/constants/child";
import Icons from "@/components/Icons";
import { getChildType } from "@/utils/getChildType";
import { postCare } from "@/queries/sitter";
import { useRecoilValue } from "recoil";
import { userInfoState } from "@/recoil/atoms/userState";
import { useEffect, useState } from "react";
import BottomDrawer from "@/components/common/BottomDrawer";
import { format } from "date-fns";
import SetTime from "@/components/mypage/senior/SetTime";
import SetContact from "@/components/mypage/senior/SetContact";
import { useAlert } from "@/contexts/useAlert";

export default function ChildrenDetail() {
  const { id } = useParams();
  const user = useRecoilValue(userInfoState);
  const [year, setYear] = useState("2023");
  const [month, setMonth] = useState();
  const [date, setDate] = useState();

  const [startTime, setStartTime] = useState({ hour: null, minute: null });
  const [endTime, setEndTime] = useState({ hour: null, minute: null });

  const [isStartTimeAM, setIsStartTimeAM] = useState(true);
  const [isEndTimeAM, setIsEndTimeAM] = useState(true);

  const [contactPhoneNumber, setContactPhoneNumber] = useState(user.phoneNum);
  const [isBottomDrawerOpened, setIsBottomDrawerOpened] = useState(false);

  const [status, setStatus] = useState(0);
  const { push } = useAlert();
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["childrenDetail", id],
    queryFn: () => getChild(id),
  });
  const { mutate: applyCare } = useMutation({
    mutationKey: ["post-care"],
    mutationFn: () =>
      postCare({
        sitterUserId: user.id,
        date: `${year}-${month.padStart(2, "0")}-${date.padStart(2, "0")}`,
        startTime: `${(isStartTimeAM
          ? startTime.hour
          : `${parseInt(startTime.hour) + 12}`
        ).padStart(2, "0")}:${startTime.minute.padStart(2, "0")}`,
        endTime: `${(isEndTimeAM
          ? endTime.hour
          : `${parseInt(endTime.hour) + 12}`
        ).padStart(2, "0")}:${endTime.minute.padStart(2, "0")}`,
        contactPhoneNumber,
        parentsUserId: id,
      }),
    onSuccess: () => {
      push({
        message: "신청이 완료되었습니다. 1시간안에 문자로 안내해드릴게요.",
        onClose: () => setIsBottomDrawerOpened(false),
      }),
        queryClient.invalidateQueries(["childrenDetail"]);
    },
  });
  return (
    <div className="w-full h-full flex flex-col shrink">
      {data ? (
        <>
          <div className="w-full p-8 pt-12">
            <div className="badge badge-accent font-medium mb-4">
              {data.parentsUserWantedGu}
            </div>
            <h1 className="text-h1">
              {data.parentsUserChildrenBirth.slice(2, 4)}년{" "}
              {data.parentsUserChildrenBirth.slice(4, 6)}월생
            </h1>
            <div className="text-subtitle mt-1">
              {data.parentsUserCareCounting}회 신청
            </div>
            <div className="text-body break-all text-black-800 mt-2">
              {data.parentsUserIntroduction}
            </div>

            <div className="divider before:bg-black-400 after:bg-black-400"></div>

            <div className="text-subtitle-bold mb-4">원하는 돌봄 서비스</div>
            <div className="grid grid-cols-2 gap-4 justify-center">
              {data.parentsUserCareTypeNames.map((type_name, i) => (
                <div
                  className="border border-primary rounded flex flex-col items-center justify-center text-center w-full py-4 gap-2"
                  key={i}
                >
                  <div>{type_name}</div>
                  <div className="badge badge-accent font-medium">
                    시급{" "}
                    {CARE_TYPES.filter(
                      (type) => type.title === type_name
                    )[0].price.toLocaleString()}
                    원
                  </div>
                </div>
              ))}
            </div>

            <div className="divider before:bg-black-400 after:bg-black-400"></div>

            <div className="text-subtitle-bold mb-4">해당 돌봄 연령</div>
            <div className="flex w-full justify-center">
              <div className="border border-primary rounded flex items-center justify-center text-center w-full py-4 gap-2">
                <div>{getChildType(data.parentsUserChildrenBirth)}</div>
              </div>
            </div>

            {/* TODO: 아이 부모님이 남긴 고민 글 */}
          </div>
          <FAQ />

          <div className="p-8">
            <Button onClick={() => setIsBottomDrawerOpened(true)}>
              신청하기
            </Button>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Icons.Spinner className="stroke-white w-4 h-4 animate-spin" />
        </div>
      )}
      <BottomDrawer
        isVisible={isBottomDrawerOpened}
        onClose={() => setIsBottomDrawerOpened(false)}
      >
        {status == 0 && (
          <SetTime
            year={year}
            setYear={setYear}
            month={month}
            setMonth={setMonth}
            date={date}
            setDate={setDate}
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
            isStartTimeAM={isStartTimeAM}
            isEndTimeAM={isEndTimeAM}
            setIsStartTimeAM={setIsStartTimeAM}
            setIsEndTimeAM={setIsEndTimeAM}
            setStatus={setStatus}
          />
        )}
        {status == 1 && (
          <SetContact
            contactPhoneNumber={contactPhoneNumber}
            setContactPhoneNumber={setContactPhoneNumber}
            handleApply={applyCare}
          />
        )}
      </BottomDrawer>
    </div>
  );
}
