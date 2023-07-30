import Children from "@/components/children";

export default function ChildrenList() {
  return (
    <div className="w-full h-full flex flex-col shrink">
      <h1 className="text-h1">시터님의 돌봄이 필요해요.</h1>
      <Children items={[{ id: 0 }, { id: 1 }, { id: 2 }]} />
    </div>
  );
}
