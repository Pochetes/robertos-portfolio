import React, { useContext } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import ThemeContext from '../../contexts/ThemeContext';

const Experience = ({ children, icon, darkIconColor, lightIconColor, date }) => {
    const { theme } = useContext(ThemeContext);
    const darkColor = "#171717" // slate-800
    const lightColor = "#f3f4f6" // gray-100

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={
                theme === 'dark' ? 
                { background: darkColor, color: lightColor, borderRadius: '20px' } 
                : { background: "#f9fafb", color: darkColor, borderRadius: '20px' }
            }
            contentArrowStyle={
                theme === 'dark' ?
                { borderRight: `7px solid ${darkColor}` }
                : { borderRight: `7px solid ${lightColor}` }
            }
            date={date}
            iconStyle={
                theme === 'dark' ?
                { background: darkIconColor, color: '#fff' }
                : { background: lightIconColor, color: '#fff' }
            }
            icon={icon}
        >
            {children}
        </VerticalTimelineElement>
    )
}

export default Experience
