const travaux_data = [
    {
        id:1,
        img : '/a1.jpg',
        name: 'Application of these application',
        totalLike : 500,
        category : 'Application'
    },
    {
        id: 2,
        img : '/a2.jpg',
        name: 'Application of these application',
        totalLike : 400,
        category : 'Application'
    },
    {
        id: 3,
        img : '/a3.jpg',
        name: 'Application of these application',
        totalLike : 240,
        category : 'Application'
    },
    {
        id:4,
        img : '/a4.jpg',
        name: 'Application of these application',
        totalLike : 100,
        category : 'Application'
    },
    {
        id:5,
        img : '/a5.jpg',
        name: 'Application of these application',
        totalLike : 100,
        category : 'Application'
    },
    {
        id:6,
        img : '/a6.jpg',
        name: 'Application of these application',
        totalLike : 100,
        category : 'Application'
    }
]
export default function Portfolio() {
    return (
        <section className="font-mont text-black py-6">
            <div className="text-center py-8">
                <h5 className="cursor-pointer"> Portfolio </h5>
                <h1 className="text-2xl w-96 mx-auto leading-normal font-bold mb-12">Visit Our Portfolio and Keep Your Feedback</h1>
            </div>

            <div className="flex max-w-5xl mx-auto items-center justify-center grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 ">

                {travaux_data.map((val:any)=>{
                    return(
                        <div key={val.id} className="bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden cursor-pointer  hover:text-emerald-400">
                            <img className="w-full h-[200px] object-cover cursor-pointer hover:scale-125" src={val.img} alt="" />
                            <div className="p-5 flex-col gap-3 cursor-pointer">
                                {/*----app static-----*/}
                                <div className="flex items-center gap-2 justify-between">
                                    <span className="px-3 py-1 pb-1 text-xs">{val.category}</span>
                                    <span className="px-3 py-1 pb-1 text-xs">{val.totalLike}</span>
                                </div>
                                {/*---app title----- */}
                                <h2 className="font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap" title="app">
                                    {val.name}
                                </h2>
                            </div>
                        </div>
                    )
                })}
                

            </div>

        </section>
    )
}