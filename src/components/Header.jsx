import Icons from "@/components/Icons";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <header className="w-full h-14 fixed top-0 bg-white flex items-center px-4 shrink-0">
      <div className="h-full flex items-center">
        {pathname === "/" ? (
          <div className="pl-2">
            <img src="/assets/logo.png" className="w-fit h-5 object-contain" />
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
