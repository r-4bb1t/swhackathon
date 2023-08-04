import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { PHONE_REGEX } from "@/constants/phone";
import { useState } from "react";

export default function SetContact({
  contactPhoneNumber,
  setContactPhoneNumber,
  handleApply,
}) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className="px-4">
        <h1 className="text-h1">
          부모님과의 원활한 소통을 위해
          <br />
          연락처를 입력해 주세요.
        </h1>

        <div className="text-subtitle text-black-800 mt-4">전화번호</div>
        <div className="flex items-center gap-2 mt-2">
          <Input
            placeholder={contactPhoneNumber}
            defaultValue={contactPhoneNumber}
            maxLength={4}
            type="number"
            onChange={(e) => setContactPhoneNumber(e.target.value)}
          />
        </div>
        <label className="flex gap-4 mt-4">
          <input
            className="checkbox checkbox-primary"
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked((s) => !s)}
          />
          입력하신 전화번호가 시터에게 전달됩니다.
          <br />
          정보 제공에 동의합니다.
        </label>
      </div>
      <Button
        className="absolute inset-x-4 w-auto bottom-4"
        disabled={!PHONE_REGEX.test(contactPhoneNumber) || !isChecked}
        onClick={() => handleApply()}
      >
        다음
      </Button>
    </>
  );
}
