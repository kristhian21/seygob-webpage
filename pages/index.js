import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SEYGOB</title>
        <meta name="description" content="Seygob SAS landing page" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Hero />
    </div>
  );
}
