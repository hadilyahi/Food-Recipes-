import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#878787] p-6 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col gap-2 p-4 text-center md:text-left w-full md:w-auto">
        <h1 className="font-acme text-2xl md:text-3xl">Contact Us</h1>
        <p className="text-sm md:text-base">Email: hadil17@gmail.com</p>
        <p className="text-sm md:text-base">Phone: 0666999999</p>
      </div>
      <div className="text-center my-4 md:my-0 w-full md:w-auto">
        <h1 className="font-sahitya text-2xl md:text-3xl">Thank you!</h1>
      </div>
      <div className="flex gap-2 md:gap-4 mt-4 md:mt-0 w-full md:w-auto justify-center">
        <div>
          <Link href={"https://www.facebook.com/profile.php?id=100087885432772"} target="_blank">
            <Image src="/fb.svg" alt="Facebook" width={25} height={25} />
          </Link>
        </div>
        <div>
          <Link href={"https://www.instagram.com/hadil.yahi/"} target="_blank">
            <Image src="/insta.svg" alt="Instagram" width={25} height={25} />
          </Link>
        </div>
        <div>
          <Link href={"https://www.linkedin.com/in/hadil-yahi-0487912a6/"} target="_blank">
            <Image src="/linkd.svg" alt="LinkedIn" width={25} height={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
