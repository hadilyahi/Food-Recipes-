import React from "react";
import Card from "../component/Card";

const Side = () => {
  return (
    <div className="flex flex-col items-center justify-center">

    <h1 className="font-itim text-5xl mt-8">Side Food</h1>
    <div className="p-20  grid grid-cols-3 gap-5">
      <div className="cursor-pointer">
        <Card
          imageSrc={"/saladPoto.svg"}
          title={"Potato salad"}
          time={"30min"}
          type={"Bakery"}
          id={15}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/homos.svg"}
          title={"Hummus with tahini"}
          time={"1h & 30min"}
          type={"Dish"}
          id={16}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/saladFolfol.svg"}
          title={"Grilled vegetables"}
          time={"35min"}
          type={"Meal"}
          id={17}
        />
      </div>
      
      <div className="cursor-pointer">
        <Card
          imageSrc={"/Kolslo.svg"}
          title={"Coleslaw"}
          time={"45min"}
          type={"Sandwich"}
          id={18}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/pototo.svg"}
          title={"Fried potato"}
          time={"1h & 15min"}
          type={"Meal"}
          id={19}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/Rice.svg"}
          title={"Basmati rice"}
          time={"40min"}
          type={"Sandwich"}
          id={20}
        />
      </div>
     
    </div>
    </div>
  );
};

export default Side;
