import { useParams } from "react-router";
import FAQ from "@/components/FAQ";
import Button from "@/components/common/Button";
import { useQuery } from "react-query";
import { getChild } from "@/queries/children";
import { CARE_TYPES } from "@/constants/child";
import Icons from "@/components/Icons";

export default function ChildrenDetail() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["childrenDetail"],
    queryFn: () => getChild(id),
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
                <div>신생아</div>
              </div>
            </div>

            {/* TODO: 아이 부모님이 남긴 고민 글 */}
          </div>
          <FAQ />

          <div className="p-8">
            <Button>신청하기</Button>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Icons.Spinner className="stroke-white w-4 h-4 animate-spin" />
        </div>
      )}
    </div>
  );
}
