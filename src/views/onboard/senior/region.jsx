import Button from "@/components/common/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GU_TYPE } from "../../../constants/region";

export default function Region() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div className="w-full h-full flex flex-col pb-32">
        <h1 className="text-h1">활동할 수 있는 지역을 선택해주세요.</h1>
        <div className="text-body text-black-800">
          거주지에서 가장 가까운 지역 1군데만 선택해주세요.
        </div>

        <div className="grid grid-cols-2 justify-center gap-6 mt-12 py-2 h-full overflow-auto">
          {GU_TYPE.map((gu) => (
            <input
              type="radio"
              name="gu"
              className="w-full btn btn-primary btn-outline checked:!bg-primary checked:!text-white text-h2 flex items-center h-auto py-2"
              aria-label={gu}
              onChange={() => setSelected(gu)}
              key={gu}
            />
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 inset-x-0 flex p-8">
        <Link to={!selected ? "#" : "../introduction"} className="w-full">
          <Button disabled={!selected}>다음</Button>
        </Link>
      </div>
    </>
  );
}
