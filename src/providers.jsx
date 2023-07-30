import AlertContextProvider from "./contexts/useAlert";
import UserContextProvider from "./contexts/useUser";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <AlertContextProvider>{children}</AlertContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  );
}
