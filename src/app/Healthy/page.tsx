import React from "react";
import Card from "../component/Card";

const Sweets = () => {
  return (
    <div className="flex flex-col items-center justify-center">

    <h1 className="font-itim text-5xl mt-8">Healthy Food</h1>
    <div className="p-4 sm:p-10 md:p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      
      <div className="cursor-pointer">
        <Card
          imageSrc={"/saladKinwa.svg"}
          title={"Quinoa Salad"}
          time={"1h & 30min"}
          type={"Dish"}
          id={26}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/dajaj.svg"}
          title={"Grilled Chicken Breasts"}
          time={"35min"}
          type={"Meal"}
          id={27}
        />
      </div>
      
      <div className="cursor-pointer">
        <Card
          imageSrc={"/sakmon.svg"}
          title={"Herb-Grilled Salmon"}
          time={"45min"}
          type={"Sandwich"}
          id={28}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/brokli.svg"}
          title={"Steamed Broccoli"}
          time={"1h & 15min"}
          type={"Meal"}
          id={29}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/fawakih.svg"}
          title={"Fresh Fruit Salad"}
          time={"1h & 15min"}
          type={"Meal"}
          id={30}
        />
      </div>
      <div className="cursor-pointer">
        <Card
          imageSrc={"/Adda.svg"}
          title={"Cooked Lentils"}
          time={"1h & 15min"}
          type={"Meal"}
          id={31}
        />
      </div>
      
     
    </div>
    </div>
  );
};

export default Sweets;
