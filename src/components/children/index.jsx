import Icons from "@/components/Icons";
import { Link } from "react-router-dom";

export default function Children({ items }) {
  return (
    <ul className="mt-8 divide-y divide-black-400">
      {items.map((item, i) => (
        <Link to={`/children/detail/${item.id}`} key={i} className="block">
          <li className="flex items-center py-4">
            <div className="w-full">
              <div className="text-subtitle-bold mb-2">23년 4월생</div>
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
