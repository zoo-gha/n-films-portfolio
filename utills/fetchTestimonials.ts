import { TestimonialsType } from "@/typing";


export const fetchTestimonials = async () =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTestimonials`);
    const data = await res.json()
    const testimonials: TestimonialsType[] = data.testimonials;

    return testimonials;
}