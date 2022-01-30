import * as React from "react"
import Navbar from "./Navbar"

type LayoutProps = {
    children: React.ReactNode
    className?: string
}

const Layout = ({ children, className = `` }: LayoutProps) => (
    <React.Fragment>
        <Navbar />
        <main className={className}>{children}</main>
    </React.Fragment>
)

export default Layout