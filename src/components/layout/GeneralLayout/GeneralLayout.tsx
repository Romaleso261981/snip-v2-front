import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function GeneralLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative pb-10 text-gold">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName="custom-toast-container"
        containerStyle={{ margin: "10px" }}
        toastOptions={{
          className: "custom-toast",
          duration: 5000,
          style: { background: "#363636", color: "#fff" },
          success: {
            duration: 3000
          }
        }}
      />
      <Header className="text-gold" />
      <main className="container mx-auto px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}
