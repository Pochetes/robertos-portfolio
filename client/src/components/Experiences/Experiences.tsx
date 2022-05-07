import React, { useContext } from "react"
import Experience from "./Experience"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import ThemeContext from "../../contexts/ThemeContext";
import NavContext from "../../contexts/NavContext";
import { GlobeIcon } from "@heroicons/react/outline";

const Experiences = () => {
    const { theme } = useContext(ThemeContext);
    const { navRefs } = useContext(NavContext)
    const experiencesRef = navRefs[3]

    return (
        <section>
            <h1 ref={experiencesRef} className="sm:mt-10 pb-20 text-5xl text-center md:text-7xl lg:mb-10 text-shadow-main">Experiences</h1>
            <VerticalTimeline lineColor={theme === 'dark' ? '#f3f4f6' : '#171717'}>
                {/* First Experience */}
                <Experience 
                icon={<GlobeIcon />}
                darkIconColor="#80ffdb"
                lightIconColor="#ffba08"
                date="June 2022 - Present"
                >
                    <h3 className="text-semibold text-2xl">Meta Platforms Inc.</h3>
                    <h5 className="mt-1 text-gray-600">Facebook University Engineering Intern</h5>
                </Experience>
                {/* Second Experience */}
                <Experience
                icon={<GlobeIcon />}
                darkIconColor="#64dfdf"
                lightIconColor="#faa307"
                date="June 2021 - August 2021"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-600">Software Engineer Intern</h5>
                </Experience>
                {/* Third Experience */}
                <Experience 
                icon={<GlobeIcon />}
                darkIconColor="#48bfe3"
                lightIconColor="#f48c06"
                date="June 2021 - July 2021"
                >
                    <h3 className="text-semibold text-2xl">IBM</h3>
                    <h5 className="mt-1 text-gray-600">Accelerate Software Track Participant</h5>
                </Experience>
                {/* Fourth Experience */}
                <Experience 
                icon={<GlobeIcon />}
                darkIconColor="#5390d9"
                lightIconColor="#e85d04"
                date="2012 - present"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-600">Software Engineer Intern</h5>
                </Experience>
                {/* Fifth Experience */}
                <Experience 
                icon={<GlobeIcon />}
                darkIconColor="#5e60ce"
                lightIconColor="#dc2f02"
                date="2012 - present"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-600">Software Engineer Intern</h5>
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
