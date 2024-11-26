import React from "react";
import { useTranslation } from "react-i18next";
import "../css/ProjectsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

const ProjectsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="projects-page">
      <div className="link-description-1">
        <p>
          {t("Linkedin")} <span className="arrow">→</span>
        </p>
        <a
          href="https://www.linkedin.com/in/nasradin-guseinovi-1a3639323/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="linkedin-link"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
        </a>
      </div>
      <div className="link-description-2">
        <p>
          {t("Github")} <span className="arrow">→</span>
        </p>
        <a
          href="https://github.com/Nasradin24?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="github-link"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;
