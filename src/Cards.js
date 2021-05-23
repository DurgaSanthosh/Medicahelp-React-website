import React from "react";
import web from "../src/images/ambulance3.jpeg";
import web1 from "../src/images/covid.jpg";
import web2 from "../src/images/image2.jpeg";

const Cards = () => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <img src={web} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              We provide you with quality medical services within each of our
              ambulance
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <img src={web1} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              We take every possible measures after each services to protect you
              against viruses.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <img src={web2} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              We are connected with every hoapitals and medical services in your
              area
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
