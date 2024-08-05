import React from "react";
import Card from "../component/Card";

const Sweets = () => {
  return (
    <div className="flex flex-col items-center justify-center">

    <h1 className="font-itim text-5xl mt-8">Sweets</h1>
    <div className="p-4 sm:p-10 md:p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <div className="cursor-pointer">
        <Card
          imageSrc={"/chocoKek.svg"}
          title={"Chocolate cake"}
          time={"30min"}
          type={"Bakery"}
          id={9}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/prawniz.svg"}
          title={"Chocolate brownies"}
          time={"1h & 30min"}
          type={"Dish"}
          id={10}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/mahalabiya.svg"}
          title={"Custard"}
          time={"35min"}
          type={"Meal"}
          id={11}
        />
      </div>
      
      <div className="cursor-pointer">
        <Card
          imageSrc={"/cookiz.svg"}
          title={"Chocolate cookies"}
          time={"45min"}
          type={"Sandwich"}
          id={12}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/icecreem.svg"}
          title={"Fruit ice cream"}
          time={"1h & 15min"}
          type={"Meal"}
          id={13}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/ktayaf.svg"}
          title={"Qatayef"}
          time={"40min"}
          type={"Sandwich"}
          id={14}
        />
      </div>
     
    </div>
    </div>
  );
};

export default Sweets;
