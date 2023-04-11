import React from "react";
import Button from "./Button";

const Card = (props) => {
  return (
    <div
      className={` rounded-xl shadow-lg px-8 py-8 text-center ${
        props.plan.isRecommended
          ? "text-white bg-black bg-gradient-to-b from-lavender-light to-lavender-dark sm:scale-110"
          : "text-grayishBlue-dark bg-white"
      }
      `}>
      <h2 className=" font-bold">{props.plan.name}</h2>
      <p className=" text-4xl font-bold my-6 flex items-center justify-center">
        <span>$</span>
        <span className="text-6xl ml-2">{props.plan.price}</span>
      </p>
      <div
        className={`flex flex-col divide-y-2 border-t-2 border-b-2 ${
          props.plan.isRecommended
            ? "divide-grayishBlue-veryLight border-grayishBlue-veryLight"
            : "divide-grayishBlue-light border-grayishBlue-light"
        }`}>
        {props.plan.features.map((feature, index) => {
          return (
            <p
              key={index}
              className={`${
                props.plan.isRecommended ? "text-white" : "text-grayishBlue"
              }  text-sm font-bold py-4`}>
              {feature}
            </p>
          );
        })}
      </div>
      <Button primary={!props.plan.isRecommended} />
    </div>
  );
};

export default Card;
