import React from "react";
import "./Testimonial.css";
import testimonial1 from "../../assests/Image/testimonial1.jpg";
import testimonial2 from "../../assests/Image/testimonial2.jpg";
import testimonial3 from "../../assests/Image/testimonial3.jpg";
import testimonial4 from "../../assests/Image/testimonial4.jpg";

import TitleDisc from "../SubComponents/TitleDisc/TitleDisc";

const Testimonial = () => {
  return (
    <section className="tesimonial" id="Testimonial">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 testimonila-left-side">
            <TitleDisc
              title="TESTIMONIALS"
              subtitle="What Clients Say About Me"
            />
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>

                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-caption d-block ">
                    <div className="carousel-img">
                      <img src={testimonial1} alt="testimonilal" />
                    </div>
                    <h5 className="testimonail_clinet_name">Monica Pepe</h5>
                    <p className="testimonail_clinet_content">
                      Mani has gone above and beyond to resolve problems on a
                      website. He is smart and doesn’t quit! A very hard worker
                      who I will continue to work with for all my future needs.
                      He knows many things and is a hard worker. Great problem
                      solver!!!
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption ">
                    <div className="carousel-img">
                      <img src={testimonial2} alt="testimonilal" />
                    </div>
                    <h5 className="testimonail_clinet_name">Gabriel Lowe</h5>
                    <p className="testimonail_clinet_content">
                      Perfect. Exactly what I needed! Looking forward to future
                      projects! Thanks so much!
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption ">
                    <div className="carousel-img">
                      <img src={testimonial3} alt="testimonilal" />
                    </div>

                    <h5 className="testimonail_clinet_name">Kevin Friedman</h5>
                    <p className="testimonail_clinet_content">
                      This job was tough for me to understand, not for him! did
                      exactly what i was looking for! the communication by him
                      was stellar!
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption ">
                    <div className="carousel-img">
                      <img src={testimonial4} alt="testimonilal" />
                    </div>

                    <h5 className="testimonail_clinet_name">Murad Hamidi</h5>
                    <p className="testimonail_clinet_content">
                      Sincerely the best web developer ever! He does all what we
                      wanted even far better. He is the best WordPress and
                      WooCommerce engineer that we have been working with. It is
                      sincerely a pleasure to rely on his expertise and skills.
                      Thanks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 testimonial-image">
            {/* <div className="testimonial-image"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
