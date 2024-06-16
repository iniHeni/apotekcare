import Header from "./Header";
import Footer from "./Footer";
import "../app/globals.css";

export default function RootLayout({ children }) {
  return (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  );
}