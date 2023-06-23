import React from "react";
import PromoBar from "../PromoBar/PromoBar";
import SearchHeader from "../SearchBar/SearchHeader";
import Navigation from "../Navigation/Navigation";
import AccountNavbar from "../Navigation/AccountNavbar";
import Footer from "../Footer/Footer";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import BuyerSideBar from "../Navigation/BuyerSideBar";

interface Props {
  children: React.ReactNode;
}

const BuyerLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <PromoBar />
      <SearchHeader />
      <Navigation />
      <AccountNavbar />
      <main className="w-full h-full">
        <Wrapper style="md:py-12 py-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-[250px,calc(100%-250px)]">
            <BuyerSideBar />
            {children}
          </div>
        </Wrapper>
      </main>
      <Footer />
    </>
  );
};

export default BuyerLayout;
