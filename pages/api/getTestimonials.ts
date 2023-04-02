
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { TestimonialsType } from "../../typing";


const query = groq`
    *[_type == 'testimonials']
`;

type Data = {
    testimonials : TestimonialsType[];
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const testimonials : TestimonialsType[] = await sanityClient.fetch(query)
    res.status(200).json({ testimonials })
}