import React from "react";
import AboutImg from "../assets/hero-2.jpeg";
import Heading from "../components/Heading";
import Button from "../components/Button";

const About = () => {
  return (
    <section className="about w-full h-auto md:h-96 my-8 mx-auto " id="about">
      <div className="container ">
        <Heading title="About" titleSpan="Us" />
        <div className="row ">
          <div className="col-1 w-full md:w-1/2 about-info flex flex-col item-center gap-2">
            <h3 className="content-heading bg-gradient-to-br from-yellow-700 to-yellow-400 bg-clip-text text-transparent text-xl">
              Know the most exciting thing about me
            </h3>
            <p className="text-gray-300 text-lg w-8/9 ">
              Nur Muhammad is a Nigerian photographer, web developer, and human
              doctor who has documented the beauty and plight of our planet,
              earth and humans for more than 10 years.
            </p>
            <Button buttonName="See my portfolio" />
          </div>
          <div className="col-2  w-full h-60 md:h-full md:w-1/2 about-figure">
            <img
              src={AboutImg}
              alt="about image"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
