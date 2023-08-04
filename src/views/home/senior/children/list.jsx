import Children from "@/components/children";
import { useQuery } from "react-query";
import { getChildren } from "@/queries/children";
import { userInfoState } from "@/recoil/atoms/userState";
import { useRecoilValue } from "recoil";

export default function ChildrenList() {
  const user = useRecoilValue(userInfoState);
  const { data } = useQuery({
    queryKey: ["children-list"],
    queryFn: () => getChildren({ sitterUserId: user.id, returnCount: null }),
  });
  return (
    <div className="w-full h-full flex flex-col shrink p-8 pt-12">
      <h1 className="text-h1">시터님의 돌봄이 필요해요.</h1>
      {data && <Children items={data} />}
    </div>
  );
}
