import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Section = styled.section`
  padding: 80px 20px;
  background: #0d0d0d;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary || '#ffffff'};
  margin-bottom: 16px;
`;

const SubHeading = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary || '#cccccc'};
  margin-bottom: 40px;
  text-align: center;
  max-width: 720px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
`;

const Card = styled.div`
  background: linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(10, 10, 10, 0.8));
  border: 1px solid ${({ theme }) => theme.primary || '#06b6d4'};
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(6, 182, 212, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px ${({ theme }) => theme.primary || '#06b6d4'};
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid ${({ theme }) => theme.primary || '#06b6d4'};
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.text_primary || '#ffffff'};
  font-size: 18px;
  margin-bottom: 8px;
  text-align: center;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text_secondary || '#aaaaaa'};
  font-size: 14px;
  text-align: center;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  border-radius: 999px;
  text-decoration: none;
  transition: 0.3s ease;
  box-shadow: 0 0 10px #06b6d4;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #3b82f6;
  }

  svg {
    margin-left: 8px;
  }
`;

const certifications = [
  {
    title: "NPTEL - Affective Computing",
    image: "/nptel.jpg", // 📁 Add inside public/certificates/
    description: "Completed with Elite+Silver certification from IIIT Delhi.",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs04/Course/NPTEL25CS04S44320480704201960.pdf"
  },
  {
    title: "Empowerthon'25",
    image: "/vit.jpg",
    description: "Finalist at vit chennai empowerthon.",
    link: "https://www.linkedin.com/in/nitish-malaichamy-b7281727b/overlay/1746252757908/single-media-viewer/?profileId=ACoAAERJVsYBzTsgUY2X4vs6yES1GT17N4i634Y"
  },
  {
    title: "Machine learning : AI, Python & R + ChatGPT Prize [2025]",
    image: "/udemy.jpg",
    description: "Successfully completed the course",
    link: "https://www.udemy.com/certificate/UC-5315eaf5-ad10-4824-b04d-3ab013c645f6/"
  },
  {
    title: "Postman API Fundamentals Student Expert",
    image: "/po (1).jpg",
    description: "Successfully studies basics of api and its properties in postman platform.",
    link: "https://badgr.com/public/assertions/zv0p0o-sRNurWtvjGHCNJQ"
  },
  {
    title: "AWS AI/ML Scholarship",
    image: "/aws (1).jpg",
    description: "Completed the machinelearning foundations from udacity aiml and waiting for assessment link for AWS AIML Schloarship.",
    link: "/aiml udacity.pdf"
  },
  {
    title: "Tata Crucible Quiz 2025",
    image: "/un (1).jpg",
    description: "Participated in tata crucible quize.",
    link: "https://unstop.com/certificate-preview/b32ab5e9-1491-47ca-9944-2ef77c2b6bd2?utm_campaign="
  },
  {
    title: "NPTEL - Big Data Computing",
    image: "/nptel.jpg",
    description: "Completed with Elite certification from IIT Kanpur.",
    link: "https://www.linkedin.com/in/nitish-malaichamy-b7281727b/details/certifications/1732631084507/single-media-viewer/?profileId=ACoAAERJVsYBzTsgUY2X4vs6yES1GT17N4i634Y"
  },
  {
    title: "Google Cloud Badges",
    image: "/go.jpg",
    description: "Actively participated in google cloud events organised by college and completed relevant badges.",
    link: "https://developers.google.com/profile/badges/community/innovators/cloud/getcertified"
  },
  {
    title: "NPTEL - Block Chain and its Applications",
    image: "/nptel.jpg",
    description: "Completed with Elite certification from IIT Kharagpur.",
    link: "https://www.linkedin.com/in/nitish-malaichamy-b7281727b/details/certifications/1817726811/multiple-media-viewer/?profileId=ACoAAERJVsYBzTsgUY2X4vs6yES1GT17N4i634Y&treasuryMediaId=1715509679632"
  },
  
];

const Certifications = () => {
  return (
    <Section id="certifications">
      <Heading>Certifications</Heading>
      <SubHeading>Industry-recognized certifications that validate my skills and learning journey.</SubHeading>
      <Grid>
        {certifications.map((cert, index) => (
          <Card key={index}>
            <CertificateImage src={cert.image} alt={cert.title} />
            <Content>
              <Title>{cert.title}</Title>
              <Description>{cert.description}</Description>
              {cert.link && (
                <Button href={cert.link} target="_blank" rel="noopener noreferrer">
                  View Certificate <FaExternalLinkAlt />
                </Button>
              )}
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Certifications;
