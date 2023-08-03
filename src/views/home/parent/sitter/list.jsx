import Sitter from "../../../../components/sitter";
import Icons from "@/components/Icons";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../../components/Header";

export default function SitterList() {
    return (
        <>
            {" "}
            <Header></Header>
            <div className="w-full h-full flex flex-col shrink p-8">
                <h1 className="text-h1">시니어 시터에게 맘편히 믿고 맡겨요.</h1>
                <Sitter
                    items={[
                        { id: 0 },
                        { id: 1 },
                        { id: 2 },
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                        { id: 6 },
                        { id: 7 },
                        { id: 8 },
                    ]}
                />
            </div>
        </>
    );
}
