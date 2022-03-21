import React from 'react'
import { Routes, Route } from "react-router-dom";
import Checkout from '../../components/features/checkout/Checkout';
import Layout from './layout/Layout';
import HomePage from '../../components/features/home/HomePage';
import NoMatch from './layout/NoMatch';
import ServicePage from '../../components/features/services/ServicePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services/:service" element={<ServicePage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
