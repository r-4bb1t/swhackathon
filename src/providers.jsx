import AlertContextProvider from "./contexts/useAlert";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <AlertContextProvider>{children}</AlertContextProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
