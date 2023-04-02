import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Top() {
    const [show, setShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", () => {
            window.scrollY > 1 ? setShow(true) : null
        })
    },[])
    return (
        <section className={`${show ? 'visible' : 'hidden'} fixed bottom-5 sm:right-8 right-5 z-[999] cursor-pointer text-white text-5xl bg-emerald-800 rounded-full w-12 h-12 flex items-center justify-center animate-bounce`}>
            <Link href={"/"}>
                <BsFillArrowUpCircleFill />
            </Link>
        </section>
    )
}