import React from "react";
import GalImg1 from "../assets/gal-1.jpg";
import GalImg2 from "../assets/gal-2.jpg";
import GalImg3 from "../assets/gal-3.jpg";
import GalImg4 from "../assets/gal-4.jpg";
import GalImg5 from "../assets/gal-5.jpg";
import GalImg6 from "../assets/gal-6.jpg";
import Heading from "../components/Heading";

const Work = () => {
  return (
    <section className="work w-full h-auto 2xl:h-96 my-8 mx-auto " id="work">
      <div className="container py-6">
        <Heading title="My" titleSpan="Work" />

        <div className="row work-row ">
          <nav className="work-navbar w-full text-center flex items-center justify-center ">
            <ul className=" w-full h-full work-navbar-links flex items-center justify-center gap-3 capitalize flex-wrap  ">
              <li className="navbar-item">
                <a href="#beauty" className="navbar-link ">
                  beauty
                </a>
              </li>
              <li className="navbar-item">
                <a href="#travel" className="navbar-link ">
                  travel
                </a>
              </li>
              <li className="navbar-item ">
                <a href="#lifestyle" className="navbar-link ">
                  lifestyle
                </a>
              </li>
              <li className="navbar-item">
                <a href="#nature" className="navbar-link ">
                  nature
                </a>
              </li>
              <li className="navbar-item">
                <a href="#memory" className="navbar-link ">
                  Memory
                </a>
              </li>
            </ul>
          </nav>
          <div className="work-img-container flex flex-1 flex-wrap">
            <figure className="work-figure relative group flex-1/2 sm:flex-1/3  lg:flex-1/5">
              <img
                src={GalImg2}
                alt="contact image"
                className="w-full h-full object-cover rounded-xl group-hover:opacity-35"
              />
              <figcaption className=" hidden absolute top-0  left-0  w-full h-full group-hover:flex items-center justify-center bg-amber-300">
                <h4 className="text-lg text-white font-semibold">Beauty</h4>
              </figcaption>
            </figure>
            <figure className="work-figure relative group flex-1/2 sm:flex-1/3  lg:flex-1/5">
              <img
                src={GalImg6}
                alt="contact image"
                className="w-full h-full object-cover rounded-xl group-hover:opacity-35"
              />
              <figcaption className="hidden absolute top-0 left-0 w-full h-full group-hover:flex items-center justify-center bg-amber-300">
                <h4 className="text-lg  font-semibold text-white">Travel</h4>
              </figcaption>
            </figure>
            <figure className="work-figure relative group flex-1/2 sm:flex-1/3  lg:flex-1/5">
              <img
                src={GalImg5}
                alt="contact image"
                className="w-full h-full object-cover rounded-xl group-hover:opacity-35"
              />
              <figcaption className=" hidden absolute top-0  left-0  w-full h-full group-hover:flex items-center justify-center bg-amber-300">
                <h4 className="text-lg text-white font-semibold">Lifestyle</h4>
              </figcaption>
            </figure>
            <figure className="work-figure relative group flex-1/2 sm:flex-1/3  lg:flex-1/5">
              <img
                src={GalImg4}
                alt="contact image"
                className="w-full h-full object-cover rounded-xl group-hover:opacity-35"
              />
              <figcaption className=" hidden absolute top-0  left-0  w-full h-full group-hover:flex items-center justify-center bg-amber-300">
                <h4 className="text-lg text-white font-semibold">Nature</h4>
              </figcaption>
            </figure>
            <figure className="work-figure relative group flex-1/2 sm:flex-1/3  lg:flex-1/5">
              <img
                src={GalImg1}
                alt="contact image"
                className="w-full h-full object-cover rounded-xl group-hover:opacity-35"
              />
              <figcaption className=" hidden absolute top-0  left-0  w-full h-full group-hover:flex items-center justify-center bg-amber-300">
                <h4 className="text-lg text-white font-semibold">Memory</h4>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
