import React from "react";

import NavBar from "../../components/NavBar";
import useSidebar from "../../hooks/useSidebar";

const NavBarContainer = props => {
  const [, openSidebar, closeSidebar] = useSidebar();
  return (
    <NavBar {...props} openSidebar={openSidebar} closeSidebar={closeSidebar} />
  );
};

export default NavBarContainer;
