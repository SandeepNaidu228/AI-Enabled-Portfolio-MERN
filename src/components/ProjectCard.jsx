import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Card = styled.div`
  background: linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(10, 10, 10, 0.8));
  border: 1px solid ${({ theme }) => theme.primary || '#00ffff'};
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 24px rgba(0, 255, 255, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 40px ${({ theme }) => theme.primary || '#00ffff'};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  border-bottom: 1px solid ${({ theme }) => theme.primary || '#00ffff'};
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.text_primary || '#ffffff'};
  font-size: 22px;
  margin-bottom: 10px;
  text-align: center;
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.text_secondary || '#bbbbbb'};
  font-size: 15px;
  line-height: 1.6;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 14px;
`;

const Button = styled.a`
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  color: #fff;
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  box-shadow: 0 0 10px #06b6d4;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 20px #3b82f6;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} alt={project.title} />
      <Content>
        <Title>{project.title}</Title>
        <Desc>{project.description || "A modern, scalable project built using cutting-edge tools and best practices in design, AI, and engineering."}</Desc>
        <Buttons>
          <Button href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> View Code
          </Button>
          <Button href={project.demo} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Live Demo
          </Button>
        </Buttons>
      </Content>
    </Card>
  );
};

export default ProjectCard;
