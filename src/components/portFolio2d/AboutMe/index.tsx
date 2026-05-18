import "./AboutMe.css";
import "../header/header.css";

type Links = {
  text: string;
  link: string;
};

type AboutMeProps = {
  contactMeHighlighted: () => void;
  name: string;
  title: string;
  description: string;
  aboutMeLinks: Links[];
};

export function AboutMe({
  contactMeHighlighted,
  name,
  title,
  description,
  aboutMeLinks,
}: AboutMeProps) {
  return (
    <section className="about-me--section">
      <button onClick={contactMeHighlighted} className="about-me--button">
        <span className="about-me--icon">&#9679;</span> Disponível para
        projetos!
      </button>
      <div className="about-me--text">
        <h1 className="about-me--h1">
          Olá, eu sou o <br />
          <span className="about-me--accent">{name}</span>
        </h1>
        <h2 className="about-me--h2">{title}</h2>
        <p className="about-me--p">{description}</p>
      </div>

      <div className="about-me--links--container">
        {aboutMeLinks.map((link, index) => {
          return (
            <a
              key={index}
              className="about-me--links"
              href={link.link}
              target="_blank"
            >
              {link.text}
            </a>
          );
        })}
      </div>
    </section>
  );
}
