
import { Metadata } from "next";
import { Slide, ToastContainer } from "react-toastify";

import "@/assets/styles/index.scss";

import { exo2, roboto } from "@/assets/fonts/fonts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import StoreProvider from "@/store/components/StoreProvider/StoreProvider";

export const metadata: Metadata = {
  title: "Nixbuy",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${exo2.variable}`}>
      <body>
        <StoreProvider>
          <>
            <Header />
            {children}
            <Footer />
          </>
        </StoreProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />
      </body>
    </html>
  );
}
