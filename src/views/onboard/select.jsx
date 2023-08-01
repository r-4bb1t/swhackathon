import Header from "@/components/Header";
import Callout from "@/components/common/Callout";
import Icons from "@/components/Icons";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

export default function OnboardSelect() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="w-full h-full flex flex-col p-4 pt-12">
        <Callout>
          <div className="flex items-center gap-4">
            <div>
              <Icons.Call className="w-12 h-12 fill-primary" />
            </div>
            <div className="text-body text-black-800">
              고객센터 전화로도 쉽게 가입이 가능해요.
              <div className="font-medium text-black">02 - 6999 - 1444</div>
            </div>
          </div>
        </Callout>

        <div className="w-full h-full flex flex-col mt-12 gap-5">
          <Link to="../parentCareType">
            <Button className="py-8 h-auto flex-col gap-3" outline>
              <div className="w-36 h-36 -mt-8">
                <img
                  className="w-full h-full object-cover"
                  src="./assets/family.svg"
                  alt="가족 그림"
                />
              </div>
              <div className="text-subtitle-lg -mt-8">
                <strong>부모 회원</strong>으로 가입하기
              </div>
            </Button>
          </Link>
          <Link to="../senior/check">
            <Button className="py-8 h-auto flex-col gap-3" outline>
              <div className="w-36 h-36 -mt-8">
                <img
                  className="w-full h-full object-cover"
                  src="./assets/superWoman.svg"
                  alt="가족 그림"
                />
              </div>
              <div className="text-subtitle-lg -mt-8">
                <strong>시니어 시터</strong>로 가입하기
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
