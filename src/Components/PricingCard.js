import { Link } from "react-router-dom"
import "./pricingCardStyles.css"
import React from 'react'

const pricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$10</p>
                <p>- 6 month -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">BUY ME A COFFEE.</Link>

            </div>
            <div className="card">
                <h3>- medium -</h3>
                <span className="bar"></span>
                <p className="btc">$20</p>
                <p>- 1 year -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">BUY ME A COFFEE.</Link>

            </div>
            <div className="card">
                <h3>- premium -</h3>
                <span className="bar"></span>
                <p className="btc">$50</p>
                <p>- Lifetime -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">BUY ME A COFFEE.</Link>

            </div>
        </div>
    </div>
  )
}

export default pricingCard
