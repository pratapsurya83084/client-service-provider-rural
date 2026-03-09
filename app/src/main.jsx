import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StateUserContext from "./UserContext/StateUserContext.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <StateUserContext>
            <App />
        </StateUserContext>
    </BrowserRouter>,
);
