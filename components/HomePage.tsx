import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <section>
      <div className="h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center">
        <Image alt="background" src="/bg1.jpg" fill />
      </div>

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
