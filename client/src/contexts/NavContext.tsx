import { createContext } from "react"

const defaultContext = {
    nav: ''
}

const NavContext = createContext(defaultContext)

export default NavContext