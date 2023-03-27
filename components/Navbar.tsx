import Link from "next/link"
import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
    const [sticky, setSticky] = useState(true);
    const [open, setOpen] = useState(false);
    const menuLinks:any = [
        { name : "HOME", link : "#home" },
        { name : "ABOUT", link : "#about" },
        { name : "SERVICES", link : "#services" },
        { name : "PORTFOLIO", link : "#portfolio" },
        { name : "CONTACT", link : "#contact" },
        { name : "TESTIMONIAL", link : "#testemonials" }
    ];
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            const nav = document.querySelector('nav');
            window.scrollY > 0 ? setSticky(true) : setSticky(false)
        })
    }, []);
    return (
        <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? 'md:bg-white shadow-xl text-gray-900' : 'text-white' }`}>
            <div className="flex items-center justify-between">
                <div className="mx-7">
                    <Link href={"/"}>
                        <img className="w-30 h-12 cursor-pointer rounded-lg " src="/n-films.png" alt="" />
                    </Link>
                </div>
                <div className={`{${sticky ? 'md:bg-white/0 ' : 'bg-none text-white'}  text-gray-700 lg:block hidden px-7 py-4 font-medium bg-none`}>
                    <ul className="flex items-center gap-1 text-md">
                        {
                            menuLinks?.map((menu:any,i:number)=>(
                                <li key={i} className="px-3 hover:text-emerald-500">
                                    <a href={menu.link}>{menu.name}</a>
                                </li>
                            ))
                        }
                        <li className="text-2xl hover:text-emerald-500 cursor-pointer">|</li>
                        <li className="px-3 hover:text-emerald-500"><FaFacebook className="text-2xl cursor-pointer"/></li>
                        <li className="px-3 hover:text-emerald-500"><FaInstagram className="text-2xl cursor-pointer  "/></li>
                    <li className="px-3 hover:text-emerald-500"><FaYoutube className="text-2xl cursor-pointer "/></li>
                    </ul>
                </div>
                <div onClick={() => setOpen(!open)}  className={`z-[999] mx-8 ${
                        open ? "text-gray-900" : "text-black"
                    } lg:hidden `}>
                    {open ?  <AiOutlineClose  className="text-4xl text-red-700"/> : <BiMenu className="text-5xl"/>}
                </div>
                <div className={`lg:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
                    open ? "right-0" : "right-[-100%]"
                }`}
                    >
                    <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                        {menuLinks?.map((menu:any, i: number) => (
                        <li
                            onClick={() => setOpen(false)}
                            key={i}
                            className="px-4 hover:text-cyan-600"
                        >
                            <a href={menu.link}>{menu.name}</a>
                        </li>
                        ))}
                        <li className="flex gap-4 text-3xl cursor-pointer text-gray-700">
                            <FaFacebook />
                            <FaInstagram />
                            <FaYoutube />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}