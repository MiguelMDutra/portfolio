import { useState } from "react";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/header";
import { Picture } from "./components/picture";
import { Technologies } from "./components/technologies";
import { Card } from "./components/card";
import { Jumpscare } from "./components/jumpscare";

function App() {
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
        />
      </header>
      <hr />
      <main>
        <div className="main--content">
          <AboutMe contactMeHighlighted={contactMeHighlighted}></AboutMe>
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

export default App;
