import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import tomImg from '../assets/tom.jpg'

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 4vw 0 6vw 0;
  min-height: 80vh;
`

const Hero = styled(motion.section)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: 40vh;
  padding-left: 6vw;
  padding-right: 6vw;
  gap: 3.5rem;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`

const HeroImg = styled(motion.img)`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.10);
  border: 3px solid #fff2;
  background: #222;
  @media (max-width: 800px) {
    width: 110px;
    height: 110px;
  }
`

const Name = styled(motion.h1)`
  font-size: clamp(2.5rem, 7vw, 6rem);
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  letter-spacing: -2px;
  background: linear-gradient(90deg, #fff 60%, #a0a0a0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Claim = styled(motion.p)`
  font-size: 1.7rem;
  color: #bdbdbd;
  margin-bottom: 2.5rem;
  max-width: 600px;
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3vw 4vw;
  padding: 0 6vw;
  align-items: stretch;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const Card = styled(motion.div)`
  background: rgba(255,255,255,0.03);
  border-radius: 2.5rem;
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.08);
  padding: 3rem 2.5rem 2.5rem 2.5rem;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  border: 1.5px solid rgba(255,255,255,0.07);
`

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
`

const CardText = styled.p`
  font-size: 1.1rem;
  color: #bdbdbd;
  margin: 0;
`

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin: 0;
  padding: 0;
  list-style: none;
`

const TechItem = styled.li`
  background: rgba(255,255,255,0.08);
  border-radius: 1.2rem;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.5px;
`

const Quote = styled(motion.blockquote)`
  font-size: 1.3rem;
  color: #fff;
  font-style: italic;
  margin: 0;
  padding-left: 1.5rem;
  border-left: 3px solid #fff2;
`

const Home = () => (
  <HomeWrapper>
    <Hero
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <HeroImg
        src={tomImg}
        alt="Tom Tiedtke"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      />
      <HeroText>
      <Name>Tom Tiedtke</Name>
      <Claim>Websites, Mobile-Apps & Prozessoptimierung</Claim>
      </HeroText>
    </Hero>
    <Grid>
      <Card
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{ gridRow: '1 / span 2' }}
      >
        <CardTitle>Tech Stack</CardTitle>
        <TechList>
          <TechItem>Swift</TechItem>
          <TechItem>Java</TechItem>
          <TechItem>JavaScript</TechItem>
          <TechItem>Node.js</TechItem>
          <TechItem>React</TechItem>
          <TechItem>Vue</TechItem>
          <TechItem>Firebase</TechItem>
        </TechList>
      </Card>
     
      <Card
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <CardTitle>Letztes Projekt</CardTitle>
        <CardText>
          Der MTV Geismar Fan Shop <br />
          <span style={{ color: '#fff', fontWeight: 600 }}>Stack:</span> Vite, React, Firebase
        </CardText>
        <a
          href="https://shop.mtvgeismar.de"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            color: '#fff',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '1.2rem',
            padding: '0.7rem 1.5rem',
            fontWeight: 500,
            fontSize: '1.1rem',
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
          onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
        >
          👉 Zur Website
        </a>
      </Card>
    </Grid>
  </HomeWrapper>
)

export default Home 