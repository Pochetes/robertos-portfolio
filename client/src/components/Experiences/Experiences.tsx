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
                {/* First Experience */}
                <Experience 
                icon={<GlobeIcon />}
                darkIconColor="#80ffdb"
                lightIconColor="#ffba08"
                date="2012 - present"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
                </Experience>
                {/* Second Experience */}
                <Experience
                icon={<GlobeIcon />}
                darkIconColor="#64dfdf"
                lightIconColor="#faa307"
                date="2012 - present"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
                </Experience>
                {/* Third Experience */}
                <Experience 
                icon={<GlobeIcon />}
                darkIconColor="#56cfe1"
                lightIconColor="#f48c06"
                date="2012 - present"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
                </Experience>
                {/* Fourth Experience */}
                <Experience 
                icon={<GlobeIcon />}
                darkIconColor="#4ea8de"
                lightIconColor="#e85d04"
                date="2012 - present"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
                </Experience>
                {/* Fifth Experience */}
                <Experience 
                icon={<GlobeIcon />}
                darkIconColor="#56cfe1"
                lightIconColor="#dc2f02"
                date="2012 - present"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
                </Experience>
                {/* Sixth Experience */}
                <Experience 
                icon={<GlobeIcon />}
                darkIconColor="#5390d9"
                lightIconColor="#d00000"
                date="2012 - present"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
                </Experience>
                {/* Seventh Experience */}
                <Experience 
                icon={<GlobeIcon />}
                darkIconColor="#6930c3"
                lightIconColor="#9d0208"
                date="2012 - present"
                >
                    <h3 className="text-semibold text-2xl">Liberty Mutual Insurance</h3>
                    <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
                </Experience>
                {/* Inception Element */}
                <VerticalTimelineElement
                    iconStyle={
                        theme === 'dark' ?
                        { background: '#7400b8', color: '#fff' }
                        : { background: '#370617', color: '#fff' } 
                    }
                    icon={""}
                    date="Inception.."
                />
            </VerticalTimeline>
        </section>
    )
}

export default Experiences
