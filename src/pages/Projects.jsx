import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
`

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const Text = styled(motion.p)`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 600px;
`

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 2.5rem;
  color: #fff;
  background: rgba(255,255,255,0.08);
  border-radius: 1.2rem;
  padding: 0.7rem 1.5rem;
  font-weight: 500;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background 0.2s;
  &:hover {
    background: rgba(255,255,255,0.18);
  }
`

const Projects = () => (
  <ProjectsContainer>
    <Title
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      Projekte
    </Title>
    <Text
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      Hier findest du bald eine Auswahl meiner spannendsten Projekte mit modernen Technologien und kreativen Lösungen.
    </Text>
    <ProjectLink
      href="https://wordle.tomtiedtke.de"
      target="_blank"
      rel="noopener noreferrer"
    >
      👉 wordle.tomtiedtke.de
    </ProjectLink>
  </ProjectsContainer>
)

export default Projects 