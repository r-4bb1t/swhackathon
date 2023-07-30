import Icons from "@/components/Icons";

export default function SeniorJob() {
  return (
    <div>
      <h1 className="text-h1">내 주변 돌봄 일자리</h1>
      <div className="text-body text-black-800">
        신청서를 기반으로 돌봄을 원하는 부모를 연결해 드려요.
      </div>
      <ul className="mt-8 divide-y divide-black-400">
        {[...Array(3)].map((_, i) => (
          <li className="flex items-center py-4" key={i}>
            <div className="w-full">
              <div className="text-subtitle-bold mb-2">23년 4월생</div>
              <div className="text-caption mb-3 text-black-800">신생아</div>
              <div className="flex">
                <div className="badge badge-accent font-medium">
                  등하원 돌봄
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-24 h-full">
              <Icons.RightChevron className="w-8 h-8 fill-black" />
            </div>
          </li>
        ))}
      </ul>
      <button className="w-full btn text-body-lg border-black-600 text-black btn-outline mt-4">
        더 보기
        <Icons.RightChevron className="w-4 h-4 fill-black-600" />
      </button>
    </div>
  );
}
