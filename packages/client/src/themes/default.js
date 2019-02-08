import { createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";

export default createMuiTheme({
  overrides: {
    MuiTypography: {
      title: {
        textTransform: "uppercase"
      },
      display1: {
        textTransform: "uppercase"
      },
      display2: {
        textTransform: "uppercase"
      },
      body2: {
        textTransform: "uppercase"
      }
    },
    MuiDrawer: {
      paper: {
        backgroundColor: grey[50]
      }
    },
    MuiButton: {
      fab: {
        position: "fixed",
        bottom: "1em",
        right: "1em"
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: blueGrey[700]
      }
    }
  },
  palette: {
    primary: {
      light: blueGrey[700],
      main: blueGrey[800],
      dark: blueGrey[900],
      contrastText: "#FFF"
    },
    secondary: {
      light: blue[200],
      main: blue[700],
      dark: blue[800],
      contrastText: "#FFF"
    }
  }
});
