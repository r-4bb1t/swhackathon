import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "@/components/Layout";

import "@/index.css";
import "@/tailwind.css";
import Providers from "./providers";
import Routes from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <Layout>
        <Routes />
      </Layout>
    </Providers>
  </React.StrictMode>
);
