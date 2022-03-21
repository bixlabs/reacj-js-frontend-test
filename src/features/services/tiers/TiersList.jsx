import React from 'react'
import TierItem from './TierItem'

const TiersList = () => {
    return (
        <div className="card-deck mb-3 text-center">
            <TierItem name="Free" price={0} />
            <TierItem name="Pro" price={15} />
            <TierItem name="Enterprise" price={29} />
        </div>
    )
}

export default TiersList