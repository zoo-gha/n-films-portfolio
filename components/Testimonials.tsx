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
    ,
    {
        id : 4,
        name : "Ali Raji",
        test : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img : '/pic3.jpg'
    },
    {
        id : 5,
        name : "Alami Brahim",
        test : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img : '/pic3.jpg'
    },
    {
        id : 6,
        name : "Anas Salih",
        test : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img : '/pic3.jpg'
    },
    {
        id : 7,
        name : "Raji Brahim",
        test : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img : '/pic3.jpg'
    },
    {
        id : 8,
        name : "Ahmed Salih",
        test : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img : '/pic3.jpg'
    }
];

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

export default function Testimonials() {
    const [progress, setProgress] = useState(0);
    const [slideToShow, setSlideToShow] = useState(4);

    const setSlides = () => {
        if (window.innerWidth <= 1280 && window.innerWidth > 1000) {
            setSlideToShow(3)
        } else if (window.innerWidth <= 1000 && window.innerWidth > 650) {
            setSlideToShow(2)
        } else if (window.innerWidth <= 650) {
            setSlideToShow(1)
        }
    }
    useEffect(()=>{
        setSlides()
        setProgress(100/ (testimonials_data.length - slideToShow +1))
        window.addEventListener("resize", () => {setSlides()})
    }, [])
    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: slideToShow,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1820,
                settings: {
                    slideToShow:4,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slideToShow:3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slideToShow:2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slideToShow:1,
                }
            },
        ],
        afterChange: current => {
            setProgress( 100/ ( testimonials_data.length - slideToShow + 1) * ( current + 1 ));
        }
    }
    return (
        <section className="font-mont text-black -z-1">

            <div className="max-w-6xl mx-auto flex flex-col gap-10 px-4 lg:px-0">

                <h5 className="text-black text-4xl font-black self-start relative before:absolute before:bottom-[-10px] before:left-0 before:w-60 before:h-[4px] before:bg-[#01BE83]"> Testimonials </h5>
                <h1 className="py-4 text-black text-2xl font-medium max-w-[50rem] leading-8">Read What Others Have to Say</h1>

                {/*<div className="max-w-5xl mx-auto realtive grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 group ">*/}
                <div className="relative w-[100%] group mx-auto max-w-5xl py-8">
                    <Slider {...settings}>
                        {testimonials_data.map((val:any) =>{
                            return(
                                <div key={val.id} className="bg-emerald-900 mx-auto duration-500 group-hover:opacity-60 hover:!opacity-100 group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
                                    <img src={val.img} alt="" className="h-20  rounded-full w-20 mx-auto"  />
                                    <h4 className="uppercase text-xl font-bold text-white">{val.name}</h4>
                                    <p className="text-white/50 text-sm leading-7 my-3 font-light"> {val.test} </p>
                                    <button className="bg-emerald-200 text-black/50 py-2.5 px-8 rounded-full hover:bg-emerald-300 hover:text-white"> Get in Touch</button>
                                </div>
                            )
                        })}
                    </Slider>
                    <div className="h-[2px] bg-gray-300 w-[200px] absolute -top-[5px] right-0 ">
                        <div className="bg-emerald-500 absolute h-[100%] transition-all" style={{width:`${progress}%`}}></div>
                    </div>
                    
                </div>

            </div>

        </section>
    )
}