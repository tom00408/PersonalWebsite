import { Link, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Nav = styled.nav`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
`

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 700px) {
    display: none;
  }
`

const NavLink = styled(motion(Link))`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #ffffff;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`

const Hamburger = styled.button`
  display: none;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1200;
    position: relative;
  }
`

const Bar = styled.span`
  height: 3px;
  width: 28px;
  background: #fff;
  margin: 4px 0;
  border-radius: 2px;
  transition: 0.3s;
  display: block;
  position: absolute;
  left: 6px;
  ${({ top }) => top && 'top: 10px;'}
  ${({ mid }) => mid && 'top: 18px;'}
  ${({ bot }) => bot && 'top: 26px;'}
`

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(20,20,20,0.97);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const OverlayLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`

const OverlayLink = styled(motion(Link))`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 1px;
  transition: color 0.2s;
  text-align: center;
  &:hover {
    color: #a0a0a0;
  }
`

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'Über mich' },
  { path: '/projects', label: 'Projekte' },
  { path: '/contact', label: 'Kontakt' }
]

const Navbar = () => {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  // Scroll-Block bei offenem Overlay
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNav = () => setOpen((v) => !v)
  const closeNav = () => setOpen(false)

  return (
    <Nav>
      <Logo
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        TT
      </Logo>
      <NavLinks>
        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ color: location.pathname === path ? '#ffffff' : '#a0a0a0' }}
            onClick={closeNav}
          >
            {label}
          </NavLink>
        ))}
      </NavLinks>
      <Hamburger aria-label="Menü öffnen" onClick={handleNav}>
        <Bar top style={{ transform: open ? 'rotate(45deg) translateY(8px)' : 'none' }} />
        <Bar mid style={{ opacity: open ? 0 : 1 }} />
        <Bar bot style={{ transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
      </Hamburger>
      <AnimatePresence>
        {open && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeNav}
          >
            <OverlayLinks>
              {navItems.map(({ path, label }) => (
                <OverlayLink
                  key={path}
                  to={path}
                  onClick={closeNav}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  style={{ color: location.pathname === path ? '#fff' : '#a0a0a0' }}
                >
                  {label}
                </OverlayLink>
              ))}
            </OverlayLinks>
          </Overlay>
        )}
      </AnimatePresence>
    </Nav>
  )
}

export default Navbar 