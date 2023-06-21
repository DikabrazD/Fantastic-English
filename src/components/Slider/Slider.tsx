import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Slider.scss'
import { Swiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { SliderInterface } from './SliderInterface'

function Slider({ breakpoints, children }: SliderInterface) {
    return (
        <Swiper
            spaceBetween={15}
            pagination={{
                dynamicBullets: true
            }}
            breakpoints={breakpoints}
            loop={true}
            autoHeight={true}
            navigation={true}
            modules={[Navigation, Pagination]}
            centeredSlides={true}
        >
            {children}
        </Swiper>
    )
}

export default Slider
