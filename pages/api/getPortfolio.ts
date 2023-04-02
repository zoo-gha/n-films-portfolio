
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PortfolioType , TestimonialsType } from "../../typing";


const query = groq`
    *[_type == 'portfolio']
`;

type Data = {
    portfolios : PortfolioType[];
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const portfolios : PortfolioType[] = await sanityClient.fetch(query)
    res.status(200).json({ portfolios })
}