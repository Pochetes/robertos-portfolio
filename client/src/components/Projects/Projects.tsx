import * as React from "react"
import Project from "./Project"

const Projects = () => (
    <section>
        <div className="min-h-screen flex flex-col items-center space-y-10">
            <h1 className="text-4xl md:text-5xl text-shadow-main">Projects</h1>
            <Project
                title="Navi Web Companion"
                description="Some Google Chrome Extension"
                image="../../../static"
                link="https://github.com/Pochetes/repo1"
            />
            {/* <Project
                title="SmartClaims Blockchain Application"
                description="Some Blockchain application for insurance claims"
                image="../../../static"
                link="https://github.com/Pochetes/repo2"
            />
            <Project
                title="Portfolio API"
                description="Some API I made for my portfolio website"
                image="../../../static"
                link="https://github.com/Pochetes/repo3"
            />
            <Project
                title="RealTalk Application"
                description="Some messaging application using socket programming principles"
                image="../../../static"
                link="https://github.com/Pochetes/repo4"
            /> */}
        </div>
    </section>
)

export default Projects