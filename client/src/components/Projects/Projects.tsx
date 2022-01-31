import * as React from "react"
import Layout from "../Layout/Layout"
import Project from "./Project"

const Projects = () => (
    <Layout>
        <section>
            <h1 className="text-center">Projects</h1>
            <div className="flex flex-row flex-auto">
                <Project
                    title="Navi Web Companion"
                    description="Some Google Chrome Extension"
                    image="../../../static"
                    link="https://github.com/Pochetes/repo1"
                />
                <Project
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
                />
            </div>
        </section>
    </Layout>
)

export default Projects