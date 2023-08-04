import Button from "@/components/common/Button";
import { putCancelCare } from "@/queries/sitter";
import { useMutation, useQueryClient } from "react-query";

export function CaredItem({ item }) {
  const queryClient = useQueryClient();

  const { mutate: cancelCare } = useMutation({
    mutationFn: (id) => putCancelCare(id),
    onSuccess: () => {
      console.log("s");
      queryClient.invalidateQueries(["cared-list-applied"]);
    },
  });
  return (
    <div className="w-full pt-4">
      <div className="text-subtitle-lg">
        {item.birth.slice(0, 4)}년 {item.birth.slice(4, 6)}월생, {item.watedGu}
      </div>
      <div className="text-subtitle-lg">
        {item.date}
        <div className="text-body">
          {item.startTime} - {item.endTime}
        </div>
      </div>
      {item.status === "SCHEDULE" ? (
        <Button
          outline
          className="mt-4"
          onClick={() => cancelCare(item.careId)}
        >
          신청 취소하기
        </Button>
      ) : (
        <Button disabled>진행 완료</Button>
      )}
    </div>
  );
}
