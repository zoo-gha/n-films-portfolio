
export default function About() {
    return (
        <section className="container mx-auto py-10 px-5 font-mont">
            <div className="text-center py-8">
                <h5 className="cursor-pointer"> About Us </h5>
                <h1 className="text-2xl w-96 mx-auto leading-normal font-bold mb-12">This is some information about us</h1>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                <div className="block items-center mx-auto lg:w-[400px] w-[300px]">
                    <h3 className="py-4 text-slate-800">NFILMS is a production company audiovisual of Guelmim specialized in production of films and reports, films institutional and drone images. Our Values: rigour, adaptability, transparency and creativity. 
                    Our mission is to create engaging and bold content that looks like you. We put our Skills and our experience at your provision to improve your reputation, your media, your entertainment, differentiate yourself crowds and more.</h3>

                    <div className="columns-2 py-4 cursor-pointer">
                        <div className="flex items-center py-2">
                            <img src="/pic.jfif" className="w-[40px] h-[40px] rounded-full"/>
                            <div className="leading-4 px-4 hover:text-xl">
                                <strong className="block">Rigeur</strong>
                                <span>Technical job</span>
                            </div>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="/pic.jfif" className="w-[40px] h-[40px] rounded-full"/>
                            <div className="leading-4 px-4 hover:text-xl">
                                <strong className="block">Rigeur</strong>
                                <span>Technical job</span>
                            </div>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="/pic.jfif" className="w-[40px] h-[40px] rounded-full"/>
                            <div className="leading-4 px-4 hover:text-xl">
                                <strong className="block">Rigeur</strong>
                                <span>Technical job</span>
                            </div>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="/pic.jfif" className="w-[40px] h-[40px] rounded-full"/>
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
                <div className="items-center text-center mx-auto">
                        <img className="w-[300px] drop-shadow-2xl rounded-lg  object-cover " src="/pic.jfif" alt="us" />
                </div>
            </div>
        </section>
    )
}