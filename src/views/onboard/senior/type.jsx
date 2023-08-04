import Button from "@/components/common/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoState } from "@/recoil/atoms/userState";
import { CARE_TYPES } from "@/constants/child";

const Item = ({
  title,
  price,
  description,
  disabled,
  onChange,
  defaultChecked,
}) => {
  return (
    <div>
      <label className="flex gap-4 items-center">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          disabled={disabled}
          onChange={onChange}
          defaultChecked={defaultChecked}
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

export default function Type() {
  const [userState, setUserState] = useRecoilState(userInfoState);
  const [selected, setSelected] = useState(userState.careTypes);
  const setCareTypes = (careTypes) => {
    setUserState((user) => {
      return { ...user, careTypes };
    });
  };
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
          {CARE_TYPES.map((type) => (
            <Item
              title={type.title}
              price={type.price}
              description={type.description}
              onChange={(e) => {
                if (e.currentTarget.checked)
                  setSelected((s) => [...s, type.title]);
                else setSelected((s) => s.filter((s) => s !== type.title));
              }}
              defaultChecked={userState.careTypes.includes(type.title)}
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
