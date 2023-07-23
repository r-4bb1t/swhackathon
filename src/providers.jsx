import AlertContextProvider from "./contexts/useAlert";
import UserContextProvider from "./contexts/useUser";

export default function Providers({ children }) {
  return (
    <UserContextProvider>
      <AlertContextProvider>{children}</AlertContextProvider>
    </UserContextProvider>
  );
}
