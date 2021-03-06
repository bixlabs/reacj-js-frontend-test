import React from "react";
import { Link } from "react-router-dom";

const TierItem = ({ slug, name, price, whatsIncluded }) => {
  return (
    <>
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{name}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            ${price} <small className="text-muted">/ mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            {whatsIncluded.map((item) => (
              <li key={Math.random().toString()}>{item}</li>
            ))}
          </ul>
          <Link to={"../checkout/" + slug + "/tier/" + name}>
            <button
              type="button"
              className="btn btn-lg btn-block btn-outline-primary"
            >
              Buy now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TierItem;
