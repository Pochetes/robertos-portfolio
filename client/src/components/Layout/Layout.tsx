import * as React from "react"
import Navbar from "./Navbar/Navbar"
import CopyRight from "./Copyright"

type LayoutProps = {
    children: React.ReactNode
    className?: string
}

const Layout = ({ children, className = "" }: LayoutProps) => (
    <React.Fragment>
        <div className="min-h-screen min-w-screen overflow-auto font-sans font-bold bg-black text-white">
            <Navbar />
            <main className={className}>{children}</main>
            <CopyRight />
        </div>
    </React.Fragment>
)

export default Layout