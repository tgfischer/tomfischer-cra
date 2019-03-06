import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import App from "../../components/App";
import SidebarProvider from "../../contexts/SidebarProvider";
import theme from "../../themes/default";

export default () => (
  <MuiThemeProvider theme={theme}>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </MuiThemeProvider>
);
