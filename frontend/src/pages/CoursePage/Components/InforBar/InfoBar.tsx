import { useState, useEffect } from 'react'

import { InfoBarInterface } from './InfoBarInterface'
import { ButtonType } from 'src/components/Button/ButtonInterface'

import Button from 'src/components/Button/Button'

import './InfoBar.scss'

const InfoBar = ({ name, price }: InfoBarInterface) => {
    const [showBar, setShowBar] = useState<boolean>(false)
    const [isContainer, setIsContainer] = useState<boolean>(true)
    const dropBarClass = showBar ? 'show-bar' : 'hide-bar'

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 200) {
                setShowBar(false)
            } else {
                setShowBar(true)
            }
        }

        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setIsContainer(false)
            } else {
                setIsContainer(true)
            }
        }

        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`bar ${dropBarClass}`}>
            <div className={`bar-wrapper ${isContainer ? 'container' : ''}`}>
                <div className='bar-wrapper-info'>
                    <h4 className='bar-wrapper-info-name'>{name}</h4>
                    <p className='bar-wrapper-info-price'>{price} MDL / 60 min</p>
                </div>
                <div className='bar-wrapper-actions'>
                    <Button type={ButtonType.changeToWhite} text='Vreau La Curs' />
                </div>
            </div>
        </div>
    )
}

export default InfoBar
