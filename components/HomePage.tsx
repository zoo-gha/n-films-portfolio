import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <section
      style={{
        backgroundImage: "url(/bg1.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div className="containers ">
        <h4 className="font-bold mb-5">FOR VIDEO EDITING</h4>
        <p>
          VIDERGRAPHER’S <br />
          PORTFOLIO
        </p>
        <button className="btn">
          <Link href="/ABOUTUS">SEE MORE ABOUT US</Link>
        </button>
      </div>
      <div className="image">
        <Image src="/pic.jfif" alt="pic" width={250} height={250} />
      </div>
    </section>
  );
};
export default Homepage;
