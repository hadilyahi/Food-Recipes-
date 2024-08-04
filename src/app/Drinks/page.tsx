import React from "react";
import Card from "../component/Card";

const Sweets = () => {
  return (
    <div className="flex flex-col items-center justify-center">

    <h1 className="font-itim text-5xl mt-8">Main Food</h1>
    <div className="p-20  grid grid-cols-3 gap-5">
      
      <div className="cursor-pointer">
        <Card
          imageSrc={"/Lemon.svg"}
          title={"pure lemon juice"}
          time={"1h & 30min"}
          type={"Dish"}
          id={21}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/jus.svg"}
          title={"Fruit smoothie"}
          time={"35min"}
          type={"Meal"}
          id={22}
        />
      </div>
      
      <div className="cursor-pointer">
        <Card
          imageSrc={"/mokhito.svg"}
          title={"Mint Mojito"}
          time={"45min"}
          type={"Sandwich"}
          id={23}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/jusTofah.svg"}
          title={"apple cider and cinnamon"}
          time={"1h & 15min"}
          type={"Meal"}
          id={24}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/jusMango.svg"}
          title={"Mango Juice"}
          time={"1h & 15min"}
          type={"Meal"}
          id={25}
        />
      </div>
      
     
    </div>
    </div>
  );
};

export default Sweets;
