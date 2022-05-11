import React, { useContext } from "react"
import Experience from "./Experience"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import ThemeContext from "../../contexts/themeContext";
import { GlobeIcon } from "@heroicons/react/outline";

const Experiences = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section id="experiences-header">
            <h1 className="sm:mt-10 pb-20 text-5xl text-center md:text-7xl lg:mb-10 text-shadow-main">Experiences</h1>
            <VerticalTimeline lineColor={theme === 'dark' ? '#f3f4f6' : '#171717'}>
                {/* First Experience */}
                <Experience 
                icon={<GlobeIcon />}
                darkIconColor="#80ffdb"
                lightIconColor="#ffba08"
                date="June 2022 - Present"
                >
                    <h3 className="text-semibold text-2xl">FBU University Engineering Intern</h3>
                    <h5 className="mt-1 text-gray-600">Meta Platforms Inc.</h5>
                </Experience>
                {/* Second Experience */}
                <Experience
                icon={<GlobeIcon />}
                darkIconColor="#64dfdf"
                lightIconColor="#faa307"
                date="June 2021 - August 2021"
                >
                    <h3 className="text-semibold text-2xl">Software Engineer Intern</h3>
                    <h5 className="mt-1 text-gray-600">Liberty Mutual Insurance</h5>
                </Experience>
                {/* Third Experience */}
                <Experience 
                icon={<GlobeIcon />}
                darkIconColor="#48bfe3"
                lightIconColor="#f48c06"
                date="June 2021 - July 2021"
                >
                    <h3 className="text-semibold text-2xl">Accelerate Software Track Participant</h3>
                    <h5 className="mt-1 text-gray-600">IBM</h5>
                </Experience>
                {/* Inception Element */}
                <VerticalTimelineElement
                    iconStyle={
                        theme === 'dark' ?
                        { background: '#6930c3', color: '#fff' }
                        : { background: '#370617', color: '#fff' } 
                    }
                    icon={<GlobeIcon />}
                    date="Inception.."
                />
            </VerticalTimeline>
        </section>
    )
}

export default Experiences
