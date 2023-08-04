import Icons from "@/components/Icons";
import { SEOUL_SERVICES } from "@/constants/service";
import { Link } from "react-router-dom";

export default function SeniorEducation() {
  return (
    <div>
      <h1 className="text-h1">서울시 지원 돌봄 교육</h1>
      <div className="text-body text-black-800">
        전문 육아 지식을 위한 교육을 지원받을 수 있어요.
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 justify-center">
        {SEOUL_SERVICES.slice(0, 6).map((service, i) => (
          <a
            href={service.url}
            target="_blacnk"
            className="flex flex-col gap-1"
            key={i}
          >
            <div className="w-full h-24 rounded bg-black-400 overflow-hidden">
              <img src={service.image} className="w-full h-full object-cover" />
            </div>
            <div className="text-body text-black-800">{service.title}</div>
          </a>
        ))}
      </div>
      <Link className="w-full" to="./education">
        <button className="w-full btn text-body-lg border-black-600 text-black btn-outline mt-4">
          더 보기
          <Icons.RightChevron className="w-4 h-4 fill-black-600" />
        </button>
      </Link>
    </div>
  );
}
