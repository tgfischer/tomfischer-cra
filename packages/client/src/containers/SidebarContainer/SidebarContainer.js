import React from "react";

import Sidebar from "../../components/Sidebar";
import useSidebar from "../../hooks/useSidebar";

const SidebarContainer = props => {
  const [isOpen, openSidebar, closeSidebar] = useSidebar();
  return (
    <Sidebar
      {...props}
      isOpen={isOpen}
      openSidebar={openSidebar}
      closeSidebar={closeSidebar}
    />
  );
};

export default SidebarContainer;
