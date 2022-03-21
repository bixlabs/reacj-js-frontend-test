import React from 'react'
import { Link } from 'react-router-dom'

const TierItem = (props) => {
    const { name, price } = props
    return (
        <>
            <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{name}</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">${price} <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>10 users included</li>
                        <li>2 GB of storage</li>
                        <li>Email support</li>
                        <li>Help center access</li>
                    </ul>
                    <Link to="../checkout">
                        <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default TierItem