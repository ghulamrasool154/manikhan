import React from "react";
import { Link } from "react-scroll/modules";
import "./About.css";
import manbhai from "../../assests/Image/mani-khan.png";
const About = () => {
  return (
    <section className="about" id="About">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 about-looking-details">
            <h2 className="abouttitle">
              Hi! Looking for someone to build a website for you?
            </h2>
            <p className="aboutparagraph">
              Look no more! I can help to take your business to next level by
              offering best website development solutions because i know what to
              do and how to do. <br />
              <br />
              When you work with me, you are not working with a broker. As a
              programmer, I do all of the programming myself. However, in order
              to meet deadlines, fulfill your needs and exceed expectations, I
              also work with a team of other professionals if required. We work
              together to provide a higher quality result for you, the client.
            </p>
            <Link to="Contact">
              <button className="sendmessage">Contact Me Today</button>
            </Link>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 about-designation-details">
            <div className="designation d-flex align-items-center">
              <div className="designation-image">
                <img src={manbhai} alt="manikhan" />
              </div>
              <div>
                <h2 className="manikhan">Mani Khan</h2>
                <h2 className="webmaster">WebMaster, Programmer</h2>
              </div>
            </div>
            <p className="aboutmydetails">
              Hello, and thank you for taking a moment to find out how I can
              help you!
              <br />
              <br />
              My real name is <strong>Abdul Rehman</strong> and people know me
              as <strong>Mani Khan</strong>, that is my nickname. I am a
              professional web developer based in Faisalabad, Punjab, Pakistan.
              I develop modern, user-friendly websites and web apps for any size
              of business. I also provide cross-platform UI design services.
              <br />
              <br />
              I started freelancing as a front-end developer in 2009. My first
              project was to build the front-end of an eCommerce store for an
              Australia-based business. Since then, I have had the opportunity
              to work with local and international clients alike. I have worked
              with clients all over the world including the United States,
              United Kingdom, Canada, Australia, Germany, Spain, Sweden, France,
              Norway, South Africa, and the United Arab Emirates.
              <br /> <br />
              WordPress is Oxygen for Me. I know it like the back of my hand. I
              am also an expert in the following programming languages and
              techniques: HTML5, CSS3, Bootstrap, JavaScript, jQuery, AJAX,
              AngularJS, React Native, React, MongoDB, Express.js, Node.js,
              Redux, PHP & MySQL, Laravel, CodeIgniter, Wix, Shopify, and
              WooCommerce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
