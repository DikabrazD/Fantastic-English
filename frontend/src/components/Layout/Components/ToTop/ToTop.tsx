import { useState, useEffect } from 'react'
import { FaAngleUp } from 'react-icons/fa'

import './ToTop.scss'

const ToTop = () => {
    const [prev, setPrev] = useState<number>(0)
    const [showToTop, setShowToTop] = useState<boolean>(false)

    const toTopClass = showToTop ? 'show-toTop' : 'hide-toTop'

    const moveToTop = () => {
        window.scrollTo({ top: 0 })
    }

    useEffect(() => {
        const handleScroll = () => {
            if (prev < window.scrollY) {
                setShowToTop(false)
                setPrev(window.scrollY)
            } else {
                if (window.scrollY < 200) {
                    setShowToTop(false)
                } else {
                    setShowToTop(true)
                }
                setPrev(window.scrollY)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [prev])

    return (
        <div onClick={moveToTop} className={`toTop ${toTopClass}`}>
            <div className='toTop-icon'>
                <FaAngleUp className='image' />
            </div>
        </div>
    )
}

export default ToTop
