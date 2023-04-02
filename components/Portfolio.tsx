import { PortfolioType } from "@/typing";
import React from "react";
import ModalsPortfolio from "./ModalsPortfolio";

type Props = {
  portfolios : PortfolioType[];
}

export default function Portfolio({portfolios} : Props) {
  return (
    <section id="portfolio" className="font-mont text-black w-full h-full overflow-hidden py-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 px-4 lg:px-0">
      <span
          className="text-black text-4xl font-black self-start
          relative before:absolute before:bottom-[-10px] before:left-0 before:w-full before:h-[4px] before:bg-[#01BE83]
          "
        >
          Portfolio
        </span>
        <h1
          className="text-black text-2xl font-medium max-w-[50rem] lg:max-w-none leading-8 pb-4"
        >
          Visit Our Portfolio and Keep Your Feedback
        </h1>
      </div>
      <div className="max-w-5xl mx-auto items-center justify-center grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 -z-1">
        {portfolios.map((travaux) => (
          <ModalsPortfolio port={travaux} key={travaux._id}/>
          
        ))}
      </div>
    </section>
  );
}
