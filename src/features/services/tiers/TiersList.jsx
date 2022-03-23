import React from "react";
import TierItem from "./TierItem";

const TiersList = ({ slug, tiers }) => {
  return (
    <div className="card-deck mb-3 text-center">
      {tiers.map((tier) => (
        <TierItem
          key={tier.name}
          slug={slug}
          name={tier.name}
          price={tier.price}
          whatsIncluded={tier.whatsIncluded}
        />
      ))}
    </div>
  );
};

export default TiersList;
