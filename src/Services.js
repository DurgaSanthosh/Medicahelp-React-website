import React from "react";
import FeatureBox from "./FeatureBox";
import web from "../src/images/images.jpg";
import featureimage2 from "../src/images/doc-nurse-amb.jpg";
import featureimage3 from "../src/images/Ambulance.jpg";
const Services = () => {
  return (
    <>
      <div id="service_pg">
        <div className="a-container">
          <FeatureBox image={web} title={"Course"} />
          <FeatureBox image={featureimage2} title={"Course"} />
          <FeatureBox image={featureimage3} title={"Course"} />
        </div>
      </div>
    </>
  );
};
export default Services;
