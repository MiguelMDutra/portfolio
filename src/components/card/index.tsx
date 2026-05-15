import "./card.css";

export function Card({
  projects,
}: {
  projects: {
    name: string;
    icon: string;
    description: string;
    link: string;
    tags: string[];
  }[];
}) {
  return (
    <>
      {projects.map((project, index) => {
        return (
          <div className={"container--card"} key={index}>
            <div className="card">
              <div className="icon--text">
                <div className={`all--icons card--icon--${index}`}>
                  <i className={`ti ${project.icon} card--${index}`} />
                </div>

                <div className="card--text">
                  <p>{project.name}</p>
                  <p>{project.description}</p>

                  <div className="card--tags">
                    {project.tags.map((tag, indexTag) => {
                      return (
                        <span
                          className={`card--tag card--tag--${index}`}
                          key={indexTag}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
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
