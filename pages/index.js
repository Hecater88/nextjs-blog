import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Soy un programador front-end que se preocupa por la accesibilidad del
          usuario y mira por el futuro de los proyectos, utilizo arquitectura de
          css, código limpio y optimización del código para que el proyecto sea
          escalable. Me apasiona los videojuegos, diseño y desarrollo
          videojuegos en mis ratos libres. También soy programador Wordpress. Me
          interesan las tecnologías y lenguajes de programación de desarrollo
          web y aplicaciones.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
