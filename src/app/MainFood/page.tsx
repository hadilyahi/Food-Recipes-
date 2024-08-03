import React from "react";
import Card from "../component/Card";

const MainFood = () => {
  return (
    <div className="p-20  grid grid-cols-3 gap-5">
      <div className="cursor-pointer" >

      <Card
        imageSrc={"/pizza.svg"}
        title={"pizza"}
        time={"30min"}
        type={"Snack"}
        
      />
      </div>
      <div className="cursor-pointer" >

      <Card
        imageSrc={"/kabsa.svg"}
        title={"kabsa"}
        time={"30min"}
        type={"Snack"}
        
      />
      </div>
      <div className="cursor-pointer" >

      <Card
        imageSrc={"/fish.svg"}
        title={"fish"}
        time={"30min"}
        type={"Snack"}
        
      />
      </div>
      <div className="cursor-pointer" >

      <Card
        imageSrc={"/shawarma.svg"}
        title={"shawarma"}
        time={"30min"}
        type={"Snack"}
        
      />
      </div>
      <div className="cursor-pointer" >

      <Card
        imageSrc={"/burger.svg"}
        title={"burger"}
        time={"30min"}
        type={"Snack"}
        
      />
      </div>
      <div className="cursor-pointer" >

      <Card
        imageSrc={"/sushi.svg"}
        title={"sushi"}
        time={"30min"}
        type={"Snack"}
        
      />

      </div>
      
      
    </div>
  );
};

export default MainFood;
