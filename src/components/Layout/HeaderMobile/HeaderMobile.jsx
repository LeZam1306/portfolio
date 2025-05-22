import { ArrowLeft, UserRound, Rocket, Send, UserCog } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const HeaderMobile = () => {
    const location = useLocation()

    return (
        <header className="header-mobile">
            {location.pathname !== "/" && 
                <Link to='/'>
                    <ArrowLeft size={36} className="header-mobile__arrow"/>
                </Link>
            }
            <nav className="header-mobile__nav">
                <Link to="/competences"><UserCog /></Link>
                <Link to="/projets"><Rocket /></Link>
                <Link to="/propos"><UserRound /></Link>
                <Link to="/contact"><Send /></Link>
            </nav>
        </header>
    )
}

export default HeaderMobile