import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "motion/react"
import Home from "./pages/Home/Home"
import Skills from "./pages/Skills/Skills"
import Layout from "./components/Layout/Layout"

const AnimatedRoutes = () => {
    const location = useLocation()
    
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />} />
                    <Route path="competences" element={<Skills />} />
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