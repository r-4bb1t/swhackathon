import AlertContextProvider from "./contexts/useAlert";
import UserContextProvider from "./contexts/useUser";
import { RecoilRoot } from "recoil";

export default function Providers({ children }) {
    return (
        <RecoilRoot>
            <UserContextProvider>
                <AlertContextProvider>{children}</AlertContextProvider>
            </UserContextProvider>
        </RecoilRoot>
    );

}
