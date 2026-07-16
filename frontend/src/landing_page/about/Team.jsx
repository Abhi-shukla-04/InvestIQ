import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5  border-top">
        <h1 className="text-center">People</h1>
      </div>
      <div
        className="row p-3  text-muted"
        style={{ lineheight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/Abhinav.jpeg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4>Abhinav shukla</h4>
          <h5>Founder , CEO</h5>
        </div>
        <div className="col-6 p-3">
          <p>
            Abhinav founded InvestIQ in 2026 to overcome the loss of ₹17 in the
            stock market , hurdles he faced during his days long stint as a
            trader. In future , Our Aim is to change the landscape of the Indian
            broking industry.
          </p>
          <p>
            Abhinav founded InvestIQ Stocking after realizing that buying stocks was
            easier than fixing React Router.
          </p>
          <p>Playing Cricket (Only batting) is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              X
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
