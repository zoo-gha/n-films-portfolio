import React from "react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Homepage = () => {
  const [text, count] = useTypewriter({
    words: [
      'VIDERGRAPHER’S',
      'PORTFOLIO',
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <section
      style={{
        backgroundImage: "url(/bg1.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
      className='items-center w-full justify-center lg:h-[80vh] md:h-[50vh] h-[60vh]'
    >
      <div className="relative flex flex-col top-[35%] text-white justify-center text-center items-center">
        <h4 className="font-medium my-6 tracking-[13px] sm:text-xl text-xl  text-center">FOR VIDEO EDITING</h4>

        <h1 className="pb-6">
          <span className="sm:text-2xl sm:font-bold md:text-4xl  font-extrabold text-4xl ">{text}</span>
          <Cursor cursorColor="#ffff" />
        </h1>
        <button className="text-white p-5 m-6 w-[200px] h-[50px] flex items-center justify-center drop-shadow-2xl rounded-lg transition duration-200 hover:bg-emerald-900  btn">
          <Link href="#about">SEE MORE ABOUT US</Link>
        </button>
      </div>
    </section>
  );
};
export default Homepage;
