import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StateUserContext from "./UserContext/StateUserContext.jsx";
import AdminState from "./AdminContext/AdminState.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <StateUserContext>
            <AdminState>
            <App />
            </AdminState>
        </StateUserContext>
    </BrowserRouter>,
);
