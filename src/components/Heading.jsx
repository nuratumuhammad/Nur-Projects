import React from "react";

const Heading = ({ title, titleSpan }) => {
  return (
    <h2 className="section-heading text-3xl text-black">
      {title}
      <span className="ml-2  bg-gradient-to-br from-yellow-600 to-yellow-300 bg-clip-text text-transparent">
        {titleSpan}
      </span>{" "}
    </h2>
  );
};

export default Heading;
