import React from "react";
import Brand from "../assets/logo.svg";

const Header = () => {
  return (
    <header
      id="home"
      className="w-full h-screen bg-cover bg-no-repeat bg-center bg-yellow-500"
      style={{ backgroundImage: "url('../../src/assets/hero-1.png')" }}
    >
      <nav className="navbar w-full h-20 ">
        <div className="w-full h-full mx-auto p-8 flex items-center justify-between bg-transparent">
          <div className="brand">
            <img src={Brand} alt="brand" className="w-15 h-15 object-cover" />
          </div>
          <div className="navbar-toggler text-2xl text-white flex sm:hidden  ">
            &#9776;
          </div>
          <ul className="navbar-links ">
            <li className="navbar-item p-2">
              <a href="#home" className="navbar-link ">
                Home
              </a>
            </li>
            <li className="navbar-item p-2">
              <a href="#about" className="navbar-link ">
                about
              </a>
            </li>
            <li className="navbar-item p-2">
              <a href="#work" className="navbar-link ">
                work
              </a>
            </li>
            <li className="navbar-item p-2">
              <a href="#featured" className="navbar-link ">
                Featured
              </a>
            </li>
            <li className="navbar-item p-2">
              <a href="#contact" className="navbar-link ">
                contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="w-full h-3/4 showcase flex flex-col  items-center justify-center gap-2">
        <h1 className="">Explore Nur's photography</h1>
        <p className="text-xl text-center w-5/6 md:w-9/10">
          We offer luxury experience. capture timeless moments and creating
          heirloom albums
        </p>
        <button className="btn-outline ">View my work</button>
      </div>
    </header>
  );
};

export default Header;
