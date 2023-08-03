import { Route, Routes } from "react-router";
import SitterList from "./sitter/list";
import SitterDetail from "./sitter/detail";
import CareService from "./careService";
import FindSitter from "./findSitter";
import Icons from "@/components/Icons";

export default function HomeParent() {
    return (
        <div className="w-full h-full flex flex-col shrink">
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="w-full h-full p-8 pt-12">
                            <Icons.Logo className=" w-32 h-20" />
                            <FindSitter />
                            <CareService />
                        </div>
                    }
                />
                <Route path="/sitter/list" element={<SitterList />} />
                <Route path="/sitter/detail/:id" element={<SitterDetail />} />
            </Routes>
        </div>
    );
}
