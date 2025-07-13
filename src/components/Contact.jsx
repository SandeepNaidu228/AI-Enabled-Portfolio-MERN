import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 100px 20px;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary || '#ffffff'};
  margin-bottom: 16px;
  text-align: center;
`;

const SubHeading = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary || '#aaaaaa'};
  text-align: center;
  max-width: 700px;
  margin-bottom: 40px;
`;

const FormWrapper = styled(motion.form)`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.primary || '#06b6d4'};
  border-radius: 20px;
  padding: 32px;
  width: 100%;
  max-width: 520px;
  box-shadow: 0 8px 30px rgba(6, 182, 212, 0.2);
`;

const Input = styled.input`
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.primary || '#06b6d4'};
  background: transparent;
  color: ${({ theme }) => theme.text_primary || '#fff'};
  font-size: 16px;
  width: 100%;
  transition: 0.3s ease;

  &:focus {
    border-color: #3b82f6;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.primary || '#06b6d4'};
  background: transparent;
  color: ${({ theme }) => theme.text_primary || '#fff'};
  font-size: 16px;
  min-height: 140px;
  resize: none;
  transition: 0.3s ease;

  &:focus {
    border-color: #3b82f6;
    outline: none;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  color: white;
  padding: 14px;
  border: none;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: 0.3s ease;
  box-shadow: 0 0 10px #06b6d4;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #3b82f6;
  }
`;

const Field = styled.div`
  margin-bottom: 20px;
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Heading>Contact Me</Heading>
      <SubHeading>
        Have a project in mind, a collaboration opportunity, or just want to say hello?
        Drop me a message below.
      </SubHeading>
      <FormWrapper
        action="https://formspree.io/f/myzjrrlz"
        method="POST"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Field>
          <Input type="text" name="name" placeholder="Your Name" required />
        </Field>
        <Field>
          <Input type="email" name="email" placeholder="Your Email" required />
        </Field>
        <Field>
          <TextArea name="message" placeholder="Your Message" required />
        </Field>
        <Button type="submit">🚀 Send Message</Button>
      </FormWrapper>
    </Section>
  );
};

export default Contact;
