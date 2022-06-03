import React, { useState } from "react";
import PortfolioData from "../../api/PortfolioData";
import { Link } from "react-scroll/modules";
import "./Portfolio.css";
import TitleDisc from "../SubComponents/TitleDisc/TitleDisc";
const Portfolio = () => {
  const [listofImage, setlistofImage] = useState(4);
  const showDataSlicing = PortfolioData.slice(0, listofImage);
  const _loadMoreProduct = () => {
    setlistofImage(listofImage + listofImage);
  };
  const [popimg, setpopimg] = useState(true);

  const [onimg, setoneimg] = useState();

  const _hanldeViewImage = (value) => {
    console.log("value", value);
    let imageset = PortfolioData.find((img) => img.id === value);

    console.log("new img ", imageset);

    setoneimg(imageset);

    setpopimg(!popimg);
  };

  return (
    <>
      <section className="Portfolio" id="Portfolio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="row justify-content-center titleDiscription">
                <TitleDisc
                  title="PORTFOLIO"
                  subtitle="Check Out My Recent Projects"
                />
              </div>
            </div>
          </div>

          <div className="row">
            {showDataSlicing.map((value, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                <div className="portfolio">
                  <div className="image-backside">
                    <img src={value.img} alt="" className="w-100" />
                    <div className="portfolio-backside">
                      <div
                        className="portfolio-circle"
                        // onClick={() => console.log('working', index)}

                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => _hanldeViewImage(value.id)}
                      >
                        <i className="fa-solid fa-eye"></i>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-title">
                    <h2 className="portfolio-name">{value.name}</h2>
                  </div>
                </div>
              </div>
            ))}

            {popimg ? (
              ""
            ) : (
              <>
                <div
                  className="image_gallary_cover"
                  onClick={() => setpopimg(!popimg)}
                >
                  {" "}
                </div>
                <div className="image_gallary">
                  <div className="image_gallary_img">
                    <img src={onimg.img} className="h-100 img-fluid" alt="" />
                  </div>
                  <div className="closeimgbox">
                    <i
                      className="fa-solid fa-xmark"
                      onClick={() => setpopimg(!popimg)}
                    ></i>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="row">
            <div className="col-lg-12">
              {showDataSlicing.length === PortfolioData.length ? (
                ""
              ) : (
                <>
                  <button
                    className="loadMoreButton"
                    onClick={() => _loadMoreProduct()}
                  >
                    <span style={{ marginRight: "5px", fontSize: "15px" }}>
                      <i className="fa-solid fa-circle-arrow-down"></i>
                    </span>
                    Load More
                  </button>
                </>
              )}

              <Link to="Contact">
                <button className="startProject">
                  Start a Project with Me!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
