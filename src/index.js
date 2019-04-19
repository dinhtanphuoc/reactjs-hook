import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from "./store/useStore";
import App from "./App";

function Main() {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
