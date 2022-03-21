import React from "react";
import { useSelector } from "react-redux";
import ServiceItem from "./ServiceItem";

const ServicesList = () => {
  const { services } = useSelector((state) => state.services);
  console.log(services);
  return (
    <div className="row">
      {services.map((service) => (
        <ServiceItem
          heading={service.serviceName}
          detail={service.detail}
          code={service.code}
          key={service.id}
        />
      ))}
    </div>
  );
};

export default ServicesList;
