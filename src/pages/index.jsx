import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import axios from "src/configs/axios";
import Header from "../parts/Header";
import Hero from "../parts/Hero";

import Circle from "public/images/circle-accent-1.svg";
import Clients from "src/parts/Clients";
import ListCourses from "src/parts/ListCourses";
import ListCategories from "src/parts/ListCategories";
import Footer from "src/parts/Footer";


const inter = Inter({ subsets: ["latin"] });
function Home({ data }) {
  return (
    <>
      <Head>
        <title>BTSBIMBEL</title>
        <meta name="description" content="Next.js + Tailwind CSS" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <section className="pt-10  header-clipping">
          <Circle className="absolute bottom-0 left-0"></Circle>
          <div className="sunshine"></div>
          <div className=" container mx-auto">
            <Header></Header>
            <Hero></Hero>
          </div>
        </section>

        <section className="container mx-auto pt-24">
          <Clients></Clients>
        </section>
      
        <section className="container mx-auto pt-24">
          <ListCourses data={data}></ListCourses>
        </section>

        <section className="container mx-auto pt-24">
          <ListCategories></ListCategories>
        </section>

        <section className="mt-24 bg-primary py-12">
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  try {
    const data = await axios.get("/courses");
    return { data: data.data.data };
  } catch (error) {}
};

export default Home;
