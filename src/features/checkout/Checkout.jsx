import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Cart from "./Cart";
import CheckoutForm from "./form/CheckoutForm";
import CheckoutFooter from "./CheckoutFooter";
import CheckoutHeader from "./form/CheckoutHeader";

const Checkout = () => {
  const { service, tier } = useParams();
  const servicesList = useSelector((state) => state.services.services);
  const currentService = servicesList.find((serv) => serv.code === service);
  const currentTier = currentService.tiers.find((t) => t.name === tier);

  return (
    <>
      <div className="container">
        <CheckoutHeader />
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <Cart
              tierName={currentTier.name}
              serviceName={currentService.serviceName}
              price={currentTier.price}
            />
          </div>

          <div className="col-md-8 order-md-1">
            <CheckoutForm
              tier={currentTier.name}
              service={currentService.code}
            />
            <CheckoutFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
