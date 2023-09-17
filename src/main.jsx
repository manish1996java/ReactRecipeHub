import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import { Provider } from "react-redux";
import store from "./store/store";


let reactDomRoot = ReactDOM.createRoot(document.querySelector("#root"));
reactDomRoot.render(
  <StrictMode>    
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
