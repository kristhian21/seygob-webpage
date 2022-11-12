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
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nulla
        neque quibusdam odit. Ex doloribus corrupti facere quos vel labore,
        totam in, reprehenderit reiciendis dolore soluta officiis. Sapiente
        quaerat minus quisquam, odio voluptatem ab nobis deleniti, sit cumque
        laborum debitis non iste dolorem aliquam perspiciatis atque quasi
        laboriosam officia harum libero earum, eveniet unde magnam. Quae quam,
        cupiditate dolor natus quia consectetur excepturi placeat possimus
        mollitia odio incidunt quasi quo reprehenderit doloremque quod
        dignissimos eius expedita dolore nemo ex, magni adipisci nobis at atque.
        Voluptas voluptatibus ratione, nesciunt distinctio facere excepturi
        adipisci velit expedita voluptates laboriosam officiis quos rem ad.
      </div>
    </div>
  );
}
