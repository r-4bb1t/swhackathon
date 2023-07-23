import Icons from "@/components/Icons";
import { useNavigate } from "react-router-dom";

export default function Header({ hasBackRoute }) {
  const navigate = useNavigate();
  return (
    <header className="w-full h-14 flex items-center px-4">
      <div className="h-full flex items-center">
        {hasBackRoute ? (
          <button onClick={() => navigate(-1)}>
            <Icons.LeftArrow className="w-8 h-8 fill-black-800" />
          </button>
        ) : (
          <div className="pl-2">
            <Icons.Logo className="w-fit h-7" />
          </div>
        )}
      </div>
    </header>
  );
}
