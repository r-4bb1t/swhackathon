import Icons from "@/components/Icons";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <header className="w-full h-14 flex items-center px-4">
      <div className="h-full flex items-center">
        {pathname === "/" ? (
          <div className="pl-2">
            <Icons.Logo className="w-fit h-7" />
          </div>
        ) : (
          <button onClick={() => navigate(-1)}>
            <Icons.LeftArrow className="w-8 h-8 fill-black-800" />
          </button>
        )}
      </div>
    </header>
  );
}
