import React from "react";
import "./ZendeskTicketingLab.css";   // we'll create this next
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta } from "../content_option";

const galleryItems = [
  {
    step: "Step 1",
    title: "Ticket #1 - User Forgot Password",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/stefandoss22-jpg.github.io/master/zendesk-screenshots/1%20User%20Forgot%20Password.png",
    caption: "Received and triaged login issue ticket."
  },
  {
    step: "Step 1b",
    title: "Ticket #1 - Resolved",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/stefandoss22-jpg.github.io/master/zendesk-screenshots/1a%20User%20Forgot%20Password%20Resolved.png",
    caption: "Password reset completed in Active Directory. Ticket solved."
  },
  {
    step: "Step 2",
    title: "Ticket #2 - Outlook/Email Issue",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/stefandoss22-jpg.github.io/master/zendesk-screenshots/2%20Outlook%20Issues%20Resolved.png",
    caption: "Troubleshot and resolved email access problem."
  },
  {
    step: "Step 3",
    title: "Ticket #3 - New Employee Onboarding",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/stefandoss22-jpg.github.io/master/zendesk-screenshots/3%20New%20User%20Creation.png",
    caption: "Processed new hire request: created user account and added to groups."
  }
];

const ZendeskTicketingLab = () => {
  return (
    <HelmetProvider>
      <Container className="About-header ad-lab-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>IT Service Desk Simulation | Zendesk | {meta.title}</title>
        </Helmet>

        <Row className="mb-4 mt-3 pt-md-3">
          <Col lg="10">
            <div className="ad-lab-header">
              <h1 className="display-4 mb-4">IT Service Desk Simulation – Zendesk Ticketing System</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <p className="ad-lab-lead">Simulated real-world service desk operations with Active Directory integration.</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="10">
            <div className="ad-lab-gallery">
              {galleryItems.map((item, index) => (
                <figure key={index} className="ad-lab-gallery-item">
                  <div className="ad-lab-step">{item.step}</div>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    loading="lazy"
                    style={{ width: "100%", height: "auto", maxHeight: "780px", objectFit: "contain" }} 
                  />
                  <figcaption className="ad-lab-caption">
                    <strong>{item.title}</strong><br />
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="ad-lab-actions mt-5">
              <Link to="/portfolio" className="ad-lab-back-btn">
                ← Back to Portfolio
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default ZendeskTicketingLab;
export { ZendeskTicketingLab };