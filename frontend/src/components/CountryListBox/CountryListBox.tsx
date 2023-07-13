import Input from '../Input/Input'

import { CountriesListInterface } from './CountryListBoxInterface'
import { countriesList } from './countriesList'
import { useState } from 'react'
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'

import './CountryListBox.scss'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import { InputInterface } from 'src/components/Input/InputInterface'

const CountryListBox = ({ onChange, value, placeholder }: InputInterface) => {
    const [country, setCountry] = useState<CountriesListInterface>({
        name: 'Moldova',
        dial_code: '+373',
        code: 'MD'
    })
    const [search, setSearch] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleList = () => {
        setIsOpen(!isOpen)
    }

    const changeCountry = (item: CountriesListInterface) => {
        setCountry(item)
        setIsOpen(false)
    }

    const changeSearch = (x: string) => {
        setSearch(x)
    }

    return (
        <div className='countryList'>
            <div className='countryList-selected' onClick={toggleList}>
                <span className={`fi fi-${country.code.toLowerCase()} countryList-selected-flag`} />
                <span className='countryList-selected-dial'>{country.dial_code}</span>
                <div className='countryList-selected-icon'>
                    {isOpen ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
                </div>
            </div>
            {isOpen && (
                <div className='countryList-list'>
                    <div className='countryList-list-search'>
                        <Input placeholder='Сăutare' value={search} onChange={changeSearch} />
                    </div>
                    {countriesList
                        .filter((item) => item.name.includes(search))
                        .map((item) => {
                            return (
                                <div className='countryList-list-item' onClick={() => changeCountry(item)}>
                                    <span className={`fi fi-${item.code.toLowerCase()} countryList-list-item-flag`} />
                                    <div className='countryList-list-item-name'>{item.name}</div>
                                    <div className='countryList-list-item-dial'>{item.dial_code}</div>
                                </div>
                            )
                        })}
                </div>
            )}
            <div className='countryList-input'>
                <Input placeholder={placeholder} onChange={onChange} value={value} />
            </div>
        </div>
    )
}

export default CountryListBox
