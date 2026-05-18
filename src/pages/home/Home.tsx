import { useState } from "react";
import "./home.css";
import { AboutMe } from "../../components/portFolio2d/AboutMe";
import { Header } from "../../components/portFolio2d/header";
import { Picture } from "../../components/portFolio2d/picture";
import { Technologies } from "../../components/portFolio2d/technologies";
import { Card } from "../../components/portFolio2d/card";
import { Jumpscare } from "../../components/portFolio2d/jumpscare";

export function Home() {
  const headerLinks = [
    { link: "https://github.com/MiguelMDutra", text: "experiência" },
    { link: "ignore", text: "projetos" },
  ];

  const contactLinks = [
    {
      link: "mailto:mmdutrati@gmail.com?subject=Contato pelo portfólio&body=Olá, vim pelo seu portfólio e gostaria de falar com você.",
      text: "contato",
    },
  ];

  const aboutMeLinks = [
    { link: "https://github.com/MiguelMDutra", text: "Github" },
  ];

  const technologies: string[] = [
    "⚛ React",
    "TS TypeScript",
    "JS JavaScript",
    "◈ HTML",
    "◈ CSS",
    "⬡ Node.js",
    "🍃 MongoDB",
    "⚡ Express",
  ];

  const projects = [
    {
      name: "Mercado dos guris",
      icon: "ti-shopping-cart",
      description: "E-commerce usando MongoDB, Express, React e Node.js",
      link: "https://github.com/MiguelMDutra/Mercado-Dos-Guri",
      tags: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      name: "Calculadora",
      icon: "ti-calculator",
      description:
        "Calculadora tématica do Crash Bandicoot usando JavaScript, HTML e CSS",
      link: "https://github.com/MiguelMDutra/calculadoraCrash",
      tags: ["JavaScript", "HTML", "CSS"],
    },
    {
      name: "Api do tempo",
      icon: "ti-cloud-storm",
      description: "Front de uma api de previsão do tempo",
      link: "https://github.com/MiguelMDutra/API-tempo",
      tags: ["JavaScript", "HTML", "CSS"],
    },
    {
      name: "Api de filmes(só o back-end)",
      icon: "ti-movie",
      description: "Back-end de uma api de filmes",
      link: "https://github.com/MiguelMDutra/filmesBack",
      tags: ["Node.js", "Express", "MongoDB", "JavaScript"],
    },
  ];

  const [isContactHighlighted, setIsContactHighlighted] = useState(false);

  function contactMeHighlighted() {
    setIsContactHighlighted(true);
    setTimeout(() => {
      setIsContactHighlighted(false);
    }, 5000);
  }

  const [isFreddyAngry, setIsFreddyAngry] = useState(false);
  const [isItStatic, setIsItStatic] = useState(false);

  function freddysHurHurHur() {
    console.log("clicado");

    setIsFreddyAngry(true);
    setTimeout(() => {
      setIsItStatic(true);
    }, 3000);
    setTimeout(() => {
      setIsFreddyAngry(false);
    }, 4000);
  }

  function scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <header>
        <Header
          isContactHighlighted={isContactHighlighted}
          scrollToProjects={scrollToProjects}
          contactLinks={contactLinks}
          headerLinks={headerLinks}
        />
      </header>
      <hr />
      <main>
        <div className="main--content">
          <AboutMe
            contactMeHighlighted={contactMeHighlighted}
            name="Miguel!"
            title="Desenvolvedor(?) Full stack"
            description="Sou um desenvolvedor full stack apaixonado por criar soluções inovadoras e eficientes. Com experiência em diversas tecnologias, estou sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir para projetos impactantes."
            aboutMeLinks={aboutMeLinks}
          ></AboutMe>
          <Picture
            freddysHurHurHur={freddysHurHurHur}
            isFreddyAngry={isFreddyAngry}
          ></Picture>
        </div>
      </main>
      <Jumpscare isFreddyAngry={isFreddyAngry} isItStatic={isItStatic} />
      <hr />
      <section>
        <Technologies technologies={technologies} />
      </section>
      <hr />
      <section id="projects">
        <h3 className="h3--projects">Projetos</h3>
        <Card projects={projects} />
      </section>
    </>
  );
}

export default Home;
