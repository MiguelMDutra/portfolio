import { useState } from "react";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/header";
import { Picture } from "./components/picture";

function App() {
  //vou usar pra mudar o estilo do link de contato quando clicar no botão "disponível para projetos"
  const [isContactHighlighted, setIsContactHighlighted] = useState(false);

  function contactMeHighlighted() {
    setIsContactHighlighted(true);
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
    </>
  );
}

export default App;
