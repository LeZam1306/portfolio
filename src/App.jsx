import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "motion/react"
import Home from "./pages/Home/Home"
import Skills from "./pages/Skills/Skills"
import Layout from "./components/Layout/Layout"
import Projets from "./pages/Projets/Projets"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"

const AnimatedRoutes = () => {
    const location = useLocation()
    
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />} />
                    <Route path="competences" element={<Skills />} />
                    <Route path="projets" element={<Projets />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="propos" element={<About />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    )
}

export default App