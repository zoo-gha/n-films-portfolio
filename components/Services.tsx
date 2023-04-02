import { Lato, Montserrat } from "next/font/google";

import {
  IconBounceRight,
  IconBrandMailgun,
  IconChairDirector,
  IconDisc,
  IconDrone,
  IconMicrophone2,
  IconMovie,
  IconSchool,
  IconSpeakerphone,
  IconTicket,
  IconVideo,
  IconWaveSine,
} from "@tabler/icons-react";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

const services = [
  {
    title: "FILM CORPORATE",
    description:
      "We produce cinematic documentaries and television, and even institutional films",
    icon: <IconChairDirector className="service-icon" size={60} />,
  },
  {
    title: "COMMERCIAL",
    description:
      "Broadcast an advertisement on television or on channels of video platforms, and add a voice-over, a skin and a packshot (usually created in 3D).  TV broadcasting standards and PAD delivery are provided by our team.",
    icon: <IconSpeakerphone className="service-icon" size={60} />,
  },
  {
    title: "MOTION DESIGN",
    icon: <IconBounceRight className="service-icon" size={60} />,
    description:
      "Animation technique that adapts perfectly to the corporate film, it offers total creative freedom, personalized and impactful narration, and cost flexibility.",
  },
  {
    title: "PRODUCT VIDEO",
    icon: <IconVideo className="service-icon" size={60} />,
    description:
      "Introduce a new product, make it demonstration, expose its functionalities, its improvements and its use. The film produced can be broadcast on the internet such as during a trade show or on location of sale.",
  },
  {
    title: "EVENT VIDEO",
    icon: <IconTicket className="service-icon" size={60} />,
    description:
      "Animate screens during an event, a discount prizes or a show. Filming during a show, of a debate, a conference, and continue to bring to life the event online.",
  },
  {
    title: "INTERVIEW / REPORTAGE",
    icon: <IconMicrophone2 className="service-icon" size={60} />,
    description:
      "Questioning its customers, its employees, highlighting their words. Reporting on a company or an event, to deal with a subject defined with precision and discernment.",
  },
  {
    title: "TUTORIEL / E-LEARNING",
    icon: <IconSchool className="service-icon" size={60} />,
    description:
      "Exposer un produit en faisant sa démonstration, le tutoriel vidéo, format star de YouTube, s’adapte à toutes les marchandises et toutes les bourses. Lavidéoe-learning,plus souventutiliséeen interne, permet de former son personnel ou ses utilisateurs.",
  },
  {
    title: "LIVE EVENT",
    icon: <IconBrandMailgun className="service-icon" size={60} />,
    description:
      "Filming with multi-cameras and broadcasting a live event on site or live on a website, web TV or social networks. THE adaptive streaming enables better user experience",
  },
  {
    title: "DRONE",
    icon: <IconDrone className="service-icon" size={60} />,
    description:
      "Aerial shots by drone, techniques of safe flight. In photos or video, low altitude,this filming technique,integrates and enriches any type of film.",
  },
  {
    title: "FICTION",
    icon: <IconMovie className="service-icon" size={60} />,
    description:
      "Surprise its customers, integrate its collaborators in its communication, and why not, reveal talents!? Make a fictional film, or incorporate scenes acted to a corporate film, a daring strategy for a winning solution.",
  },
  {
    title: "MAKING OF",
    icon: <IconDisc className="service-icon" size={60} />,
    description:
      "Telling behind the scenes of a shoot. Lemaking of is a good way to build a story around a film, and to prolong its existence by being broadcast in extract or trailer on the networks social. It is part of a strategy of global communications.",
  },
  {
    title: "CLIP",
    icon: <IconWaveSine className="service-icon" size={60} />,
    description:
      "Shooting or clip made from visuals provided by the customer. Proposal and integration of power-free music broadcast the video everywhere. The clip is a solution suitable for all budgets, and for broadcasting in loop.",
  },
];

function Services() {
  return (
    <div id="services" className="bg-[#ffffff] w-full h-full overflow-hidden py-12">
    <div className="bg-[#ffffff] w-full h-full overflow-hidden py-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 px-4 lg:px-0">
        <span
          className="text-black text-4xl font-black self-start
          relative before:absolute before:bottom-[-10px] before:left-0 before:w-full before:h-[4px] before:bg-[#01BE83]
          "
        >
          Our Services
        </span>
        <h1
          className={`${montserrat.className} text-black text-2xl font-medium max-w-[50rem] lg:max-w-none leading-8`}
        >
          This is My Expertise, The Services I'll Provide My Clients
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="card flex p-4 flex-col justify-between gap-2
              hover:bg-opacity-40 transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer
              "
            >
              {service.icon}
              <h1
                className={`text-xl font-black text-black ${lato.className}
                  `}
              >
                {service.title}
              </h1>
              <p
                className={`text-black text-base leading-[20px] ${montserrat.className}`}
              >
                {service.description}
              </p>
              <h1
                className="text-[#000000] text-base font-semibold mt-4 cursor-pointer self-start
                relative before:absolute before:bottom-0 before:left-0 before:w-[0px] before:h-[2px] before:bg-[#000000] before:transition-all before:duration-500  hover:before:w-[110%]
              "
              >
                READ MORE
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

