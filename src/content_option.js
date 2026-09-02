import headshot from "./assets/images/headshot.png";

const logotext = "STEFAN";

const meta = {
    title: "Stefan Doss-McClendon",
    description: "IT Professional | CompTIA Certified | Aspiring Full Stack Developer — Indianapolis, IN",
};

const introdata = {
    title: "I'm Stefan Doss-McClendon",
    animated: {
        first: "I deliver exceptional IT support",
        second: "I thrive on turning technical issues into happy users",
        third: "I'm the guy who makes tech behave and users smile",
    },
    description: "Service Desk Superhero | CompTIA Certified | Turn tech headaches into tech wins",
    your_img_url: headshot,
};

const dataabout = {
    title: "About Me",
    aboutme: "IT professional with strong experience in operations, compliance, technical support, and process improvement. Recently completed a Bachelor of Science in Information Technology. Passionate about technology, problem-solving, and delivering reliable IT solutions. Based in Indianapolis, IN, with CompTIA A+, Network+, Security+, and ITIL 4 Foundation certifications.",
};

const worktimeline = [
    {
        jobtitle: "Senior Field Operations & Compliance Specialist",
        where: "Home River Property Services",
        date: "2021 – Present",
    },
    {
        jobtitle: "Front Office Operations & Client Service Coordinator",
        where: "Community Alliance",
        date: "2020 – 2021",
    },
    {
        jobtitle: "Substitute Teacher",
        where: "St. Patrick Catholic School",
        date: "2016 – 2020",
    },
];

const skills = [
    { name: "IT Operations", value: 90 },
    { name: "Technical Support", value: 92 },
    { name: "Compliance & Documentation", value: 88 },
    { name: "Incident Management", value: 90 },
    { name: "CompTIA A+ Network+ Security+", value: 85 },
    { name: "ITIL 4", value: 82 },
    { name: "Training & Leadership", value: 87 },
];

const services = [
    {
        title: "IT Operations & Compliance",
        description: "Manage field operations, enforce compliance standards, and ensure consistent, audit-ready service delivery across teams and locations.",
    },
    {
        title: "Technical Support & Troubleshooting",
        description: "Resolve hardware, software, and network issues with structured diagnostics and a focus on minimal downtime for end users.",
    },
    {
        title: "Documentation & Process Improvement",
        description: "Build SOPs, training guides, and technical documentation that streamline workflows and reduce recurring incidents.",
    },
    {
        title: "Incident Management & Client Support",
        description: "Triage, escalate, and resolve incidents while keeping stakeholders informed with clear, timely communication.",
    },
];

const dataportfolio = [
    {
        img: "https://www.itarian.com/images/ticketing-system/zendesk-ticketing-system.png?w=400&h=400&fit=crop",
        description: "Zendesk IT Service Desk Simulation – Built ticket workflows integrated with Active Directory for password resets and account management.",
        link: "/projects/zendesk-ticketing-lab" 
    },
    {
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
        description: "Enterprise Active Directory Home Lab – Deployed a full Windows Server Domain Controller environment with AD DS, DNS, user provisioning, and security group management.",
        link: "/projects/active-directory-lab"
    }
];

const contactConfig = {
    YOUR_EMAIL: "stefandoss22@gmail.com",
    YOUR_FONE: "(317) 914-7175",
    description: "Based in Indianapolis, IN. Open to IT roles, technical support opportunities, and full stack development projects. Send a message and I will get back to you promptly.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/stefandoss22-jpg",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
};

const resumeLink = "https://docs.google.com/document/d/1G53k4c0DUMI6FZMaVzVkFmBwS9upGUMc/edit?usp=sharing&ouid=105225628214393904732&rtpof=true&sd=true";

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    resumeLink,
    logotext,
};