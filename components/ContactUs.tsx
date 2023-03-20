import { Montserrat, Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
});

const infoData = [
  {
    title: "PHONE",
    text: "06 61 44 73 26",
  },
  {
    title: "EMAIL",
    text: "Admin@n-films.com",
  },
  {
    title: "ADDRESS",
    text: "HAY SAADIENNE 2 RUE 08BLOC C NR13, Guelmim",
  },
];

function ContactUs() {
  return (
    <div className="w-full overflow-hidden py-[8rem] services">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:gap-10 px-6 sm:gap-[4rem]">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl text-black font-bold">
            Contact Us
          </h1>
          <div>
            <p className="text-lg md:text-xl text-black font-light">
              Thank you to the people who shared their stories in our film. They
              trusted us and we are very grateful for their trust.
            </p>

            {infoData.map((info, index) => (
              <div key={index}>
                <h6 className="text-lg md:text-xl text-[#01BE83] font-normal mt-4">
                  {info.title}
                </h6>
                <p className="text-xl md:text-2xl text-black font-semibold uppercase">
                  {info.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <div>
            <h1 className="text-lg md:text-xl text-black font-medium">
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
            <h1 className="text-lg md:text-xl text-black font-medium">
              Your Email
            </h1>
            <input
              type="text"
              className="text-[#121212] w-full py-[0.7rem] md:py-[0.8rem] px-[1.5rem] h-[3rem] md:h-[3.5rem] font-bold outline-none text-xl md:text-2xl
              border-[#01BE83] border-2 rounded-[1rem]"
            />
          </div>
          <div>
            <h1 className="text-lg md:text-xl text-black font-medium">
              Your Message
            </h1>
            <textarea className="text-[#121212] w-full py-[0.7rem] rounded-[1rem] border-[#01BE83] border-2 md:py-[0.8rem] px-[1.5rem] h-[8rem] md:h-[10rem] font-bold outline-none text-xl md:text-2xl" />
          </div>
          <button className="bg-[#01BE83] text-[#121212] py-[0.7rem] md:py-[0.8rem] px-[3rem] md:px-[4rem] h-[3rem] md:h-[3.5rem] font-bold outline-none text-lg md:text-xl uppercase self-start">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
