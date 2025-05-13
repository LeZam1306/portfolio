import { motion } from "motion/react"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

const Header = () => {
    return <>
        <motion.header 
            className="header"
            initial={{y: -100}}
            animate={{
                y: 0, 
                transition: { 
                    delay: 0.4,
                    duration: 0.4,
                    ease: "easeOut"
                }
            }}
            exit={{
                y: -100,
                transition: {
                    delay: 0,
                    duration: 0.1,
                    ease: "easeIn"
                }
            }}
        >
            <Link to='/'>
                <ArrowLeft size='28' className="header__arrow"/>
            </Link>
            <nav className="header__nav">
                <Link to="/competences">Compétences</Link>
                <Link to="/projets">Projets</Link>
                <Link to="/propos">À propos</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </motion.header>
    </>
}

export default Header