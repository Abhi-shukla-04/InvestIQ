import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p className="mb-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            see pricing <i className="fa-solid fa-angle-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col p-1 bordar">
              <img src="media/pricingEquity.svg" />
              <p>Free account opening</p>
            </div>
            <div className="col p-1 bordar">
              <img src="media/pricingEquity.svg" />
              <p>free equity delivery</p>
            </div>
            <div className="col p-1 bordar">
              <img src="media/intradayTrades.svg" />
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
