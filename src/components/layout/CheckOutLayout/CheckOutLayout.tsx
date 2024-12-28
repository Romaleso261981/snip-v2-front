import { ReactNode } from "react";
import Header from "./ui/CheckOutHeader";

export default function CheckOutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container flex flex-col justify-center items-center text-gold py-5 ">
      <Header />
      <main className="container flex flex-col sm:flex-row justify-center">
        {children}
      </main>
    </div>
  );
}
