import AlertContextProvider from "./contexts/useAlert";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Providers({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <AlertContextProvider>{children}</AlertContextProvider>
            </RecoilRoot>
        </QueryClientProvider>
    );
}
