import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { RequestProvider } from "react-request-hook";
import axios from "axios";

import App from "../../components/App";
import SidebarProvider from "../../contexts/SidebarProvider";
import theme from "../../themes/default";

export default () => (
  <MuiThemeProvider theme={theme}>
    <RequestProvider value={axios}>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </RequestProvider>
  </MuiThemeProvider>
);
