import React from "react";
import "./Benefit.css";

import { BenefitData } from "../../api/BenefitData";
import TitleDisc from "../SubComponents/TitleDisc/TitleDisc";
const Benefit = () => {
  return (
    <>
      <section className="BenefitsSection" id="Benefits">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 benefits-color">
              <TitleDisc title="BENEFITS" subtitle="Why Work With Me" />
              <div className="row">
                {BenefitData.map((value) => (
                  <div className="col-lg-6 col-md-6 col-sm-12" key={value.id}>
                    <span className="benefits-icon">
                      <img src={value.icon} alt="" />
                    </span>
                    <h2 className="benefits-title">{value.title}</h2>
                    <p className="benefits-description">{value.desc} </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 benefits-image">
              <div className="benefits-responsive-img d-lg-none"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefit;
