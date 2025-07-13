import React from "react";
import styled from "styled-components";

// ✅ Experience Data
const experiences = [
  {
    company: "Indira Gandhi Center For Atomic Research",
    role: "Full Stack Intern in PHP",
    duration: "May 2025 - Jun 2025",
    description:
      "Successful in implementing two real-time modules for their High Performance Computing Systems at Computer Division of IGCAR, Dept of Atomic Energy.",
    logo: "/dae (1).jpg",
  },
  {
    company: "Infosys Springboard",
    role: "Python Developer Intern",
    duration: "November 2024 - January 2025",
    description:
      "Developed a Python-based Automated Bank Cheque Processor that streamlines cheque verification and data extraction using Gemini API for OCR and intelligent processing. Built a Streamlit-based UI for user interaction and integrated MongoDB for secure data storage.",
    logo: "/info (1) (1).jpg",
  },
  {
    company: "Girl Script Summer of Code",
    role: "Contributor",
    duration: "October 2024",
    logo: "/gsoc.jpg",
    description:"Tried Contributing real world projects as open source."
  },
  {
    company: "LetsUpgrade",
    role: "Student Ambassador",
    duration: "Sep 2024 - Oct 2024",
    description:
      "Successful in making more than 75 students enroll in the courses and secured a silver student kit from the company.",
    logo: "/up (1).jpg",
  },
];

// ✅ Styled Components
const Section = styled.section`
  scroll-margin-top: 7rem;
  padding: 80px 20px;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 38px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary || "#fff"};
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary || "#aaa"};
  text-align: center;
  max-width: 720px;
  margin-bottom: 40px;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #854ce6;
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled.div`
  padding: 20px 30px;
  position: relative;
  width: 50%;
  left: ${({ isLeft }) => (isLeft ? "0" : "50%")};
  text-align: ${({ isLeft }) => (isLeft ? "right" : "left")};
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    text-align: left;
    padding-left: 40px;
    padding-right: 20px;
  }
`;

const Dot = styled.div`
  position: absolute;
  top: 26px;
  ${({ isLeft }) => (isLeft ? "right: -10px;" : "left: -10px;")}
  width: 18px;
  height: 18px;
  background: #854ce6;
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(133, 76, 230, 0.6);

  @media (max-width: 768px) {
    left: -10px;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #eee;
  box-shadow: 0 4px 15px rgba(133, 76, 230, 0.1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(133, 76, 230, 0.3);
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    border-radius: 6px;
    margin-bottom: 12px;
    background: white;
    padding: 4px;
  }

  h3 {
    margin: 0;
    font-size: 20px;
    color: #fff;
  }

  h4 {
    margin: 6px 0;
    font-weight: 400;
    font-size: 15px;
    color: #bbb;
  }

  p {
    font-size: 14px;
    color: #aaa;
    margin-top: 10px;
    line-height: 1.5;
  }
`;

// ✅ Main Experience Component
const Experience = () => {
  return (
    <Section id="experience">
      <Title>Experience</Title>
      <Description>
        My journey through impactful roles and hands-on projects across tech companies.
      </Description>
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem key={index} isLeft={index % 2 === 0}>
            <Dot isLeft={index % 2 === 0} />
            <Card>
              {exp.logo && <img src={exp.logo} alt={`${exp.company} logo`} />}
              <h3>{exp.company}</h3>
              <h4>{exp.role} • {exp.duration}</h4>
              {exp.description && <p>{exp.description}</p>}
            </Card>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};

export default Experience;
