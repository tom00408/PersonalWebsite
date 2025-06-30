import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const ContactContainer = styled.div`
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

const Contact = () => (
  <ContactContainer>
    <Title
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      Kontakt
    </Title>
    <Text
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      Du möchtest mit mir zusammenarbeiten oder hast Fragen? Schreib mir gerne eine Nachricht!
    </Text>
  </ContactContainer>
)

export default Contact 