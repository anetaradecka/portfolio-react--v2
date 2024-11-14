import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useReducer } from "react";

export default function Box({ index, title, description, tech }) {
  const [boxState, boxStateDispatch] = useReducer(boxReducer, {
    isActive: false,
  });

  function boxReducer(state, action) {
    if (action.type === "BOX_UP") {
      return { isActive: true };
    }

    if (action.type === "BOX_DOWN") {
       return { isActive: false };
    }

    return state;
  }

  function handleMouseEnter() {
    boxStateDispatch({
      type: "BOX_UP",
    });

    // imperative version:
    // const selected = e.target.closest(".projects__box");
    // selected.classList.add("projects__box--active");
  }

  function handleMouseLeave() {
    boxStateDispatch({
      type: "BOX_DOWN",
    });

    // imperative version:
    // const selected = e.target.closest(".projects__box");
    // selected.classList.remove("projects__box--active");
  }

  return (
    <div
      className={
        boxState.isActive
          ? `projects__box projects__box--${index + 1} projects__box--active`
          : `projects__box projects__box--${index + 1}`
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h4 className="projects__box__title">{title}</h4>
      <p className="projects__box__description">{description}</p>
      <div className="projects__box__techstack">
        <ul className="projects__box__list">
          {tech.map((item) => (
            <li className="list-item">{item}</li>
          ))}
        </ul>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          <i className="fab fa-github"></i>
        </a>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
          <i className="fas fa-external-link-alt" role="img"></i>
        </a>
      </div>
    </div>
  );
}
