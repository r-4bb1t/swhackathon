import Icons from "@/components/Icons";
import { Link } from "react-router-dom";

export default function Children({ items }) {
  return (
    <ul className="mt-8 divide-y divide-black-400">
      {items.map((item, i) => (
        <Link
          to={`/children/detail/${item.parentsUserId}`}
          key={i}
          className="block"
        >
          <li className="flex items-center py-4">
            <div className="w-full">
              <div className="text-subtitle-bold mb-2">
                {item.parentsUserChildren[0].slice(2, 4)}년{" "}
                {item.parentsUserChildren[0].slice(4, 6)}월생
              </div>
              <div className="text-caption mb-3 text-black-800">신생아</div>
              <div className="flex">
                <div className="badge badge-accent font-medium">
                  등하원 돌봄
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
