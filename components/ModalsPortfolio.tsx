const travaux_data = [
    {
        id:1,
        img : '/a1.jpg',
        name: 'Application of these application',
        date : '12/01/2022',
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        img : '/a2.jpg',
        name: 'Application of these application',
        date : '12/03/2022',
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        img : '/a3.jpg',
        name: 'Application of these application',
        date : '12/08/2022',
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id:4,
        img : '/a4.jpg',
        name: 'Application of these application',
        date : '12/09/2022',
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id:5,
        img : '/a5.jpg',
        name: 'Application of these application',
        date : '12/10/2022',
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id:6,
        img : '/a6.jpg',
        name: 'Application of these application',
        date : '12/12/2022',
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

export default function ModalsPortfolio(props:any) {
    const {open, id, onClose} = props;
    const port = travaux_data.filter((val) => val.id == id);
    if (!open) return null
    return (
        <>
        {port.map((val : any,index : number)=>{
            return(
                <div key={index} className="fixed w-[100%] h-[100%] shadow-2xl rounded-xl">
                    <div key={val.id} className="max-w-2xl w-[100%] fixed top-[35%] left-[30%] translate-[-50%,-50%] flex bg-white text-black shadow-2xl rounded-xl" >
                        <img src={val.img} className="w-[300px] h-60 object-cover rounded-xl" alt="" />
                        <div className="w-[100%]">
                            <p onClick={onClose} className="text-black fixed -right-[-19%] top-[36%] text-2xl font-extrabold cursor-pointer">X</p>
                            <div key={`${val.name} - ${index}`} className="flex flex-col justify-center text-center mt-[1rem] py-[1rem] px-[2rem]">
                                <p>{val.date}</p>
                                <h1>{val.name}</h1>
                                <p>{val.description}</p>
                            </div>
                            <div className="items-center justify-center py-[1rem] px-[1rem]">
                                <button className="w-[60%] m-[0.5rem] border-none bg-gray-800 text-white rounded-xl p-2">View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        
        </>
        
    )
}