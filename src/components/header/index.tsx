import "./header.css";

export function Header({
  isContactHighlighted,
  scrollToProjects,
}: {
  isContactHighlighted: boolean;
  scrollToProjects: () => void;
}) {
  return (
    <section className="header--section">
      <div className="header--name">
        <p className="header--name-text">
          &lt;<span className="header--accent">Miguel M Dutra</span> /&gt;
        </p>
      </div>

      <div className="header--links">
        <a className="header--link">sobre</a>
        <a className="header--link" onClick={scrollToProjects}>
          projetos
        </a>
        <a
          className="header--link"
          href="https://github.com/MiguelMDutra"
          target="_blank"
        >
          experiência
        </a>
      </div>

      <div className="header--contact">
        <a
          id="header--contact-link"
          className={
            isContactHighlighted
              ? "header--contact-link active"
              : "header--contact-link"
          }
          href="mailto:mmdutrati@gmail.com?subject=Contato pelo portfólio&body=Olá, vim pelo seu portfólio e gostaria de falar com você."
        >
          contato
        </a>
      </div>
    </section>
  );
}
