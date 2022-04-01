import React, { useContext } from "react"
import Experience from "./Experience"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import ThemeContext from "../../contexts/themeContext";
import { GlobeIcon } from "@heroicons/react/outline";

const Experiences = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section>
            <h1 className="md:mt-10 text-5xl text-center md:text-7xl lg:mb-10 text-shadow-main">My Experiences</h1>
            <VerticalTimeline lineColor={theme === 'dark' ? '#f3f4f6' : '#171717'}>
                <Experience 
                icon={<GlobeIcon />}
                iconColor="rgb(233, 30, 99)"
                date="2012 - present"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
                </Experience>
                <Experience
                icon={<GlobeIcon />}
                iconColor="rgb(233, 30, 99)"
                date="2012 - present"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
                </Experience>
                <Experience 
                icon={<GlobeIcon />}
                iconColor="rgb(233, 30, 99)"
                date="2012 - present"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
                </Experience>
                <Experience 
                icon={<GlobeIcon />}
                iconColor="rgb(233, 30, 99)"
                date="2012 - present"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
                </Experience>
                <Experience 
                icon={<GlobeIcon />}
                iconColor="rgb(233, 30, 99)"
                date="2012 - present"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
                </Experience>
                <Experience 
                icon={<GlobeIcon />}
                iconColor="rgb(233, 30, 99)"
                date="2012 - present"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
                </Experience>
                <Experience 
                icon={<GlobeIcon />}
                iconColor="rgb(233, 30, 99)"
                date="2012 - present"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
                </Experience>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={""}
                />
            </VerticalTimeline>
        </section>
    )
}

export default Experiences
