import React from "react";
import { useSelector } from "react-redux";
import LoadingComponent from "../../app/layout/loadingComponent";
import ServiceItem from "./ServiceItem";

const ServicesList = () => {
  const { services } = useSelector((state) => state.services);
  const { loading } = useSelector((state) => state.async);
  if (loading) return <LoadingComponent />;
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
