import { Name } from "../name";
import "./header.css";

type Links = {
  text: string;
  link: string;
};

type HeaderProps = {
  isContactHighlighted: boolean;
  scrollToProjects: () => void;
  headerLinks: Links[];
  contactLinks: Links[];
};

export function Header({
  isContactHighlighted,
  scrollToProjects,
  contactLinks,
  headerLinks,
}: HeaderProps) {
  return (
    <section className="header--section">
      <div className="header--name">
        <Name />
      </div>

      <div className="header--links">
        {headerLinks.map((headerLink, index) => {
          if (headerLink.link !== "ignore") {
            return (
              <a
                key={index}
                className="header--link"
                href={headerLink.link}
                target="_blank"
              >
                {headerLink.text}
              </a>
            );
          } else {
            return (
              <button
                key={index}
                className="header--link"
                onClick={scrollToProjects}
              >
                {headerLink.text}
              </button>
            );
          }
        })}
      </div>

      <div className="header--contact">
        {contactLinks.map((contactLink, index) => {
          return (
            <a
              key={index}
              className={
                isContactHighlighted
                  ? "header--contact-link active"
                  : "header--contact-link"
              }
              href={contactLink.link}
            >
              {contactLink.text}
            </a>
          );
        })}
      </div>
    </section>
  );
}
