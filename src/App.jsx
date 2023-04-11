import React from "react";
import Card from "./components/Card";
import plans from "./content/content";

function App() {
  return (
    <div className="App mx-6">
      <h1 className="text-grayishBlue text-3xl text-center font-bold my-12">
        Our Pricing
      </h1>
      <div className="grid gap-8">
        {plans.map((plan) => {
          return <Card key={plan.id} plan={plan} />;
        })}
      </div>
    </div>
  );
}

export default App;
