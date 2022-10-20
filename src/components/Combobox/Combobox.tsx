import { useRef, useEffect, useState } from 'react'
import { ComboboxInterface, ValueInterface } from './ComboboxInterface'
import './Combobox.scss'

const Combobox = ({ list }: ComboboxInterface) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [value, setValue] = useState<ValueInterface>({ id: 0, name: '' })
    const comboRef: any = useRef()

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (comboRef.current && !comboRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [comboRef])

    const toggleList = () => {
        setIsOpen((prevState) => !prevState)
    }

    const changeValue = (item: ValueInterface) => {
        setValue(item)
        toggleList()
    }

    return (
        <div ref={comboRef} className='combobox'>
            <div onClick={toggleList} className='combobox-input'>
                <input
                    className='combobox-input'
                    type='text'
                    placeholder='Cum preferi să comunicăm?'
                    disabled
                    value={value.name}
                />
            </div>

            {isOpen && (
                <ul className='combobox-list'>
                    <li className='combobox-list-head'>Cum preferi să comunicăm?</li>
                    {list.map((item) => {
                        return (
                            <li key={item.id} onClick={() => changeValue(item)} className='combobox-list-item'>
                                {item.name}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default Combobox
