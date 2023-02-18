import Head from "next/head";

import {
  About,
  Contact,
  Experience,
  HomePage,
  NavBar,
  Portfolio,
  SocialLinks,
} from "../components";
export default function Home() {
  return (
    <>
      <Head>
        <title>Mohammad Rezvani - Portfolio</title>
        <meta
          name="description"
          content="Hello Im Mohammad Rezvani , Im a Junior Full stack developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio.png" />
      </Head>
      <NavBar />
      <HomePage />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </>
  );
}
