import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk&family=Montserrat&display=swap"
          rel="stylesheet"
        />

        <title>Raihan Yusri</title>
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Projects />
      <Achievements />
    </div>
  );
}
