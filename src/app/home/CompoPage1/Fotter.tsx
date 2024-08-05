import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#878787] mt-32 p-6 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col gap-4 p-4 text-center md:text-left">
        <h1 className="font-acme text-3xl md:text-4xl">Contact Us</h1>
        <p>Email: hadil17@gmail.com</p>
        <p>Phone: 0666999999</p>
      </div>
      <div className="text-center my-4 md:my-0">
        <h1 className="font-sahitya text-3xl md:text-5xl">Thank you!</h1>
      </div>
      <div className="flex gap-4 md:gap-8 mt-4 md:mt-0">
        <div>
          <Link href={"https://www.facebook.com/profile.php?id=100087885432772"} target="_blank">
            <Image src="/fb.svg" alt="Facebook" width={30} height={30} />
          </Link>
        </div>
        <div>
          <Link href={"https://www.instagram.com/hadil.yahi/"} target="_blank">
            <Image src="/insta.svg" alt="Instagram" width={30} height={30} />
          </Link>
        </div>
        <div>
          <Link href={"https://www.linkedin.com/in/hadil-yahi-0487912a6/"} target="_blank">
            <Image src="/linkd.svg" alt="LinkedIn" width={30} height={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
