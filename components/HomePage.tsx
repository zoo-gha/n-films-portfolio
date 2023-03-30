import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


const Homepage = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
        window.scrollY > 0 ? setSticky(true) : setSticky(false)
    })
}, []);
  return (
    <section id="home">
      <div className="h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center ">
        <Image alt="background" src="/bg1.jpg" fill />
      </div>
      <div>
        <div className="lg:absolute lg:left-[10%] lg:top-[40%] text-white tracking-tighter md:absolute md:left-[5%] md:top-[30%] sm:absolute">
          <h4 className="font-bold mb-5 text-3xl">FOR VIDEO EDITING</h4>
          <p className="text-6xl leading-14 font-bold ">
            VIDERGRAPHER’S <br />
            PORTFOLIO
          </p>
          <button className="btn">
            <Link href="/ABOUTUS" className="text-lg">SEE MORE ABOUT US</Link>
          </button>
        </div>
        <div className="absolute top-[30%] left-[70%]">
          <Image className="rounded-lg" src="/pic.jfif" alt="pic" width={250} height={250} />
        </div>
      </div>
      
    </section>
  );
};
export default Homepage;
