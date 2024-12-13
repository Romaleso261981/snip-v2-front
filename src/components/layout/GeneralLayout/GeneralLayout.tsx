import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ReactNode } from "react";

export default function GeneralLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pb-10 text-gold">
      <Header className="text-gold" />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
