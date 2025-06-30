import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const AboutContainer = styled.div`
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

const About = () => (
  <AboutContainer>
    <Title
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      Über mich
    </Title>
    <Text
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      Ich bin Tom Tiedtke, ein leidenschaftlicher Full Stack Developer mit Fokus auf moderne Webtechnologien, kreative Lösungen und beeindruckende Nutzererlebnisse.
    </Text>
  </AboutContainer>
)

export default About 