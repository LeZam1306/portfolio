import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

const Layout = () => {
    const location = useLocation()
    const [tick, setTick] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(t => t + 1) // force un re-render
    }, 2000)

    return () => clearInterval(interval) // nettoyage
  }, [])


    return <>
        {location.pathname != "/" && <Header />}
        <main>
            <Outlet />
        </main>
    </>
}

export default Layout