
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function About() {
    return (
        <section id="about" className="container mx-auto py-10 px-4 font-mont ">
            <div className="max-w-6xl mx-auto flex flex-col gap-10 px-4 lg:px-0">
                <span
                    className="text-black text-4xl font-black self-start
                    relative before:absolute before:bottom-[-10px] before:left-0 before:w-full before:h-[4px] before:bg-[#01BE83]
                    "
                    >
                    About Us
                </span>
                <h1
                    className="text-black text-2xl font-medium max-w-[50rem] lg:max-w-none leading-8"
                    >
                    This is some information about us
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] max-w-6xl mx-auto px-4 lg:px-0">
                <div className="block items-center justify-center mx-8 lg:w-[400px] w-[300px]">
                    <h3 className="py-4 text-slate-900">NFILMS is a production company audiovisual of Guelmim specialized in production of films and reports, films institutional and drone images. Our Values: rigour, adaptability, transparency and creativity. 
                    Our mission is to create engaging and bold content that looks like you. We put our Skills and our experience at your provision to improve your reputation, your media, your entertainment, differentiate yourself crowds and more.</h3>

                    <div className="columns-2 py-4 cursor-pointer">
                        <div className="flex items-center py-2">
                            <img src="/rigueur.png" className="w-[40px] h-[40px] rounded-full"/>
                            <div className="leading-4 px-4">
                                <strong className="block hover:text-xl text-emerald-500">Rigour</strong>
                                <span className="text-sm text-gray-500">Our First Value</span>
                            </div>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="/adaptability.jpg" className="w-[40px] h-[40px] rounded-full"/>
                            <div className="leading-4 px-4 ">
                                <strong className="block hover:text-xl text-emerald-500">adaptability</strong>
                                <span className="text-sm text-gray-500">Our Second Value</span>
                            </div>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="/transparence.jfif" className="w-[40px] h-[40px] rounded-full object-contain"/>
                            <div className="leading-4 px-4 ">
                                <strong className="block hover:text-xl text-emerald-500">Transparency</strong>
                                <span className="text-sm text-gray-500">Our Third Value</span>
                            </div>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="/créativity.jpg" className="w-[40px] h-[40px] rounded-full"/>
                            <div className="leading-4 px-4 hover:text-xl">
                                <strong className="block hover:text-xl text-emerald-500">Creativity</strong>
                                <span className="text-sm text-gray-500">Our Fourth Value</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center items-center cursor-pointer">
                        <Link href={'#services'}>
                            <button className="float-left bg-teal-500 px-6 py-2 text-white rounded-full  hover:text-xl">
                                Explore More
                            </button>
                        </Link>
                    </div>
                </div>
                
                    <div className="sm:[300px] md:w-[350px] lg:w-[380px] h-[420px] bg-transparent cursor-pointer group perspertive px-4">
                        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                            <div className="absolute backface-hidden w-full h-full">
                                <img src="/a6.jpg" className="w-full h-full rounded-lg" />
                            </div>
                            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-200 overflow-hidden rounded-lg">
                                <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                                    <h1 className="text-xl text-emerald-600">NOUREDDINE AGHARAS</h1>
                                    <p className="my-2 text-md text-gray-800">Manager</p>
                                    <p className="text-md text-gray-700">
                                        Target? Means of dissemination? Expected reaction
                                        ? These are all questions that we are asking ourselves.
                                        Let's pose to make your film the most unique
                                        possible. We accompany you from A to Z
                                        to offer your users content
                                        Quality audiovisual adapted to your
                                        communication. 
                                    </p>
                                    <div className="flex gap-3 px-6 py-2 text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                                    <div className="flex flex-cols gap-6 text-xl">
                                        <FaFacebook className="rounded-full text-2xl cursor-pointer hover:text-sky-600 text-gray-800 hover:translate-x-1 hover:text-3xl"/>
                                        <FaInstagram className="text-2xl cursor-pointer hover:translate-x-1 text-gray-800 hover:text-fuchsia-600 hover:text-3xl"/>
                                        <FaTwitter className="text-2xl cursor-pointer hover:translate-x-1 text-gray-800 hover:text-sky-600 hover:text-3xl"/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

=======
export default function About() {
  return (
    <section className="mx-auto  max-w-6xl">
      <div>
        <h1 className="text-4xl font-extrabold cursor-pointer"> About Us </h1>
        <div className="bg-[#01BE83] h-[3px] w-[160px]"></div>
        <p className="py-2 text-slate-600">This is some information about us</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div className="block items-center justify-center lg:w-[400px] w-[300px]">
          <h3 className="text-slate-900">
            NFILMS is a production company audiovisual of Guelmim specialized in
            production of films and reports, films institutional and drone
            images. Our Values: rigour, adaptability, transparency and
            creativity. Our mission is to create engaging and bold content that
            looks like you. We put our Skills and our experience at your
            provision to improve your reputation, your media, your
            entertainment, differentiate yourself crowds and more.
          </h3>

          <div className="columns-2 py-4 cursor-pointer">
            <div className="flex items-center py-2">
              <img src="/pic.jfif" className="w-[40px] h-[40px] rounded-full" />
              <div className="leading-4 px-4 hover:text-xl">
                <strong className="block">Rigeur</strong>
                <span>Technical job</span>
              </div>
            </div>
            <div className="flex items-center py-2">
              <img src="/pic.jfif" className="w-[40px] h-[40px] rounded-full" />
              <div className="leading-4 px-4 hover:text-xl">
                <strong className="block">Rigeur</strong>
                <span>Technical job</span>
              </div>
            </div>
            <div className="flex items-center py-2">
              <img src="/pic.jfif" className="w-[40px] h-[40px] rounded-full" />
              <div className="leading-4 px-4 hover:text-xl">
                <strong className="block">Rigeur</strong>
                <span>Technical job</span>
              </div>
            </div>
            <div className="flex items-center py-2">
              <img src="/pic.jfif" className="w-[40px] h-[40px] rounded-full" />
              <div className="leading-4 px-4 hover:text-xl">
                <strong className="block">Rigeur</strong>
                <span>Technical job</span>
              </div>
>>>>>>> main
            </div>
          </div>
          <div className="text-center items-center cursor-pointer">
            <button className="float-left bg-teal-500 px-6 py-2 text-white rounded-full  hover:text-xl">
              Explore More
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="before:content-[''] before:absolute before:bg-[conic-gradient(#04b0ee_20deg,transparent_120deg)] before:w-[400px] before:h-[500px] before:top-[-15%] before:left-[-25%] before:animate-fullSpin relative w-[270px] h-[400px] bg-emerald-900 rounded-xl overflow-hidden">
            <img
              className="w-[260px] h-[390px] before:left-[25%] drop-shadow-2xl rounded-lg  object-cover "
              src="/pic.jfif"
              alt="us"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
