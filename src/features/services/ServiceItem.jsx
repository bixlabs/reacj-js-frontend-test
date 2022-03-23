import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = (props) => {
  const { code, heading, detail } = props;
  return (
    <div className="col-md-4">
      <h2>{heading}</h2>
      <p>{detail}</p>
      <p>
        <Link
          className="btn btn-secondary"
          role="button"
          to={"services/" + code}
        >
          View details »
        </Link>
      </p>
    </div>
  );
};

export default ServiceItem;
