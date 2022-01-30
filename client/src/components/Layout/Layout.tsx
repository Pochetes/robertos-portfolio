import * as React from "react"
import { Global } from "@emotion/react"

import Navbar from "./Navbar"

type LayoutProps = {
    children: React.ReactNode
    className?: string
}

const Layout = ({ children, className = `` }: LayoutProps) => (
    <React.Fragment>
        <Global 
            styles={(t) => ({
                "*": {
                    boxSizing: `inherit`,
                    "&:before": {
                        boxSizing: `inherit`,
                    },
                    "&:after": {
                        boxSizing: `inherit`,
                    },
                },
                html: {
                    fontSize: `18px`,
                    WebkitTextSizeAdjust: `100%`,
                },
                img: {
                    borderStyle: `none`,
                },
                pre: {
                    fontFamily: `monospace`,
                    fontSize: `1em`,
                },
                "[hidden]": {
                    display: `none`,
                },
                "::selection": {
                    backgroundColor: `red`,
                    color: `black`,
                },
            })}
        />
        <Navbar />
        <main className={className}>{children}</main>
    </React.Fragment>
)

export default Layout