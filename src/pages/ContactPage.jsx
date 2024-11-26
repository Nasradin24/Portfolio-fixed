import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "../css/ContactPage.css";

const ContactPage = () => {
  return (
    <Container className="contact-all-page">
      <h2>Contact Me</h2>
      <h3>Get in Touch</h3>
      <div className="contact-all-inside">
        <Row>
          <Col xs={12} md={4}>
            <div className="number">
              <h3>Number</h3>
              <div className="number-inside">
                <FontAwesomeIcon className="phone" icon={faPhone} />
                <span> +994 55 936 17 30</span>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="gmail">
              <h3>Gmail</h3>
              <div className="gmail-inside">
                <FontAwesomeIcon className="gmail-icon" icon={faEnvelope} />
                <span>nesreddin19@email.com</span>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="location">
              <h3>Location</h3>
              <div className="location-inside">
                <FontAwesomeIcon className="location-icon" icon={faMapMarkerAlt} />
                <span> Azerbaijan - Baku City </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ContactPage;
