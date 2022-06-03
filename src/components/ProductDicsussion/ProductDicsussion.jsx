import React from "react";

import "./ProductDicsussion.css";

import upwork from "../../assests/Image/upwork-1.svg";
import fiverr from "../../assests/Image/fiver-1.svg";

const ProductDicsussion = () => {
  return (
    <section className="ProductDicsussion" id="ProductDicsussion">
      <div className="container-fluid">
        <div className="row py-4 align-items-center">
          <div className="col-width">
            <h1 className="pro-dis">Let's Discuss Your Project Now!</h1>
          </div>
          <div className="col-width">
            <h1 className="wordpress-champion ">
              <span>
                <i className="fa-brands fa-skype"></i>
              </span>
              WordPressChampion
            </h1>
          </div>
        </div>

        <div className="row border-bottom" style={{ backgroundColor: "white" }}>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 m-0 p-0 border-end">
            <a
              href="https://www.upwork.com/freelancers/~0111e1f04612d3b481"
              target="_blank"
              rel="noreferrer"
            >
              <img src={upwork} alt="" />
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0">
            <a
              href="https://www.fiverr.com/manikhanwoo"
              rel="noreferrer"
              target="_blank"
            >
              <img src={fiverr} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDicsussion;
