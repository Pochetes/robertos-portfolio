import * as React from "react"
import Experience from "./Experience"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { GlobeIcon } from "@heroicons/react/outline";
import 'react-vertical-timeline-component/style.min.css';

const Experiences = () => (
    <section>
        <h1 className="md:mt-10 text-5xl text-center md:text-7xl lg:mb-10 text-shadow-main">My Experiences</h1>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#171717', color: '#f3f4f6', borderRadius: '20px' }}
                contentArrowStyle={{ borderRight: '7px solid  #171717' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={""}
            >
                <h3 className="text-semibold text-2xl">Meta Platforms Inc</h3>
                <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#171717', color: '#f3f4f6', borderRadius: '20px' }}
                contentArrowStyle={{ borderRight: '7px solid  #171717' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={""}
            >
                <h3 className="text-semibold text-2xl">Meta Platforms Inc</h3>
                <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#171717', color: '#f3f4f6', borderRadius: '20px' }}
                contentArrowStyle={{ borderRight: '7px solid  #171717' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={""}
            >
                <h3 className="text-semibold text-2xl">Meta Platforms Inc</h3>
                <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#171717', color: '#f3f4f6', borderRadius: '20px' }}
                contentArrowStyle={{ borderRight: '7px solid  #171717' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={""}
            >
                <h3 className="text-semibold text-2xl">Meta Platforms Inc</h3>
                <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#171717', color: '#f3f4f6', borderRadius: '20px' }}
                contentArrowStyle={{ borderRight: '7px solid  #171717' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={""}
            >
                <h3 className="text-semibold text-2xl">Meta Platforms Inc</h3>
                <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#171717', color: '#f3f4f6', borderRadius: '20px' }}
                contentArrowStyle={{ borderRight: '7px solid  #171717' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={""}
            >
                <h3 className="text-semibold text-2xl">Meta Platforms Inc</h3>
                <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#171717', color: '#f3f4f6', borderRadius: '20px' }}
                contentArrowStyle={{ borderRight: '7px solid  #171717' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={""}
            >
                <h3 className="text-semibold text-2xl">Meta Platforms Inc</h3>
                <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#171717', color: '#f3f4f6', borderRadius: '20px' }}
                contentArrowStyle={{ borderRight: '7px solid  #171717' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={""}
            >
                <h3 className="text-semibold text-2xl">Meta Platforms Inc</h3>
                <h5 className="mt-1 text-gray-500">Software Engineer Intern</h5>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={""}
            />
        </VerticalTimeline>
    </section>
)

export default Experiences