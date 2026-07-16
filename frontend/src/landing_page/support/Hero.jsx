import React from "react";

function Hero() {
  return (
    <section id="supportHero">
      <div className="container py-5">

        {/* Top Bar */}
        <div
          className="d-flex justify-content-between align-items-center mb-5"
          id="supportWrapper"
        >
          <h4>Support Portal</h4>

          <a href="">Track Tickets</a>
        </div>

        {/* Main Content */}
        <div className="row">

          {/* Left Side */}
          <div className="col-lg-7">

            <h4 className="support-heading">
              Search for an answer or browse help topics
              to create a ticket
            </h4>

            <input
              type="text"
              placeholder="Eg. how do I activate F&O, why is my order getting rejected..."
            />

            <div className="support-links mt-4">

              <a href="">Track account opening</a>

              <a href="">Track segment activation</a>

              <a href="">Intraday margins</a>

              <a href="">Kite user manual</a>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-5 ps-lg-5">

            <h2 className="mb-4">Featured</h2>

            <ol>

              <li className="mb-3">
                <a href="">
                  Current Takeovers and Delisting – July 2026
                </a>
              </li>

              <li>
                <a href="">
                  Latest Intraday Leverages – MIS & CO
                </a>
              </li>

            </ol>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;