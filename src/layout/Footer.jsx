import React from "react";
import Brand from "../assets/logo.svg";
import Button from "../components/Button";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full h-auto bg-gradient-to-br from-black to-gray-900 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 justify-center"
    >
      <div className="footer-div1 flex flex-col gap-3">
        <div className="brand flex items-center gap-2">
          <img src={Brand} alt="brand" className="w-10 h-10 object-cover" />
          <span className="text-yellow-300 text-lg">46 Ten</span>
        </div>
        <p className="text-white text-lg">
          {" "}
          We will come to your home or office and consult with you regarding
          scale, palette, lighting, framing, conservation and more.
        </p>
      </div>
      <div className="footer-div2 flex flex-col gap-3">
        <h4 class="text-yellow-300 text-xl">Email Newsletter</h4>

        <p className="text-white text-lg ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <form id="footer-form" className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Enter Email..."
            id="email-input"
            class="p-1 pl-4 outline-0 border-0 bg-yellow-100 rounded-2xl w-full md:w-7/9"
          />
          <input
            type="submit"
            value="Subscribe"
            class=" w-full md:w-7/9 p-1 outline-0 border-0 bg-yellow-600 hover:bg-yellow-700 text-gray-100 hover:text-white text-lg capitalize rounded-2xl"
          />
        </form>
      </div>
      <div className="footer-div3 flex flex-col gap-3">
        <h4 class="text-yellow-300 text-xl">Site Links</h4>
        <ul class="footer-links flex flex-col gap-2 ">
          <li>
            <a href="#" class="text-white text-sm hover:text-yellow-300">
              <span class="mr-2">&gt;</span> Help & Support
            </a>
          </li>
          <li>
            <a href="#" class="text-white text-sm hover:text-yellow-300">
              <span class="mr-2">&gt;</span> Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="text-white text-sm hover:text-yellow-300">
              <span class="mr-2">&gt;</span> About Us
            </a>
          </li>
          <li>
            <a href="#" class="text-white text-sm hover:text-yellow-300">
              <span class="mr-2">&gt;</span> Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-div4 flex flex-col gap-3">
        <h4 class="text-yellow-300 text-xl">Join our club</h4>
        <p className="text-white text-lg">
          {" "}
          Join Us at Nur's photography and have amazing shots and life long
          captivating memories.
        </p>

        <Button buttonName="Subsribe" className="" />
      </div>
    </footer>
  );
};

export default Footer;
