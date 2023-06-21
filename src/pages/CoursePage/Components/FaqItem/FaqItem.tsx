import { useMeasure } from 'src/hooks/useMeasure'
import { FaqItemInterface } from './FaqItemInterface'
import { animated, useSpring } from '@react-spring/web'
import { HiChevronRight } from 'react-icons/hi'

import './FaqItem.scss'

const FaqItem = ({ data, isActive, handleClick }: FaqItemInterface) => {
    const [heightRef, height] = useMeasure()
    const style = useSpring({
        height: isActive ? height : 0,
        opacity: isActive ? 1 : 0,
        overflow: 'hidden'
    })

    return (
        <li className='item'>
            <h4 onClick={handleClick} className='item-title'>
                <div className={`${isActive ? 'item-title-icon-toBottom' : ''} item-title-icon`}>
                    <HiChevronRight className='image' />
                </div>
                {data.title}
            </h4>
            <animated.div style={style}>
                <div ref={heightRef} className='item-text'>
                    {data.text}
                </div>
            </animated.div>
        </li>
    )
}

export default FaqItem
