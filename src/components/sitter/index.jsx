import Icons from "@/components/Icons";
import { Link } from "react-router-dom";

export default function Sitter({ items }) {
    return (
        <ul className="mt-8 divide-y divide-black-400">
            {items.map((item, i) => (
                <Link
                    to={`/sitter/detail/${item.sitterUserId}`}
                    key={i}
                    className="block"
                >
                    <li className="flex items-center py-4">
                        <div className="w-full">
                            <div className="text-subtitle-bold mb-2">
                                {item.sitterUserName} 시터님
                            </div>
                            <div className="text-caption mb-3 text-black-800">
                                {/* sitterUserChildTypeNames 의 요소를 공백을 넣어 각각 출력 */}
                                {item.sitterUserChildTypeNames.join(", ") +
                                    " 돌봄가능"}
                            </div>
                            <div className="flex">
                                {item.sitterUserCareTypeNames.map(
                                    (careType, i) => (
                                        <div
                                            key={i}
                                            className="badge badge-accent font-medium mr-2"
                                        >
                                            {careType}
                                        </div>
                                    )
                                )}
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
