import AlertContextProvider from "./contexts/useAlert";
import { RecoilRoot } from "recoil";

export default function Providers({ children }) {
  return (
    <RecoilRoot>
      <AlertContextProvider>{children}</AlertContextProvider>
    </RecoilRoot>
  );
}
