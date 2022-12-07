import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Box from "@mui/material/Box";
type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}

export default Layout;
