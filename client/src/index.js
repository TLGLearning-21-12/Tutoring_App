import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Home from "./components/HomePage/Home";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>{<App />}</Provider>,
  document.getElementById("root")
);
