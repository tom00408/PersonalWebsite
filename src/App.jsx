import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import styled from '@emotion/styled'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const AppContainer = styled.div`
	min-height: 100vh;
	background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
	color: #ffffff;
`

const ContentContainer = styled.main`
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
`

function App() {
	return (
		<Router>
			<AppContainer>
				<Navbar />
				<ContentContainer>
					<AnimatePresence mode="wait">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</AnimatePresence>
				</ContentContainer>
			</AppContainer>
		</Router>
	)
}

export default App
