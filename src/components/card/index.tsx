import "./card.css";

export function Card({
  projects,
}: {
  projects: {
    name: string;
    icon: string;
    description: string;
    link: string;
  }[];
}) {
  return (
    <>
      {projects.map((project, index) => {
        return (
          <div className="container--card" key={index}>
            <div className="card">
              <div className="icon--text">
                <div className="all--icons">
                  <i className={`ti ${project.icon}`} />
                </div>

                <div className="card--text">
                  <p>{project.name}</p>
                  <p className="card--description">{project.description}</p>
                </div>
              </div>

              <a
                href={project.link}
                className="card--link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="ti ti-arrow-right" />
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}
