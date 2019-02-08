import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { MuiThemeProvider } from "@material-ui/core/styles";

import App from "../../components/App";
import theme from "../../themes/default";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();
const store = createStore(
  connectRouter(history)(reducers),
  {},
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

export default () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
);
