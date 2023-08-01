import Button from "@/components/common/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const TYPES = [
  {
    title: "등하원 돌봄",
    price: 10000,
    description: "등하원지도, 식사 및 간식, 준비물 챙기기, 등교지도 등",
  },
  {
    title: "아픈아이 돌봄",
    price: 9000,
    description: "일시적으로 아파 학교 가기 어려운 자녀 돌봄",
  },
  {
    title: "1회성 돌봄",
    price: 9000,
    description: "일자녀병원동행, 부모의 긴급 외출, 휴식 등",
  },
  {
    title: "모임활동 지원",
    price: 12000,
    description: "부모님들 모임, 행사 시 자녀돌봄, 1대 다 돌봄",
  },
];

const Item = ({ title, price, description, disabled, onChange }) => {
  return (
    <div>
      <label className="flex gap-4 items-center">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          disabled={disabled}
          onChange={onChange}
        />
        <span className="font-semibold">{title}</span>
        <div className="badge badge-accent badge-md font-medium">
          시급: {price.toLocaleString()}원
        </div>
      </label>
      <div className="text-black-600 text-body pl-10 mt-1">{description}</div>
    </div>
  );
};

export default function Type({ setCareTypes }) {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <div className="w-full h-full flex flex-col shrink">
        <h1 className="text-h1">어떤 유형의 돌봄을 원하세요?</h1>
        <div className="text-body text-black-800">
          시터님의 일정, 체력을 고려해 <strong>최대 2개</strong>까지
          선택해주세요.
          <br />
          이후 마이페이지에서 수정할 수 있어요.
        </div>

        <div className="flex flex-col gap-6 mt-14">
          {TYPES.map((type) => (
            <Item
              title={type.title}
              price={type.price}
              description={type.description}
              onChange={(e) => {
                if (e.currentTarget.checked)
                  setSelected((s) => [...s, type.title]);
                else setSelected((s) => s.filter((s) => s !== type.title));
              }}
              disabled={selected.length == 2 && !selected.includes(type.title)}
              key={type.title}
            />
          ))}
        </div>
      </div>
      <Link
        to={selected.length === 0 ? "#" : "../child"}
        className="w-full"
        onClick={() => setCareTypes(selected)}
      >
        <Button disabled={selected.length === 0}>다음</Button>
      </Link>
    </>
  );
}
