import "./tech.css";

export function Technologies({ technologies }: { technologies: string[] }) {
  return (
    <section>
      <div className="div--h2">
        <h2 className="h2--title">Principais tecnologias que utilizo:</h2>
      </div>

      <div className="all--techs">
        {technologies.map((tech, index) => {
          const lastDigit = index % 10;

          return (
            <button className={`techs tech--${lastDigit}`} key={index}>
              {tech}
            </button>
          );
        })}
      </div>
    </section>
  );
}
