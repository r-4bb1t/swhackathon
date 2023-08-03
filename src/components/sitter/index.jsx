import Icons from "@/components/Icons";
import { Link } from "react-router-dom";

export default function Sitter({ items }) {
    return (
        <ul className="mt-8 divide-y divide-black-400">
            {items.map((item, i) => (
                <Link
                    to={`/parent/sitter/detail/${item.id}`}
                    key={i}
                    className="block"
                >
                    <li className="flex items-center py-4">
                        <div className="w-full">
                            <div className="text-subtitle-bold mb-2">
                                강다정 시터님
                            </div>
                            <div className="text-caption mb-3 text-black-800">
                                신생아, 영아, 유아, 초등학생 돌봄 가능
                            </div>
                            <div className="flex">
                                <div className="badge badge-accent font-medium mr-2">
                                    등하원 돌봄
                                </div>
                                <div className="badge badge-accent font-medium mr-2">
                                    1회성 돌봄
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-24 h-full">
                            <Icons.RightChevron className="w-8 h-8 fill-black" />
                        </div>
                    </li>
                </Link>
            ))}
        </ul>
    );
}
