import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { Link } from "react-router-dom";

export default function Onboard() {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-1/2 bg-gray-200 shrink-0"></div>
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex flex-col items-center p-8 gap-4">
            <Input placeholder="010-1234-1234" label={"휴대폰 번호"} />
            <Input placeholder="password" label={"비밀번호"} type="password" />
          </div>

          <div className="flex flex-col items-center p-8 gap-4">
            <Button>로그인</Button>
            <Link to="./select" className="w-full">
              <Button className="btn-neutral bg-black-400 border-black-400 hover:bg-black-600 hover:border-black-600 !text-black">
                회원가입
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
