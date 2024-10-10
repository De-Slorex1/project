import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import cardOne from '/card1.png';
import cardTwo from '/card2.png';
import cardThree from '/card3.png';
import cardFour from '/card4.png';
import cardFive from '/card5.png';

const Cards = () => {
    return ( 
        <div className="bg-[url('/bg.png')] bg-cover bg-no-repeat w-full">
            <div className='w-full py-12'>
                    <Swiper
                    spaceBetween={2}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Scrollbar, A11y, Autoplay]}
                    navigation
                    scrollbar={{ draggable: true }}
                    autoplay={true}
                    className='w-full'
                    >
                        <SwiperSlide><img className='w-[300px] h-[200px]' src={cardOne} alt={cardOne} /></SwiperSlide>
                        <SwiperSlide><img className='w-[300px] h-[200px]' src={cardTwo} alt={cardTwo} /></SwiperSlide>
                        <SwiperSlide><img className='w-[300px] h-[200px]' src={cardThree} alt={cardThree} /></SwiperSlide>
                        <SwiperSlide><img className='w-[300px] h-[200px]' src={cardFour} alt={cardFour} /></SwiperSlide>
                        <SwiperSlide><img className='w-[300px] h-[200px]' src={cardFive} alt={cardFive} /></SwiperSlide>
                    </Swiper>      
            </div>
        </div>
    );
}
 
export default Cards;