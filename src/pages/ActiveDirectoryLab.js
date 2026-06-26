import React from "react";
import "./ActiveDirectoryLab.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta } from "../content_option";

galleryItems = [
    {
      step: "Step 1",
      title: "Server Promotion",
      img: "https://raw.githubusercontent.com/stefandoss22/stefandoss22-jpg.github.io/master/PortPhoto/%234%20!%20%40%20Promote%20Server%20to%20Domain%20Controller.jpg",
      caption: "Promoted a Windows Server instance to Domain Controller using Server Manager."
    },
    {
      step: "Step 2",
      title: "Domain Creation",
      img: "https://raw.githubusercontent.com/stefandoss22/stefandoss22-jpg.github.io/master/PortPhoto/%235%20!%20%40%20Domain%20Creation.jpg",
      caption: "Created a new Active Directory forest (stefan.com)."
    },
    {
      step: "Step 3",
      title: "User & Group Management",
      img: "https://raw.githubusercontent.com/stefandoss22/stefandoss22-jpg.github.io/master/PortPhoto/%2310%20!%202%20%40%20Add%20User%20to%20Group%20(Members%20Of%20tab).jpg",
      caption: "Created users and added them to the HelpDesk security group."
    },
    {
      step: "Step 4",
      title: "User Account Creation",
      img: "https://raw.githubusercontent.com/stefandoss22/stefandoss22-jpg.github.io/master/PortPhoto/%238%20!%202%20%40%20Create%20a%20User%20Complete.jpg",
      caption: "Provisioned lab user accounts with login names, display names, and group memberships."
    },
    {
      step: "Step 5",
      title: "Password Reset",
      img: "https://raw.githubusercontent.com/stefandoss22/stefandoss22-jpg.github.io/master/PortPhoto/%2311%20!%202%20%40%20Password%20Reset%20(Reset%20Password%20Option).jpg",
      caption: "Performed password resets and account management as part of service desk operations."
    }
  ];

export const ActiveDirectoryLab = () => {
    return (
        <HelmetProvider>
            <Container className="About-header ad-lab-page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>
                        Enterprise Active Directory Home Lab | {meta.title}
                    </title>
                    <meta
                        name="description"
                        content="Windows Server Domain Controller home lab with AD DS, DNS, user provisioning, security groups, and PowerShell administration."
                    />
                </Helmet>

                <Row className="mb-4 mt-3 pt-md-3">
                    <Col lg="10">
                        <div className="ad-lab-header">
                            <h1 className="display-4 mb-4">
                                Enterprise Active Directory Domain Controller Home
                                Lab
                            </h1>
                            <hr className="t_border my-4 ml-0 text-left" />
                            <p className="ad-lab-lead">
                                A hands-on Windows Server lab simulating enterprise
                                identity management. Deployed Active Directory Domain
                                Services, configured DNS, provisioned users and
                                security groups, and practiced service desk workflows
                                including PowerShell-based password resets.
                            </p>
                            <div className="ad-lab-meta">
                                <span className="ad-lab-tag">Windows Server</span>
                                <span className="ad-lab-tag">Active Directory</span>
                                <span className="ad-lab-tag">DNS</span>
                                <span className="ad-lab-tag">PowerShell</span>
                                <span className="ad-lab-tag">Identity Management</span>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg="10">
                        <div className="ad-lab-gallery">
                            {galleryItems.map((item, index) => (
                                <figure
                                    key={index}
                                    className="ad-lab-gallery-item"
                                >
                                    <div className="ad-lab-step">{item.step}</div>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <figcaption className="ad-lab-caption">
                                        <strong>{item.title}</strong>
                                        {item.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>

                        <div className="ad-lab-actions">
                            <Link to="/portfolio" className="ad-lab-back-btn">
                                Back to Portfolio
                                <span className="ring one"></span>
                                <span className="ring two"></span>
                                <span className="ring three"></span>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    );
};
