"use client";

import { User } from "@/types/apiStrapiTypes";
import { createContext, ReactNode, useState } from "react";

type UserContextType = {
  user: User;
  setUser: (cardItems: User) => void;
  updateUserField: (field: keyof User, value: any) => void;
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

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(
    () => {
      localStorage.setItem("user", JSON.stringify(user));
    },
    [user]
  );

  const updateUserField = (field: keyof User, value: any) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUserField }}>
      {children}
    </UserContext.Provider>
  );
}
import { useEffect } from "react";
