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
        <button onClick={contactMeHighlighted} className="about-me--button">
          &#9679; Disponível para projetos!
        </button>
      </div>
      <div className="about-me--text">
        <h1 className="about-me--h1">
          Olá, eu sou o <br />
          Miguel!
        </h1>
        <h2 className="about-me--h2">Desenvolvedor(?) Full stack</h2>
        <p className="about-me--p">
          Sou um desenvolvedor full stack apaixonado por criar soluções
          inovadoras e eficientes. Com experiência em diversas tecnologias,
          estou sempre em busca de novos desafios para aprimorar minhas
          habilidades e contribuir para projetos impactantes.
        </p>
      </div>

      <div className="about-me--links">
        <a>Ver Projetos</a>
        <a></a>
      </div>
    </section>
  );
}
