import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../css/AboutPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import myCV from "../assets/Nasradin_20241104_210659_0000.pdf";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Container className="all-about">
      <Row>
        <Col xs={12} md={6}>
          <h1>{t('about')}</h1>
          <p>{t('welcome')}</p>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <a href={myCV} download="My_CV">
            <Button variant="primary">
              {t('downloadCV')}
              <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: "10px", color: "white" }} />
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
