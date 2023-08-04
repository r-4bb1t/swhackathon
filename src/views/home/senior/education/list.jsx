import { SEOUL_SERVICES } from "@/constants/service";

export default function SeniorEducationList() {
  return (
    <div className="w-full h-full flex flex-col shrink p-8 pt-12">
      <h1 className="text-h1">현재 서울시에서 수강할 수 있는 교육들이에요.</h1>
      <div className="mt-8 grid grid-cols-2 gap-4 justify-center">
        {SEOUL_SERVICES.map((service, i) => (
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
    </div>
  );
}
