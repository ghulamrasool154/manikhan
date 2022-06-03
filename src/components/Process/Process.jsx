import React from "react";
import "./Process.css";

import { WorkingProcess } from "../../api/WorkingProcess";
import ProductDicsussion from "../ProductDicsussion/ProductDicsussion";
import TitleDisc from "../SubComponents/TitleDisc/TitleDisc";
const Process = () => {
  return (
    <>
      <ProductDicsussion />
      <section className="ProcessStep" id="ProductDicsussion">
        <div className="container-fluid">
          <div className="row titleDiscription">
            <TitleDisc
              title="PROCESS"
              subtitle="6 Short Steps Towards Your Brand New Website"
            />
          </div>

          <div className="row processcard_row">
            {WorkingProcess.map((value) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={value.id}>
                <div className="icon_list_item">
                  <div className="img-icon">
                    <img src={value.icon} alt="" />
                  </div>
                  <div className="icon_list_item_content">
                    <h4 className="heading">{value.title}</h4>

                    <p className="discription">{value.dec}</p>
                  </div>
                  {/* <div className="dashline-border"></div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
