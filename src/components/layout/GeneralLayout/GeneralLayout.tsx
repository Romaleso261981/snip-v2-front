import type { ReactNode } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function GeneralLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pb-10 text-gold">
      <Header className="text-gold" />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
