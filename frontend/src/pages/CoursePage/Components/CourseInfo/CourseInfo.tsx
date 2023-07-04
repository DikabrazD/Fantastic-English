import { FaCheck } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react'
import { useMeasure } from 'src/hooks/useMeasure'
import { CourseDetailInterface } from '../../CoursePageInterface'

import './CourseInfo.scss'

const CourseInfo = ({ data }: { data: CourseDetailInterface }) => {
    const [showDetails, setShowDetails] = useState<boolean>(false)
    const [heightDetailsRef, heightDetails] = useMeasure()
    const styleDetails = useSpring({
        opacity: showDetails ? 1 : 0,
        height: showDetails ? heightDetails : 0,
        overflow: 'hidden'
    })

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }

    return (
        <div className='info'>
            <h2 className='info-header'>CE VEI ÎNVĂȚA LA ACEST CURS</h2>
            <div className='info-main'>
                <p className='info-main-text'>{data.info.main.text}</p>
                <ul className='info-main-skills'>
                    {data.info.main.skills?.map((item, index) => {
                        return (
                            <li className='info-main-skills-item' key={index}>
                                <div className='info-main-skills-item-icon'>
                                    <FaCheck className='image' />
                                </div>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='info-showDetails' onClick={toggleDetails}>
                <div className='info-showDetails-icon'>
                    <HiOutlineArrowNarrowRight className='image' />
                </div>
                <p className='info-showDetails-text'>Vezi mai multe detaii...</p>
            </div>
            <animated.div style={styleDetails}>
                <div ref={heightDetailsRef} className='info-details'>
                    {data?.info.details.map((item) => {
                        return (
                            <div key={item.id} className='info-details-item'>
                                <h3 className='info-details-item-name'>{item.name}</h3>
                                <div className='info-details-item-wrapper'>
                                    {item.sections.map((item) => {
                                        if (item.type === 'text')
                                            return (
                                                <p className='info-details-item-wrapper-text' key={item.id}>
                                                    {item.text}
                                                </p>
                                            )
                                        else {
                                            return (
                                                <ul className='info-details-item-wrapper-skills' key={item.id}>
                                                    {item.skills.map((item, index) => {
                                                        return (
                                                            <li
                                                                key={index}
                                                                className='info-details-item-wrapper-skills-item'
                                                            >
                                                                <div className='info-details-item-wrapper-skills-item-icon'>
                                                                    <FaCheck className='image' />
                                                                </div>
                                                                {item}
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </animated.div>
        </div>
    )
}

export default CourseInfo
