import React from "react";
import ContactImg from "../assets/blog.jpg";
import Heading from "../components/Heading";
import Button from "../components/Button";

const Contact = () => {
  return (
    <section
      className="contact w-full h-auto md:h-96  my-8 mx-auto "
      id="contact"
    >
      <div className="container ">
        <Heading title="Gei in" titleSpan="Touch" />

        <div className="row contact-row  ">
          <div className="col-1   w-full  md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 about-info flex flex-col item-center gap-2">
            <h3 className="content-heading bg-gradient-to-br from-yellow-700 to-yellow-400 bg-clip-text text-transparent text-xl">
              Join our community
            </h3>
            <p className="text-gray-300 text-lg w-8/9 ">
              Receive curated updates on new artists and artwork hand selected
              by our team
            </p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              className="p-2 outline-0 border-0 bg-yellow-100 rounded-2xl"
            />
            <Button buttonName="Subsribe" className="items-start" />
          </div>
          <div className="col-2w-full  md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 about-figure">
            <img
              src={ContactImg}
              alt="contact image"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
