import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

let reactDomRoot = ReactDOM.createRoot(document.querySelector("#root"));
reactDomRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
