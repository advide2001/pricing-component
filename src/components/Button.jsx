import React from "react";

const Button = (props) => {
  return (
    <button
      className={`mt-8 uppercase text-sm font-bold border-2 border-transparent rounded-lg w-full py-2 hover:bg-transparent ${
        props.primary
          ? "text-white bg-gradient-to-b from-lavender-light to-lavender-dark hover:border-lavender-dark hover:text-lavender-dark hover:bg-none"
          : "text-lavender-dark bg-white hover:border-white hover:text-white"
      }`}>
      Learn More
    </button>
  );
};

export default Button;
