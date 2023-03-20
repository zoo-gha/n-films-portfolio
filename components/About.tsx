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
