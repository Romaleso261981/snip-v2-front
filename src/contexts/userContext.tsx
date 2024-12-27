"use client";

import { User } from "@/types/apiStrapiTypes";
import { createContext, ReactNode, useState } from "react";

type UserContextType = {
  user: User;
  setUser: (cardItems: User) => void;
};

type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({
    email: "",
    username: "",
    password: "",
    emailCode: "",
    isLoggedIn: false
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
