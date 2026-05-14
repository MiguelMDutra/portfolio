import "./header.css";

type isContactHighlighted = {
  isContactHighlighted: boolean;
};

export function Header({ isContactHighlighted }: isContactHighlighted) {
  return (
    <section className="header--section">
      <div className="header--name">
        <p className="header--name-text">&lt;Miguel M Dutra /&gt;</p>
      </div>

      <div className="header--links">
        <a className="header--link">sobre</a>
        <a className="header--link">projetos</a>
        <a className="header--link">experiência</a>
      </div>

      <div className="header--contact">
        <a
          id="header--contact-link"
          className={
            isContactHighlighted
              ? "header--contact-link active"
              : "header--contact-link"
          }
        >
          contato
        </a>
      </div>
    </section>
  );
}
