import React from "react";
import PromoBar from "../PromoBar/PromoBar";
import SearchHeader from "../SearchBar/SearchHeader";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
interface Props {
  children: React.ReactNode;
}
const ClientLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <PromoBar />
      <SearchHeader />
      <Navigation />
      <main className="w-full h-full">{children}</main>
      <Footer />
    </>
  );
};

export default ClientLayout;
