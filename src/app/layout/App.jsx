import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../../features/home/HomePage";
import ServicePage from "../../features/services/ServicePage";
import Checkout from "../../features/checkout/Checkout";
import Sandbox from "../../features/sandbox/Sandbox";
import NotFound from "../../features/notFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services/:service" element={<ServicePage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="sandbox" element={<Sandbox />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
