import { createContext, useContext, useState } from "react";

export const UserContext = createContext({
  user: null,
});

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
