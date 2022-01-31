import * as React from "react"
import Layout from "../Layout/Layout"
import Experience from "./Experience"

const Experiences = () => (
    <Layout>
        <section>
            <h1>Skills & Experiences</h1>
            <div className="flex flex-row flex-auto">
                <div>
                    <img src="" alt="Skill 1" />
                    <img src="" alt="Skill 2" />
                    <img src="" alt="Skill 3" />
                    <img src="" alt="Skill 4" />
                    <img src="" alt="Skill 5" />
                    <img src="" alt="Skill 6" />
                    <img src="" alt="Skill 7" />
                    <img src="" alt="Skill 8" />
                    <img src="" alt="Skill 9" />
                    <img src="" alt="Skill 10" />
                </div>
                <div className="ml-10 basis-1/4">
                    <Experience
                        year="2022"
                        position="Software Engineer Intern"
                        company="Meta Platforms"
                    />
                    <Experience
                        year="2022"
                        position="Software Engineer Intern"
                        company="Meta Platforms"                    
                    />
                    <Experience
                        year="2021"
                        position="Software Engineer Intern"
                        company="Twilio"
                    />
                    <Experience
                        year="2020"
                        position="Software Engineer Intern"
                        company="Robinhood"
                    />
                </div>
            </div>
        </section>
    </Layout>
)

export default Experiences