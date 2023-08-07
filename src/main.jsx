import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Route/route.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <div className="bg-[#0D0E14]">
      <RouterProvider router={router} />
  </div>
    </React.StrictMode>
);
