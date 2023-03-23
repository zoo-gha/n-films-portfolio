import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";

const FooterSection = () =>{
    return(
        <section className="block">
            <div className="bg-gray-50 h-1/2 w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 items-start p-10"> 
                <div className="p-5">
                        <div className="text-gray-800 font-bold text-3xl pb-6">
                            <img src="/n-films.png" className="w-[200px] h-auto rounded-xl cursor-pointer" alt="" />
                            <p className="text-gray-600 text-normal text-sm">NFILMS is a production company audiovisual of Guelmim specialized in production of films and reports, films institutional and drone images.</p>
                        </div>
                        <div className="flex flex-cols gap-6 text-xl">
                            <FaFacebook className="rounded-full text-2xl cursor-pointer hover:text-sky-600 text-gray-800 hover:translate-x-1 hover:text-3xl"/>
                            <FaInstagram className="text-2xl cursor-pointer hover:translate-x-1 text-gray-800 hover:text-fuchsia-600 hover:text-3xl"/>
                            <FaYoutube className="text-2xl cursor-pointer hover:translate-x-1 text-gray-800 hover:text-rose-600 hover:text-3xl"/>
                        </div>
                </div>
                <div className="p-5">
                    <h3 className="text-lg text-gray-900 mb-2">Services</h3>
                    <ul className="leading-7">
                        <li className="flex gap-3 hover:translate-x-6 cursor-pointer"><HiArrowSmRight className="justify-center bg-white text-emerald-700 text-xl"/> <span className="text-md text-gray-700"> Film Corporate</span></li>
                        <li className="flex gap-3 hover:translate-x-6 cursor-pointer"><HiArrowSmRight className="justify-center bg-white text-emerald-700 text-xl"/> <span className="text-md text-gray-700"> Motion designs</span></li>
                        <li className="flex gap-3 hover:translate-x-6 cursor-pointer"><HiArrowSmRight className="justify-center bg-white text-emerald-700 text-xl"/> <span className="text-md text-gray-700"> Commercial</span></li>
                        <li className="flex gap-3 hover:translate-x-6 cursor-pointer"><HiArrowSmRight className="justify-center bg-white text-emerald-700 text-xl"/> <span className="text-md text-gray-700"> Film Corporate</span></li>
                        <li className="flex gap-3 hover:translate-x-6 cursor-pointer"><HiArrowSmRight className="justify-center bg-white text-emerald-700 text-xl"/> <span className="text-md text-gray-700"> Film Corporate</span></li>
                        <li className="flex gap-3 hover:translate-x-6 cursor-pointer"><HiArrowSmRight className="justify-center bg-white text-emerald-700 text-xl"/> <span className="text-md text-gray-700"> Film Corporate</span></li>
                    </ul>
                </div>
                <div className="p-5">
                    <h3 className="text-lg text-gray-900 mb-2"></h3>
                    <ul className="leading-7">
                        <li className="flex gap-3 hover:translate-x-6 cursor-pointer"><HiArrowSmRight className="justify-center bg-white text-emerald-700 text-xl"/> <span className="text-md text-gray-700"> Home</span></li>
                        <li className="flex gap-3 hover:translate-x-6 cursor-pointer"><HiArrowSmRight className="justify-center bg-white text-emerald-700 text-xl"/> <span className="text-md text-gray-700"> About Us</span></li>
                        <li className="flex gap-3 hover:translate-x-6 cursor-pointer"><HiArrowSmRight className="justify-center bg-white text-emerald-700 text-xl"/> <span className="text-md text-gray-700"> Our Services</span></li>
                        <li className="flex gap-3 hover:translate-x-6 cursor-pointer"><HiArrowSmRight className="justify-center bg-white text-emerald-700 text-xl"/> <span className="text-md text-gray-700"> Portfolio</span></li>
                        <li className="flex gap-3 hover:translate-x-6 cursor-pointer"><HiArrowSmRight className="justify-center bg-white text-emerald-700 text-xl"/> <span className="text-md text-gray-700"> Contact</span></li>
                        <li className="flex gap-3 hover:translate-x-6 cursor-pointer"><HiArrowSmRight className="justify-center bg-white text-emerald-700 text-xl"/> <span className="text-md text-gray-700"> Testimonials</span></li>
                    </ul>
                </div>
                <div className="p-5">
                    <div className="flex gap-3 cursor-pointer pb-4 pt-4"><span><FaLocationArrow className="text-emerald-700"/></span> <span className="text-gray-700">HAY SAADIENNE 2 RUE 08BLOC C NR13, Guelmim</span></div>
                    <div className="flex gap-3 cursor-pointer pb-4"><span><FaPhoneAlt className="text-emerald-700"/></span> <span className="text-gray-700">06 61 447326</span></div>
                    <div className="flex gap-3 cursor-pointer"><span><MdOutlineEmail className="text-emerald-700"/></span> <span className="text-gray-700">Admin@n-films.net</span></div>
                </div>
            </div>
            <hr className="text-gray-400"/>
            <div className="justify-center items-center text-sm p-3 flex sm:text-xs md:text-sm lg:text-md">
                <p className="flex text-gray-800">Copyright ©2023 | Made with <BsFillHeartFill className="text-indigo-900 mx-1"/> by <span className="text-md mx-1 text-gray-800"> Our Team</span></p>
            </div>
        </section>
        
    )
};
export default FooterSection;