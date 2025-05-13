import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import { AnimatePresence } from "motion/react"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const Layout = () => {
    const location = useLocation()

    return <>
        <AnimatePresence>
            {location.pathname != "/" && <Header />}
        </AnimatePresence>
        <main>
            <Outlet />
        </main>
    </>
}

export default Layout