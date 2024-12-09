import type { ReactNode } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pb-10 relative">
      <Header className="bg-transparent absolute top-0 z-50 text-white" />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
