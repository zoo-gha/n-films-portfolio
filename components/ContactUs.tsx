import { Montserrat, Lato } from "next/font/google";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
});

const infoData = [
  {
    title: <BsFillTelephoneFill />,
    text: "06 61 44 73 26",
  },
  {
    title: <MdEmail />,
    text: "Admin@n-films.com",
  },
  {
    title: <MdLocationOn />,
    text: "HAY SAADIENNE 2 RUE 08BLOC C NR13, Guelmim",
  },
];

function ContactUs() {
  return (
    <div id="contact" className="w-full overflow-hidden py-[8rem] services">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 px-4 lg:px-0">
        <span
          className="text-black text-4xl font-black self-start
          relative before:absolute before:bottom-[-10px] before:left-0 before:w-full before:h-[4px] before:bg-[#01BE83]
          "
        >
          Contact Us
        </span>
        <h1
          className="text-black text-2xl font-medium max-w-[50rem] lg:max-w-none leading-8"
        >
        </h1>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:gap-10 lg:px-0 px-6 sm:gap-[4rem]">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 lg:text-left ">
          <div>
            <p className="text-lg md:text-xl text-black font-light p-6">
              Thank you to the people who shared their stories in our film. They
              trusted us and we are very grateful for their trust.
            </p>

            {infoData.map((info, index) => (
              <div key={index} className="p-2">
                <h6 className="text-lg md:text-xl text-[#01BE83] font-normal mt-4 inline-block mr-5">
                  {info.title}
                </h6>
                <p className="text-xl md:text-xl text-black font-semibold uppercase inline">
                  {info.text}
                </p>
              </div>
            ))}
            <div className="flex flex-cols gap-8 p-6">
              <FaFacebook className="rounded-full text-4xl cursor-pointer text-sky-600 hover:translate-x-1 hover:text-5xl"/>
              <FaInstagram className="text-4xl cursor-pointer hover:translate-x-1 text-fuchsia-600 hover:text-5xl"/>
              <FaYoutube className="text-4xl cursor-pointer hover:translate-x-1 text-rose-600 hover:text-5xl"/>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <div>
            <h1 className="text-lg md:text-xl text-gray-400 font-medium">
              Your Name
            </h1>
            <input
              type="text"
              className="text-[#121212] border-[#01BE83] border-2 w-full py-[0.7rem] md:py-[0.8rem] px-[1.5rem] h-[3rem] md:h-[3.5rem] font-bold outline-none text-xl md:text-2xl
                rounded-[1rem]
              "
            />
          </div>
          <div>
            <h1 className="text-lg md:text-xl text-gray-400 font-medium">
              Your Email
            </h1>
            <input
              type="text"
              className="text-[#121212] w-full py-[0.7rem] md:py-[0.8rem] px-[1.5rem] h-[3rem] md:h-[3.5rem] font-bold outline-none text-xl md:text-2xl
              border-[#01BE83] border-2 rounded-[1rem]"
            />
          </div>
          <div>
            <h1 className="text-lg md:text-xl text-gray-400 font-medium">
              Your Message
            </h1>
            <textarea className="text-[#121212] w-full py-[0.7rem] rounded-[1rem] border-[#01BE83] border-2 md:py-[0.8rem] px-[1.5rem] h-[8rem] md:h-[10rem] font-bold outline-none text-xl md:text-2xl" />
          </div>
          <button className="bg-[#01BE83] rounded-full text-white py-[0.7rem] md:py-[0.8rem] px-[3rem] md:px-[4rem] h-[3rem] md:h-[3.5rem] font-bold outline-none text-lg md:text-xl uppercase self-start">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
