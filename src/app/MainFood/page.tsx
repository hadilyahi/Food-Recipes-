import React from "react";
import Card from "../component/Card";

const MainFood = () => {
  return (
    <div className="flex flex-col items-center justify-center">

      <h1 className="font-itim text-5xl mt-8">Main Food</h1>
      <div className="p-4 sm:p-10 md:p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="cursor-pointer">
          <Card
            imageSrc={"/pizza.svg"}
            title={"Pizza"}
            time={"30min"}
            type={"Bakery"}
            id={1}
          />
        </div>
        <div className="cursor-pointer">
          <Card
            imageSrc={"/kabsa.svg"}
            title={"Kabsa"}
            time={"1h & 30min"}
            type={"Dish"}
            id={2}
          />
        </div>
        <div className="cursor-pointer">
          <Card
            imageSrc={"/fish.svg"}
            title={"Fish"}
            time={"35min"}
            type={"Meal"}
            id={3}
          />
        </div>
        <div className="cursor-pointer">
          <Card
            imageSrc={"/shawarma.svg"}
            title={"Shawarma"}
            time={"30min"}
            type={"Sandwich"}
            id={4}
          />
        </div>
        <div className="cursor-pointer">
          <Card
            imageSrc={"/burger.svg"}
            title={"Burger"}
            time={"45min"}
            type={"Sandwich"}
            id={5}
          />
        </div>
        <div className="cursor-pointer">
          <Card
            imageSrc={"/sushi.svg"}
            title={"Sushi"}
            time={"1h & 15min"}
            type={"Meal"}
            id={6}
          />
        </div>
        <div className="cursor-pointer">
          <Card
            imageSrc={"/tacos.svg"}
            title={"Tacos"}
            time={"40min"}
            type={"Sandwich"}
            id={7}
          />
        </div>
        <div className="cursor-pointer">
          <Card
            imageSrc={"/robyan.svg"}
            title={"Robyan"}
            time={"1h"}
            type={"Oyster"}
            id={8}
          />
        </div>
      </div>
    </div>
  );
};

export default MainFood;
