import React from "react";

import { ServiceData } from "../../api/ServiceData";
import TitleDisc from "../SubComponents/TitleDisc/TitleDisc";
import "./Service.css";

const Service = () => {
  return (
    <section className="text-center myservices" id="MyServices">
      <div className="container-fluid m-auto">
        <div className="row m-auto ">
          <TitleDisc title="MY SERVICES" subtitle="Stuff I’m Really Good At" />
        </div>
        <div className="row">
          {ServiceData.map((value) => (
            <div
              className="col-lg-3 col_wid col-md-6 col-sm-12 service-main-box "
              key={value.id}
            >
              <div className="service-box">
                <div className="service-box-inner">
                  <div className="service-box-front">
                    <span className="service-icon">
                      <img src={value.icon} alt={value.title} />
                    </span>
                    <h1 className="service-title">{value.title}</h1>
                    <p className="service-paragraph">{value.para}</p>
                  </div>
                  <div className="service-box-back">
                    <h1 className="service-title">{value.backtitle}</h1>
                    <p className="service-paragraph">{value.backpara}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row  ">
          <div className="col-lg-12">
            <p className="qulity">
              I believe that Quality is always better than Quantity, <br /> and
              a project is not complete until you are 100% satisfied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
