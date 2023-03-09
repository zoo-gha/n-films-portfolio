import React from "react";
import { BsChevronRight } from "react-icons/bs"

const NextArrow = ({onClick}) =>{
    return(
        <div className="absolute right-2 -top-[80px] " onClick={onClick}>
            <div className="bg-emerald-500 text-white h-[40px] w-[40px] rounded-full grid place-items-center cursor-pointer">
                <BsChevronRight />
            </div>
        </div>
    )
}
export default NextArrow;