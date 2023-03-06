const testimonials_data = [
    {
        id : 1,
        name : "John Doe",
        test : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img : '/pic.jfif'
    },
    {
        id : 2,
        name : "Marry Queen",
        test : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img : '/pic2.jpg'
    },
    {
        id : 3,
        name : "John Doe",
        test : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img : '/pic3.jpg'
    }
]


export default function Testimonials() {
    return (
        <section className="font-mont text-black/50">

            <div className="text-center py-8">

                <h5 className="cursor-pointer"> Testimonials </h5>
                <h1 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">Read What Others Have to Say</h1>

                <div className="flex max-w-5xl mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 group">

                    {testimonials_data.map((val:any) =>{
                        return(
                            <div key={val.id} className="bg-emerald-900 mx-auto duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
                                <img src={val.img} alt="" className="h-20  rounded-full w-20 mx-auto"  />
                                <h4 className="uppercase text-xl font-bold text-white">{val.name}</h4>
                                <p className="text-white/50 text-sm leading-7 my-3 font-light"> {val.test} </p>
                                <button className="bg-emerald-200 text-black/50 py-2.5 px-8 rounded-full hover:bg-emerald-300 hover:text-white"> Get in Touch</button>
                            </div>
                        )
                    })}
                    
                </div>

            </div>

        </section>
    )
}