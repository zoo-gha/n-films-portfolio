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

import  React, {useState} from 'react';
import ModalsPortfolio from './ModalsPortfolio';
export default function Portfolio() {
    const [openModal, setOpenModal] = useState(false);
    
    return (
        <section className="font-mont text-black py-6 -z-1">
            <div className="text-center py-8">
                <h5 className="cursor-pointer"> Portfolio </h5>
                <h1 className="text-2xl w-96 mx-auto leading-normal font-bold mb-12">Visit Our Portfolio and Keep Your Feedback</h1>
            </div>

            <div className="max-w-5xl mx-auto items-center justify-center grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 -z-1">

                
                {travaux_data.map((val:any)=>{
                    
                    return(
                        <div className='-z-1'>
                        <div className="flex flex-col justify-between items-center -z-1" key={`${val.id}-${val.name}`}>
                            <div key={val.id} className="bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden cursor-pointer">
                                <img className="w-full h-[200px] object-cover cursor-pointer hover:scale-125" src={val.img} alt="" />
                                <div className="p-5 flex-col gap-3 cursor-pointer" key={`${val.id}${val.name}`}>
                                    {/*----app static-----*/}
                                    <div className="flex items-center gap-2 justify-between"  key={`${val.id}/${val.name}`}>
                                        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button" className="border border-blue-100 bg-emerald-700 text-white hover:text-white active:bg-green-900 hover:bg-emerald-400 rounded-xl p-2" onClick={() => setOpenModal(true)}>Show Details</button>
                                        <span className="px-1 py-1 pb-1 text-md text-emerald-500 float-right">{val.date}</span>
                                    </div>
                                    {/*---app title----- */}
                                    <h2 className="font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap   hover:text-emerald-400" title="app">
                                        {val.name}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <ModalsPortfolio open={openModal} id={val.id} onClose={()=> setOpenModal(false)}/>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}