import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import HeaderMobile from "./HeaderMobile/HeaderMobile"
import { useLocation } from "react-router-dom"

const Layout = () => {
    const location = useLocation()

    return <>
        <HeaderMobile />
        {location.pathname != "/" && <Header />}
        <main>
            <Outlet />
        </main>
    </>
}

export default Layout