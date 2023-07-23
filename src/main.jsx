import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Onboard from "./views/onboard";
import Home from "./views/home";

import "./index.css";
import "./tailwind.css";
import Mypage from "./views/mypage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboard" element={<Onboard />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </Router>
    </Layout>
  </React.StrictMode>
);
