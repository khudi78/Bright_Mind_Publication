//import Header from "./Header";
import Footer from "./components/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-grow">{children}</main>
      <Footer />
      
    </div>
  );
}