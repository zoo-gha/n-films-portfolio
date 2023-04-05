import Head from "next/head";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import FooterSection from "@/components/FooterSection";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs";
import Top from "@/components/Top";
import Homepage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import { PortfolioType, TestimonialsType } from "@/typing";
import { GetStaticProps } from "next";
import { fetchPortfolios } from "@/utills/fetchPortfolios";
import { fetchTestimonials } from "@/utills/fetchTestimonials";
type Props = {
  portfolios : PortfolioType[];
  testimonials : TestimonialsType[]
}


export default function Home({portfolios, testimonials} : Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoicons.PNG" />
        
      </Head>
      <main className="mx-auto overflow-hidden">
        <Navbar />
        <Homepage />
        <About />
        <Services />
        <Portfolio portfolios={portfolios}/>
        <ContactUs />
        <Testimonials testimonials={testimonials} />
        <FooterSection />
        <Top />
      </main>
    </>
  );
}

export const getStaticProps:  GetStaticProps<Props> = async () =>{
  const portfolios: PortfolioType[] = await fetchPortfolios();
  const testimonials: TestimonialsType[] = await fetchTestimonials();

  return{
    props: {
      portfolios: portfolios || null,
      testimonials : testimonials || null,
    },
    //next.js will attempt to re-generate the page;
    //- when a request comes in
    //- at most once every 10 seconds
    revalidate: 10,
  };
};