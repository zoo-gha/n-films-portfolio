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
    <section className="font-mont text-black py-6 -z-1">
      <div className="text-center py-8">
        <h5 className="cursor-pointer"> Portfolio </h5>
        <h1 className="text-2xl w-96 mx-auto leading-normal font-bold mb-12">
          Visit Our Portfolio and Keep Your Feedback
        </h1>
      </div>
      <div className="max-w-5xl mx-auto items-center justify-center grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 -z-1">
        {travaux_data.map((travaux) => (
          <ModalsPortfolio props={travaux} />
        ))}
      </div>
    </section>
  );
}
