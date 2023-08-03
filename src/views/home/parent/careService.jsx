import Icons from "@/components/Icons";

export default function CareService() {
    return (
        <div>
            <h1 className="text-h1">우리 지역 돌봄 지원</h1>
            <div className="text-body text-black-800">
                지원금부터 돌봄 서비스까지 다양하게
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 justify-center">
                {[...Array(4)].map((_, i) => (
                    <div className="flex flex-col gap-1" key={i}>
                        <div className="w-full h-24 rounded bg-black-400"></div>
                        <div className="text-body text-black-800">
                            [동작구] 영아 지원금
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full btn text-body-lg border-black-600 text-black btn-outline mt-4">
                더 보기
                <Icons.RightChevron className="w-4 h-4 fill-black-600" />
            </button>
        </div>
    );
}
