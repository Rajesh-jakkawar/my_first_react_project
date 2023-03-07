import React from "react";
import web from "../src/images/about.svg";
import {FaFacebook ,  FaInstagram , FaLinkedin , FaGithub} from "react-icons/fa"

import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Welcome to about page
                    <strong className="brand-name"> Rajesh jakkawar </strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/Contact" className="btn-get-started ">
                     Contact Now
                    </NavLink>
                  </div>

                  <div className="mt-5">
         <a href="https://github.com/reactjs/hi.reactjs.org/">
         <FaGithub size="3rem" color="black" className=" social-icons col-md-2" />
         </a>
         <a  href="https://www.linkedin.com/in/rajesh-jakkawar/">
         <FaLinkedin size="3rem" color="#497fd6" className="col-md-2 social-icons" />
         </a>
          <a href="https://www.instagram.com/rajesh_jakkawar/">
         <FaInstagram  size="3rem" color="#e02482" className="col-md-2 social-icons" />
         </a>
         <a  href="https://www.facebook.com/rajesh.jakkawarrj/">
         <FaFacebook size="3rem" color="blue" className="col-md-2 social-icons"/>
         </a>
       </div>

                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="Commom img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
