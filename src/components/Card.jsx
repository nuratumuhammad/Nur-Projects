import React from "react";

const Card = ({ cardTitle, cardDate, cardImg }) => {
  return (
    <figure className="card shadow-xl  bg-yellow-50 rounded-lg flex flex-col  flex-1/2 sm:flex-1/3 md:flex-1/4 xl:flex-1/5">
      <img
        src={cardImg}
        alt=""
        className="w-full h-20 rounded-lg object-cover"
      />
      <figcaption className="card-details flex flex-col items-start py-4 px-2">
        <h4 className="text-lg text-yellow-400 font-semibold">{cardTitle}</h4>
        <p className="text-gray-300 text-lg ">{cardDate}</p>
      </figcaption>
    </figure>
  );
};

export default Card;
