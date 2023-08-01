import Button from "@/components/common/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "@/components/common/Input";

export default function Introduction({ setIntroduction }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <div className="w-full h-full flex flex-col shrink mb-8">
        <h1 className="text-h1">간단한 소개를 작성해주세요.</h1>

        <div className="my-4 w-full">
          <Input
            label="이름"
            placeholder="홍길동"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <label className="text-primary text-xs mb-1 px-1 font-medium">
          자기소개
          <div className="text-body">
            주로 가능한 시간과 관련 경험을 포함해 작성해 보세요.
          </div>
        </label>
        <textarea
          className="w-full h-full resize-none input input-primary input-bordered py-4"
          placeholder="최소 10자 이상 작성해주세요."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="w-full text-right text-black-800 mt-1">
          {description.length}자 / 최대 500자
        </div>
      </div>

      <Link
        to={!name || description.length < 10 ? "#" : "../auth"}
        className="w-full"
        onClick={() =>
          setIntroduction({ username: name, introduction: description })
        }
      >
        <Button disabled={!name || description.length < 10}>다음</Button>
      </Link>
    </>
  );
}
