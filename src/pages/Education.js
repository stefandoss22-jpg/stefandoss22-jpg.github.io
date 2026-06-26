import React from "react";
import "./ActiveDirectoryLab.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta } from "../content_option";

const Education = () => {
  return (
    <HelmetProvider>
      <Container className="ad-lab-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Education | {meta.title}</title>
        </Helmet>

        <Row className="mb-4 mt-3 pt-md-3">
          <Col lg="10">
            <div className="ad-lab-header">
              <h1 className="display-4 mb-4">Education</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <p className="ad-lab-lead">
                Bachelor of Science in Information Technology<br />
                Indiana Wesleyan University
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="10">
            <div className="ad-lab-gallery mt-4">

              {/* Diploma */}
              <div className="text-center mb-5 p-4 border rounded">
                <h3>Diploma</h3>
                <p className="text-muted">Bachelor of Science in Information Technology</p>
                <p>Conferred: September 12, 2025</p>
                <a 
                  href="https://github.com/stefandoss22-jpg/stefandoss22-jpg.github.io/blob/master/public/Indiana%20Wesleyan%20Diploma.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="lg" className="mt-3">
                    View Diploma (PDF)
                  </Button>
                </a>
              </div>

              {/* Transcript */}
              <div className="text-center mb-5 p-4 border rounded">
                <h3>Official Transcript</h3>
                <p className="text-muted">Full academic record from Indiana Wesleyan University</p>
                <a 
                  href="https://github.com/stefandoss22-jpg/stefandoss22-jpg.github.io/blob/master/public/McClendon_Stefan_2836675_12_13_2025.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="lg" className="mt-3">
                    View Full Transcript (PDF)
                  </Button>
                </a>
              </div>

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

export default Education;
export { Education };