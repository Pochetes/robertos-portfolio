import React, { useContext } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import ThemeContext from '../../contexts/themeContext';


const Experience = ({ children, icon, iconColor, date }) => {
    const { theme } = useContext(ThemeContext);
    const darkColor = "#171717" // slate-800
    const lightColor = "#f3f4f6" // gray-100

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={
                theme === 'dark' ? 
                { background: darkColor, color: lightColor, borderRadius: '20px' } 
                : { background: lightColor, color: darkColor, borderRadius: '20px' }
            }
            contentArrowStyle={
                theme === 'dark' ?
                { borderRight: `7px solid ${darkColor}` }
                : { borderRight: `7px solid ${lightColor}` }
            }
            date={date}
            iconStyle={{ background: iconColor, color: '#fff' }}
            icon={icon}
        >
            {children}
        </VerticalTimelineElement>
    )
}

export default Experience
