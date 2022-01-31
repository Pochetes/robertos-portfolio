import * as React from "react"
import Navbar from "./Navbar"
import Contacts from "./Contacts"
import CopyRight from "./Copyright"

type LayoutProps = {
    children: React.ReactNode
    className?: string
}

const Layout = ({ children, className = `` }: LayoutProps) => (
    <React.Fragment>
        <Navbar />
        <main className={className}>{children}</main>
        <CopyRight />
    </React.Fragment>
)

export default Layout