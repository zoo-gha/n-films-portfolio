import React from "react";
import { BsChevronLeft } from "react-icons/bs"

const PrevArrow = ({onClick}) =>{
    return(
        <div className="absolute right-[70px] -top-[80px] " onClick={onClick}>
            <div className="bg-emerald-500 text-white h-[40px] w-[40px] rounded-full grid place-items-center cursor-pointer">
                <BsChevronLeft />
            </div>
        </div>
    )
}
export default PrevArrow;