import * as React from "react"
import Navbar from "./Navbar"
import CopyRight from "./Copyright"

type LayoutProps = {
    children: React.ReactNode
    className?: string
}

const Layout = ({ children, className = "" }: LayoutProps) => (
    <React.Fragment>
        <div className="min-h-screen flex flex-col font-sans font-semibold text-textWhite bg-sadBlue">
            <Navbar />
            <main className={className}>{children}</main>
            <CopyRight />
        </div>
    </React.Fragment>
)

export default Layout