import Head from "next/head";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import JoinNow from "@/components/JoinNow";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <>
      <Head>
        <title>TBAUnofficial</title>
        <meta
          name="description"
          content="TBAUnofficial | Developed by FRC member Brandon [@BrandgrandReal] for other FRC members to fetch information from TBA and my own DB."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Showcase />
      <About />
      <Contact />
      <JoinNow />
      <Footer />
    </>
  );
}
