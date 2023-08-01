import AlertContextProvider from "./contexts/useAlert";
import { RecoilRoot } from "recoil";
import UserContextProvider from "./contexts/useUser";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <AlertContextProvider>{children}</AlertContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
