import { useState, useEffect } from 'react'

import { InfoBarInterface } from './InfoBarInterface'
import { ButtonType } from 'src/components/Button/ButtonInterface'

import Button from 'src/components/Button/Button'

import './InfoBar.scss'

const InfoBar = ({ name, price }: InfoBarInterface) => {
    const [showBar, setShowBar] = useState<boolean>(false)
    const dropBarClass = showBar ? 'show-bar' : 'hide-bar'

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 200) {
                setShowBar(false)
            } else {
                setShowBar(true)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`bar ${dropBarClass}`}>
            <div className='bar-wrapper container'>
                <div className='bar-wrapper-info'>
                    <h4 className='bar-wrapper-info-name'>{name}</h4>
                    <p className='bar-wrapper-info-price'>{price} MDL / 60 min</p>
                </div>
                <div className='bar-wrapper-actions'>
                    <div className='bar-wrapper-actions-arrow'>
                        <Button type={ButtonType.arrow} text='Rezervă un loc (300 MDL)' />
                    </div>
                    <Button type={ButtonType.changeToWhite} text='Vreau La Curs' />
                </div>
            </div>
        </div>
    )
}

export default InfoBar
