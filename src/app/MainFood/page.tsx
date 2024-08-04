import React from "react";
import Card from "../component/Card";

const MainFood = () => {
  return (
    <div className="p-20  grid grid-cols-3 gap-5">
      <div className="cursor-pointer">
        <Card
          imageSrc={"/pizza.svg"}
          title={"Pizza"}
          time={"30min"}
          type={"Snack"}
          id={2}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/kabsa.svg"}
          title={"kabsa"}
          time={"30min"}
          type={"Snack"}
          id={1}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/fish.svg"}
          title={"Fish"}
          time={"30min"}
          type={"Snack"}
          id={3}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/Shawarma.svg"}
          title={"shawarma"}
          time={"30min"}
          type={"Snack"}
          id={4}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/Burger.svg"}
          title={"burger"}
          time={"30min"}
          type={"Snack"}
          id={5}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/Sushi.svg"}
          title={"sushi"}
          time={"30min"}
          type={"Snack"}
          id={6}
        />
      </div>
    </div>
  );
};

export default MainFood;
