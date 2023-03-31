import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import FooterSection from "@/components/FooterSection";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs";
import Top from "@/components/Top";
import Homepage from "@/components/HomePage";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className="mx-auto">
        <Navbar />
        <Homepage />
        <Top />
        <About />
        <Services />
        <Portfolio />
        <ContactUs />
        <Testimonials />
        <FooterSection />
      </main>
    </>
  );
}
