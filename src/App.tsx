import { useState } from "react";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/header";
import { Picture } from "./components/picture";
import { Technologies } from "./components/technologies";
import { Card } from "./components/card";
import jumpscare from "./assets/jumpscare.gif";

function App() {
  const technologies: string[] = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
  ];

  const projects = [
    {
      name: "Mercado dos guris",
      icon: "ti-shopping-cart",
      description: "E-commerce usando MongoDB, Express, React e Node.js",
      link: "https://github.com/MiguelMDutra/Mercado-Dos-Guri/tree/main/FrontEnd/public",
    },
    {
      name: "Calculadora",
      icon: "ti-calculator",
      description:
        "Calculadora tématica do Crash Bandicoot usando JavaScript, HTML e CSS",
      link: "https://github.com/MiguelMDutra/calculadoraCrash",
    },
    {
      name: "Api do tempo",
      icon: "ti-cloud-storm",
      description: "Front de uma api de previsão do tempo",
      link: "https://github.com/MiguelMDutra/API-tempo",
    },
    {
      name: "Api de filmes(só o back-end)",
      icon: "ti-movie",
      description: "Back-end de uma api de filmes",
      link: "https://github.com/MiguelMDutra/filmesBack",
    },
  ];

  //vou usar pra mudar o estilo do link de contato quando clicar no botão "disponível para projetos"
  const [isContactHighlighted, setIsContactHighlighted] = useState(false);

  function contactMeHighlighted() {
    setIsContactHighlighted(true);
    setTimeout(() => {
      setIsContactHighlighted(false);
    }, 5000);
  }

  const [isFreddyAngry, setIsFreddyAngry] = useState(false);

  function freddysHurHurHur() {
    console.log("clicado");

    setIsFreddyAngry(true);
    setTimeout(() => {
      setIsFreddyAngry(false);
    }, 3000);
  }

  return (
    <>
      <header>
        <Header isContactHighlighted={isContactHighlighted} />
      </header>
      <hr />
      <main>
        <div className="main--content">
          {/*nome da prop é o mesmo da função, mas poderia ser diferente, o*/}
          {/*importante é passar a função como valor da prop*/}
          <AboutMe contactMeHighlighted={contactMeHighlighted}></AboutMe>
          <Picture freddysHurHurHur={freddysHurHurHur}></Picture>
        </div>
      </main>
      <img
        src={jumpscare}
        className={isFreddyAngry ? "freddy active" : "freddy"}
      ></img>
      <hr />
      <section>
        <Technologies technologies={technologies} />
      </section>
      <hr />
      <section>
        <h3 className="h3--projects">Projetos</h3>
        <Card projects={projects} />
      </section>
    </>
  );
}

export default App;
