import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineheight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p classname="mb-3">
            We kick-started operations on the enf of June, 2026 with the goal of
            breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            <a href="" style={{ textDecoration: "none" }}>
              InvestIQ.
            </a>
          </p>
          <p classname="mb-3">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p classname="mb-3">
            Over 1.7+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over 10%
            of all Indian retail trading volumes. Compare to other platforms our
            InvestIQ platform provides you best resource , latest information
            about stock and more efficient.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="" style={{ textDecoration: "none" }}>
              blog
            </a>{" "}
            or see what the media is{" "}
            <a href="" style={{ textDecoration: "none" }}>
              saying about us
            </a>{" "}
            or learn more about our business and product{" "}
            <a href="" style={{ textDecoration: "none" }}>
              philosophies.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
