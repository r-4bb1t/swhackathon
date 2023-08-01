import Callout from "@/components/common/Callout";
import Button from "@/components/common/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Check() {
  const [isError, setIsError] = useState(false);
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className="w-full h-full flex flex-col shrink">
        <h1 className="text-h1">다음 조건을 만족하시나요?</h1>
        <div className="text-body text-black-800">
          이후 서류 심사를 진행할 예정입니다.
          <br />
          조건에 부합하지 않는 경우 시터 등록이 어려워요.
        </div>

        <div className="flex flex-col gap-6 mt-14">
          <label className="flex gap-4 items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              onChange={(e) => {
                if (e.currentTarget.checked) setSelected((s) => s + 1);
                else setSelected((s) => s - 1);
              }}
            />
            <span className="font-semibold">만 60세 이상 시니어예요.</span>
          </label>

          <label className="flex gap-4 items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              onChange={(e) => {
                if (e.currentTarget.checked) setSelected((s) => s + 1);
                else setSelected((s) => s - 1);
              }}
            />
            <span className="font-semibold">
              베이비시터 양성 교육을 수료했어요.
            </span>
          </label>
        </div>

        <Callout className="mt-12">
          <strong>베이비시터 양성 교육을 수료하지 않으셨다면?</strong>
          <br />
          <a
            href="http://www.goldenjob.or.kr/infor/jobevent_view.asp?idx=125&p_idx=103&pp_idx=104&tn=tblJobEvent&p=1&keyword=&keyfield="
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 font-bold text-black-800"
          >
            서울시어르신취업지원센터
          </a>
          에서 신청해 수강하실 수 있어요.
          <br />
          <strong>교육을 수료 하셔야 가입하실 수 있습니다.</strong>
        </Callout>
      </div>

      <div className="flex flex-col items-center gap-4">
        {selected < 2 && (
          <div className="text-error">2개 모두 만족해야 가입이 가능해요.</div>
        )}
        <Link to={selected < 2 ? "#" : "../type"} className="w-full">
          <Button disabled={selected < 2}>다음</Button>
        </Link>
      </div>
    </>
  );
}
