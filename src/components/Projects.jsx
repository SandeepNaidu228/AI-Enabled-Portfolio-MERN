import React from 'react';
import styled from 'styled-components';
import { projects } from "./Constants";
 // if importing from outside components

import ProjectCard from "./ProjectCard";


const Section = styled.section`
  padding: 80px 20px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 10px;
`;

const SubHeading = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 720px;
  text-align: center;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
`;

const Projects = () => {
  return (
    <Section id="projects">
      <Heading>Projects</Heading>
      <SubHeading>Some of the best projects I’ve worked on recently. Click below to explore more.</SubHeading>
      <Grid>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
