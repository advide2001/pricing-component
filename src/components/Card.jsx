import React from "react";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className="bg-white rounded-xl shadow-lg px-8 py-10 text-center">
      <h2 className="text-grayishBlue font-bold">{props.plan.name}</h2>
      <p className="text-grayishBlue-dark text-4xl font-bold my-6 flex items-center justify-center">
        <span>$</span>
        <span className="text-6xl ml-2">{props.plan.price}</span>
      </p>
      <div className="flex flex-col divide-y-2 divide-grayishBlue-light border-t-2 border-b-2 border-grayishBlue-light">
        {props.plan.features.map((feature, index) => {
          return (
            <p
              key={index}
              className="text-grayishBlue text-sm font-bold w-full py-4">
              {feature}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
