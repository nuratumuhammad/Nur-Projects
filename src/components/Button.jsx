import React from "react";

const Button = ({ buttonName }) => {
  return (
    <button className="btn px-4 py-1.5 border-none bg-yellow-600 hover:bg-yellow-700 text-gray-100 hover:text-white text-lg capitalize rounded-lg self-start">
      {buttonName}
    </button>
  );
};

export default Button;
