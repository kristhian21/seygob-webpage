import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Modulos from "../components/Modulos";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SEYGOB</title>
        <meta name="description" content="Seygob SAS landing page" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Hero />
      <Modulos />
      <About />
      <Footer />
    </div>
  );
}
