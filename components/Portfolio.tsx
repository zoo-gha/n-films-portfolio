const travaux_data = [
  {
    id: 1,
    img: "/a1.jpg",
    name: "Forum of elected women.",
    date: "17/03/2023",
    description:
      "Forum of elected women in the region of Guelmim and Adnoun first edition. ",
    link : 'https://www.youtube.com/watch?v=b1FGsrznqog',
  },
  {
    id: 2,
    img: "/a2.jpg",
    name: "spot NFILMS 2 the 5 th video suit",
    date: "18/12/2022",
    description:
      "Spot NFILMS 2 suite A report about the inhabitants of the Sahara, in the region of Guelmim and Adnoun first edition. ",
    link : 'https://www.youtube.com/watch?v=an9CuIYSiF4',
  },
  {
    id: 3,
    img: "/a3.jpg",
    name: "spot NFILMS 1 the 4 th video",
    date: "13/12/2022",
    description:
    "Spot NFILMS 2 suite A report about the inhabitants of the Sahara, in the region of Guelmim and Adnoun first edition.",
    link : 'https://www.youtube.com/watch?v=USm_F0TeCiM',
  },
  {
    id: 4,
    img: "/a4.jpg",
    name: "MD Talks guelmim renewable energies",
    date: "12/11/2022",
    description:
      "MD Talks guelmim renewable energies, a report on the meeting about renewable energies.",
    link : 'https://www.youtube.com/watch?v=hGl-ChVOiBE',
  },
  {
    id: 5,
    img: "/a5.jpg",
    name: "MCISE guelmim wad noun _____________",
    date: "12/10/2022",
    description:
      "MCISE guelmim ouad noun, a report about the theater in the region ouad noun and also to have a small review of our work.",
    link : 'https://www.youtube.com/watch?v=WpNsG5IJN7w',
  },
  {
    id: 6,
    img: "/a6.jpg",
    name: "this is assa zag هذه أسا الزاك ____",
    date: "02/11/2022",
    description:
      "This is assa zag هذه أسا الزاك a report about assa zag and their habits and also their traditions",
    link : 'https://www.youtube.com/watch?v=HgaZYPv4-hA',
  },
];

import ModalsPortfolio from "./ModalsPortfolio";
export default function Portfolio() {
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
        {travaux_data.map((travaux) => (
          <ModalsPortfolio props={travaux} key={travaux.id}/>
        ))}
      </div>
    </section>
  );
}
