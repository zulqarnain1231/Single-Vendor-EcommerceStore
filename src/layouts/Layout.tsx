import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import BuyerLayout from "./BuyerLayout/BuyerLayout";
import AdminLayout from "./AdminLayout/AdminLayout";
import ClientLayout from "./ClientLayout/ClientLayout";
interface props {
  children: ReactNode;
}

function Layout({ children }: props) {
  // ===> router
  const Router = useRouter();
  const hideNavigation = Router.pathname.includes("product-category");
  const renderLayout = () => {
    if (
    
      Router.pathname == "/myaccount" ||
      Router.pathname == "/myaccount/dashboard" ||
      Router.pathname == "/myaccount/orders" ||
      Router.pathname == "/myaccount/addresses" ||
      Router.pathname == "/myaccount/account"
    ) {
      return <BuyerLayout>{children}</BuyerLayout>;
    } else if (
      Router.pathname == "/admin" ||
      Router.pathname == "/admin/orders" ||
      Router.pathname == "/admin/buyers" ||
      Router.pathname == "/admin/account" ||
      Router.pathname == "/admin/products" ||
      Router.pathname == "/admin/categories"
    ) {
      return <AdminLayout>{children}</AdminLayout>;
    } else return <ClientLayout>{children}</ClientLayout>;
  };

  return <React.Fragment>{renderLayout()}</React.Fragment>;
}

export default Layout;
