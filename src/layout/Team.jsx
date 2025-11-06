import React from "react";
import ProfileImg1 from "../assets/profile/Profile (1).jpg";
import ProfileImg2 from "../assets/profile/Profile (2).jpg";
import ProfileImg3 from "../assets/profile/Profile (3).jpg";
import ProfileImg4 from "../assets/profile/Profile (4).jpg";
import ProfileImg5 from "../assets/profile/Profile (5).jpg";

import Heading from "../components/Heading";

const Team = () => {
  return (
    <section className="team w-full h-auto my-8 mx-auto " id="team">
      <div className="container ">
        <Heading title="Meet our" titleSpan="Team" />

        <div className="row teams-row ">
          <div className="team-members w-full h-full  flex flex-wrap lg:flex-nowrap  gap-6  ">
            <figure className="team-member flex flex-col items-center gap-2  flex-1/3 md:flex-1/5">
              <img
                src={ProfileImg1}
                alt="team image"
                className="w-40 h-40 object-cover rounded-full"
              />
              <figcaption className="flex flex-col items-center">
                <h4 className="text-gray-900 font-semibold">Nara Smith</h4>
                <h5 className="text-gray-300 font-light">Teams Manager</h5>
              </figcaption>
            </figure>
            <figure className="team-member flex flex-col items-center gap-2  flex-1/3 md:flex-1/5">
              <img
                src={ProfileImg2}
                alt="team image"
                className="w-40 h-40 object-cover rounded-full"
              />
              <figcaption className="flex flex-col items-center">
                <h4 className="text-gray-900 font-semibold">Lara Dutta</h4>
                <h5 className="text-gray-300 font-light">Photographer</h5>
              </figcaption>
            </figure>
            <figure className="team-member flex flex-col items-center gap-2  flex-1/3 md:flex-1/5">
              <img
                src={ProfileImg3}
                alt="team image"
                className="w-40 h-40 object-cover rounded-full"
              />
              <figcaption className="flex flex-col items-center">
                <h4 className="text-gray-900 font-semibold">Madina Yusuf</h4>
                <h5 className="text-gray-300 font-light">Head Planner</h5>
              </figcaption>
            </figure>
            <figure className="team-member flex flex-col items-center gap-2  flex-1/3 md:flex-1/5">
              <img
                src={ProfileImg4}
                alt="team image"
                className="w-40 h-40 object-cover rounded-full"
              />
              <figcaption className="flex flex-col items-center">
                <h4 className="text-gray-900 font-semibold">Thomas Vincent</h4>
                <h5 className="text-gray-300 font-light">Senior developer</h5>
              </figcaption>
            </figure>
            <figure className="team-member flex flex-col items-center gap-2  flex-1/3 md:flex-1/5">
              <img
                src={ProfileImg5}
                alt="team image"
                className="w-40 h-40 object-cover rounded-full"
              />
              <figcaption className="flex flex-col items-center">
                <h4 className="text-gray-900 font-semibold">Aya Mail</h4>
                <h5 className="text-gray-300 font-light">Vice President</h5>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
