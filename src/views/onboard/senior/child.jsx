import Button from "@/components/common/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CHILD_TYPE } from "@/constants/child";

export default function Child({ setChildTypes }) {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <div className="w-full h-full flex flex-col shrink">
        <h1 className="text-h1">어떤 아이를 돌볼 수 있나요?</h1>
        <div className="text-body text-black-800">
          시터님의 경험을 고려해 최대 4개까지 선택해주세요.
        </div>

        <div className="grid grid-cols-2 justify-center gap-6 mt-14">
          {CHILD_TYPE.map((child) => (
            <input
              type="checkbox"
              className="w-full btn btn-primary btn-outline checked:!bg-primary checked:!text-white text-h2 flex items-center h-auto py-10"
              aria-label={child}
              onChange={(e) => {
                if (e.currentTarget.checked) setSelected((s) => [...s, child]);
                else setSelected((s) => s.filter((s) => s !== child));
              }}
              key={child}
            />
          ))}
        </div>
      </div>

      <Link
        to={selected.length === 0 ? "#" : "../region"}
        className="w-full"
        onClick={() => setChildTypes(selected)}
      >
        <Button disabled={selected.length === 0}>다음</Button>
      </Link>
    </>
  );
}
