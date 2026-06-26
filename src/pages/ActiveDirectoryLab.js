import React from "react";
import "./ActiveDirectoryLab.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta } from "../content_option";

const galleryItems = [
  {
    step: "Step 1",
    title: "Promote Server to Domain Controller",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/PortPhoto/master/%234%20!%20%40%20Promote%20Server%20to%20Domain%20Controller.jpg",
    caption: "Promoted a Windows Server to Domain Controller using the Active Directory Domain Services Configuration Wizard."
  },
  {
    step: "Step 2",
    title: "Domain Creation",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/PortPhoto/master/%235%20!%20%40%20Domain%20Creation.jpg",
    caption: "Created a new Active Directory forest with root domain stefan.com."
  },
  {
    step: "Step 3",
    title: "Successful Domain Controller Setup",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/PortPhoto/master/%236%20!%20%40%20Successful%20Domain%20Controller%20Setup.jpg",
    caption: "AD DS and DNS roles successfully installed. Domain Controller is now operational."
  },
  {
    step: "Step 4",
    title: "Active Directory Users and Computers",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/PortPhoto/master/%237%20!%20%40%20Active%20Directory%20Users%20and%20Computers.jpg",
    caption: "Opened ADUC console showing the new stefan.com domain structure."
  },
  {
    step: "Step 5",
    title: "Create User Account",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/PortPhoto/master/%238%20!%20%40%20Create%20a%20User.jpg",
    caption: "Creating new user account (Mike Jones) via New Object - User wizard."
  },
  {
    step: "Step 5b",
    title: "User Created Successfully",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/PortPhoto/master/%238%20!%202%20%40%20Create%20a%20User%20Complete.jpg",
    caption: "Mike Jones user account now visible in the Users container."
  },
  {
    step: "Step 6",
    title: "Create Security Group",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/PortPhoto/master/%239%20!%20%40%20Create%20a%20Security%20Group.jpg",
    caption: "Created HelpDesk security group for delegated administrative tasks."
  },
  {
    step: "Step 6b",
    title: "Security Group Created",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/PortPhoto/master/%239%20!%202%20%40%20Create%20a%20Security%20Group.jpg",
    caption: "HelpDesk group now visible in Active Directory."
  },
  {
    step: "Step 7",
    title: "Add User to Security Group",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/PortPhoto/master/%2310%20!%20%40%20Add%20User%20to%20Group%20(Properties).jpg",
    caption: "Opening user properties to manage group membership."
  },
  {
    step: "Step 7b",
    title: "Member Of Tab",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/PortPhoto/master/%2310%20!%202%20%40%20Add%20User%20to%20Group%20(Members%20Of%20tab).jpg",
    caption: "Navigating to the Member Of tab."
  },
  {
    step: "Step 7c",
    title: "HelpDesk Group Added",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/PortPhoto/master/%2310%20!%203%20%40%20Add%20to%20Group%20(Helpdesk%20Group%20Added).jpg",
    caption: "Successfully added Mike Jones to the HelpDesk security group."
  },
  {
    step: "Step 8",
    title: "Disabled User Account (FIXED)",
    caption: "Unlocked a disabled user account in Active Directory.",
    videoEmbed: `<div style="position:relative; width:100%; height:0px; padding-bottom:56.250%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/jata3n?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>`
  },
  {
    step: "Step 9",
    title: "PowerShell - Create New User",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/PortPhoto/master/Add%20New%20User%20(PowerShell).jpg",
    caption: "Creating user accounts using New-ADUser cmdlet in PowerShell."
  },
  {
    step: "Step 10",
    title: "PowerShell - Set Password",
    img: "https://raw.githubusercontent.com/stefandoss22-jpg/PortPhoto/master/Add%20Account%20Password%20(PowerShell).jpg",
    caption: "Setting account password using Set-ADAccountPassword cmdlet."
  }
];

const ActiveDirectoryLab = () => {
  return (
    <HelmetProvider>
      <Container className="About-header ad-lab-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Enterprise Active Directory Home Lab | {meta.title}</title>
          <meta name="description" content="Full Windows Server Domain Controller lab with AD DS, user/group management, and PowerShell automation." />
        </Helmet>

        <Row className="mb-4 mt-3 pt-md-3">
          <Col lg="10">
            <div className="ad-lab-header">
              <h1 className="display-4 mb-4">Enterprise Active Directory Domain Controller Home Lab</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <p className="ad-lab-lead">Hands-on lab covering domain setup, identity management, and automation.</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="10">
            <div className="ad-lab-gallery">
              {galleryItems.map((item, index) => (
                <figure key={index} className="ad-lab-gallery-item">
                  <div className="ad-lab-step">{item.step}</div>
                  
                  {item.videoEmbed ? (
                    <div dangerouslySetInnerHTML={{ __html: item.videoEmbed }} />
                  ) : (
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      loading="lazy"
                      style={{ 
                        width: "100%", 
                        height: "auto", 
                        maxHeight: "780px", 
                        objectFit: "contain",
                        border: "1px solid #444",
                        backgroundColor: "#1e1e1e"
                      }} 
                    />
                  )}

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

export default ActiveDirectoryLab;
export { ActiveDirectoryLab };