import { PortfolioType } from "@/typing";


export const fetchPortfolios = async () =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPortfolio`);
    const data = await res.json()
    const portfolios: PortfolioType[] = data.portfolios;

    return portfolios;
}