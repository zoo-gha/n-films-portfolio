const travaux_data = [
  {
    id: 1,
    img: "/a1.jpg",
    name: "Application of these application",
    date: "12/01/2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: "/a2.jpg",
    name: "Application of these application",
    date: "12/03/2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: "/a3.jpg",
    name: "Application of these application",
    date: "12/08/2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    img: "/a4.jpg",
    name: "Application of these application",
    date: "12/09/2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    img: "/a5.jpg",
    name: "Application of these application",
    date: "12/10/2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    img: "/a6.jpg",
    name: "Application of these application",
    date: "12/12/2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

import ModalsPortfolio from "./ModalsPortfolio";
export default function Portfolio() {
  return (
    <section className="font-mont text-black w-full h-full overflow-hidden py-12">
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
        {travaux_data.map((travaux) => (
          <ModalsPortfolio props={travaux} key={travaux.id}/>
        ))}
      </div>
    </section>
  );
}
