import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h3 className="fs-4 mt-5px">Customer-first always</h3>
          <p className="text-muted mb-32px fs-1rem lh-1.8">
            That's why 1.7+ crore customers trust InvestIQ with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 10% of daily retail exchange volumes in India.
          </p>
          <h3 className="fs-4  mt-5px">No spam or gimmicks</h3>
          <p className="text-muted mb-32px fs-1rem lh-1.8">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Our philosophies
            </a>
          </p>
          <h3 className="fs-4  mt-5px">The Stock Universe</h3>
          <p className="text-muted mb-32px fs-1rem lh-1.8">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="fs-4 mt-5px">Do better with money</h3>
          <p className="text-muted mb-32px fs-1rem lh-1.8">
            With initiatives like{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Nudge
            </a>{" "}
            and{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Kill Switch
            </a>
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>

        <div className="col-6 p-5">
          <img
            src="/media/ecosystem.png"
            className="img-fluid"
            style={{ width: "100%" }}
            alt="Ecosystem"
          />
          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our product <i className="fa-solid fa-angle-right"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try kit demo <i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
