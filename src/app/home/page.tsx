import React from "react";
import Section from "./CompoPage1/Section1";
import Section2 from "./CompoPage1/Section2";
import { Layout } from "lucide-react";

function Page() {
  return (
    <div>
      <Section />
      <hr className="mb-8 border-2" />
      <Section2 />
    </div>
  );
}

export default Page;
