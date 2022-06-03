import React from "react";
import "./Testimonial.css";
import testimonial from "../../assests/Image/testimonial-client.jpg";
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
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-caption d-block ">
                    <div className="carousel-img">
                      <img src={testimonial} alt="testimonilal" />
                    </div>
                    <h5 className="testimonail_clinet_name">
                      First slide label
                    </h5>
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
                      <img src={testimonial} alt="testimonilal" />
                    </div>
                    <h5 className="testimonail_clinet_name">
                      Second slide label
                    </h5>
                    <p className="testimonail_clinet_content">
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption ">
                    <div className="carousel-img">
                      <img src={testimonial} alt="testimonilal" />
                    </div>

                    <h5 className="testimonail_clinet_name">
                      Third slide label
                    </h5>
                    <p className="testimonail_clinet_content">
                      Some representative placeholder content for the third
                      slide.
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
