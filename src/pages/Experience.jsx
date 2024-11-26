import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import "../css/Experience.css";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <Container className='experience' style={{ cursor: "pointer", fontSize: "32px" }}>
      <Row style={{ display: "flex", justifyContent: "space-between", width: "100%" , alignItems: "left" }}>
        <Col xs={12} md={6} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", textAlign: "left" }}>
          <h3>{t('experience')}</h3>
          <h5>{t('juniorFrontendDeveloper')}</h5>
          <h5>2024 | {t('agileSolutions')}</h5>
        </Col>

        <Col xs={12} md={6} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", textAlign: "left" }}>
          <h3>{t('education')}</h3>
          <h5>{t('university')}</h5>
          <h5>2017-2021 | Baku</h5>
          <h5 style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", textAlign: "right", }}>{t('mechanicalEngineering')} - Azerbaijan Technical University</h5>
        </Col>
        
      </Row>
    </Container>
  );
};

export default Experience;
