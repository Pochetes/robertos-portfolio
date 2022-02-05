import * as React from "react"
import Navbar from "./Navbar"
import CopyRight from "./Copyright"

type LayoutProps = {
    children: React.ReactNode
    className?: string
}

const Layout = ({ children, className = "flex-grow container mx-auto px-4 sm:px-6" }: LayoutProps) => (
    <React.Fragment>
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className={className}>{children}</main>
            <CopyRight />
        </div>
    </React.Fragment>
)

export default Layout