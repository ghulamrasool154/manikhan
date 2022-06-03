import React from "react";
import "./Home.css";
import { Link } from "react-scroll/modules";
import bgVideo from "../../assests/Video/Source-Code-4733.mp4";
import manikhan from "../../assests/Image/mani-khan.png";

const Home = () => {
  return (
    <section className="Home" id="Home">
      <div className="for-bg-image"></div>
      <video controls loop autoPlay muted className="video-background">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="container-fluid home-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="home-section-syle">
              <div className="into">
                <div className="image">
                  <img src={manikhan} alt="manikhan" />
                </div>

                <div className="about-me">
                  <h1>Hello! I'm Mani Khan</h1>
                  <p>Professional web master with 11+ years of experience</p>
                </div>
              </div>
              <div className="smartwebsolution">
                <h1 className="maintitle"> smart web solutions</h1>
                <h2 className="maindec">
                  For your personal & commercial projects
                </h2>
                <p className="discription">
                  Grow your business, connect with your audience and show them
                  who YOU are through MY quality website development services.
                </p>

                <div className="d-flex">
                  <Link to="Portfolio">
                    <button className="view-my-portfolio">
                      View My Portfolio
                    </button>
                  </Link>
                  <Link to="ProductDicsussion">
                    <button className="discuss-your-project">
                      Discuss Your Project
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
