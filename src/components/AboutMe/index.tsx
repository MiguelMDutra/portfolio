import "./AboutMe.css";
import "../header/header.css";

type AboutMeProps = {
  contactMeHighlighted: () => void;
  //nao recebe nem retorna nada,
  //  apenas executa a função passada como prop
};

export function AboutMe({ contactMeHighlighted }: AboutMeProps) {
  return (
    <section className="about-me--section">
      <div className="about-me--free">
        <button onClick={contactMeHighlighted}>
          Disponível para projetos!
        </button>
      </div>
      <div className="about-me--text">
        <h1>
          Olá, eu sou o <br />
          Miguel!
        </h1>
        <p></p>
      </div>

      <div className="about-me--links">
        <a></a>
      </div>
    </section>
  );
}
