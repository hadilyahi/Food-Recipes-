import React from "react";
import Image from "next/image";
function Empty() {
  return (
    <div className="flex flex-col items-center justify-center mx-96">
    <Image src={"/Empty.svg"} alt={""} width={400} height={200} />
  </div>
  
  );
}

export default Empty;
