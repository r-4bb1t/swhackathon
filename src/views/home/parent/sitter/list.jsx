import Sitter from "../../../../components/sitter";
import Icons from "@/components/Icons";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../../components/Header";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { SittersAtom } from "../../../../recoil/atoms/sitterList";
import axios from "axios";
import { userInfoState } from "../../../../recoil/atoms/userState";

export default function SitterList() {
  const [sitters, setSitters] = useRecoilState(SittersAtom);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  // 서버에서 추천 시터 정보 가져오기
  useEffect(() => {
    const fetchSitters = async () => {
      try {
        const response = await axios.get(
          `http://34.64.176.81:3001/users/sitters/all/${userInfo.id}`
        );
        setSitters(response.data);
        console.log("success fetch sitters");
        console.log("response.data:", response.data);
      } catch (error) {
        throw new Error("Failed to fetch sitters.");
      }
    };
    fetchSitters();
  }, []);

  return (
    <div className="w-full pt-14">
      <Header></Header>
      <div className="w-full h-full flex flex-col shrink p-8">
        <h1 className="text-h1">시니어 시터에게 맘편히 믿고 맡겨요.</h1>
        <Sitter items={sitters} />
      </div>
    </div>
  );
}
