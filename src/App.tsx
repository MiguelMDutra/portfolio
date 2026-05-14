import { useState } from "react";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/header";
import { Picture } from "./components/picture";
import { Technologies } from "./components/technologies";

function App() {
  const technologies: string[] = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
  ];

  //vou usar pra mudar o estilo do link de contato quando clicar no botão "disponível para projetos"
  const [isContactHighlighted, setIsContactHighlighted] = useState(false);

  function contactMeHighlighted() {
    setIsContactHighlighted(true);
    setTimeout(() => {
      setIsContactHighlighted(false);
    }, 5000);
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
          <Picture></Picture>
        </div>
      </main>
      <hr />
      <section>
        <Technologies technologies={technologies} />
      </section>
      <hr />
      <section>
        <h3 className="h3--projects">Projetos</h3>
      </section>
    </>
  );
}

export default App;
