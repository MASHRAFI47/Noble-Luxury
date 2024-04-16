import '../../App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import Banner1 from '../../../src/assets/images/Banner1.jpg'
import Banner2 from '../../../src/assets/images/Banner2.jpg'
import Banner3 from '../../../src/assets/images/Banner3.jpg'
import { A11y, Navigation, Pagination, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            navigation
            pagination={{ clickable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src={Banner1} className='h-[30rem] md:h-[40rem] w-full relative bg-cover' alt="" data-aos="fade-up" />
                <div className='banner flex justify-center items-center absolute top-[30%] md:top-[38%] left-[10%] md:left-[10%]'>
                    <div className='space-y-4' data-aos="fade-down">
                        <h1 className='text-xl md:text-5xl font-bold text-[#E5C597]' data-aos="fade-down">Premium Luxury Flats</h1>
                        <p className='pr-10 md:pr-20 text-sm md:text-2xl text-white' data-aos="fade-left" data-aos-delay="300">Discover unparalleled elegance and sophistication with our collection of premium luxury flats. Designed with meticulous attention to detail, these residences offer a lifestyle of unparalleled comfort and exclusivity.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Banner2} className='h-[30rem] md:h-[40rem] w-full relative bg-cover' alt="" />
                <div className='banner flex justify-center items-center absolute top-[30%] md:top-[38%] left-[10%] md:left-[10%]'>
                    <div className='space-y-4'>
                        <h1 className='text-xl md:text-5xl font-bold text-[#E5C597]'>Exotic Penthouses</h1>
                        <p className='pr-10 md:pr-20 text-sm md:text-2xl text-white'>Indulge in the epitome of luxury living with our exquisite collection of exotic penthouses. Perched high above the city skyline or nestled amidst breathtaking natural landscapes, these penthouses offer a lifestyle of unparalleled opulence and exclusivity.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Banner3} className='h-[30rem] md:h-[40rem] w-full relative bg-cover' alt="" />
                <div className='banner flex justify-center items-center absolute top-[30%] md:top-[38%] left-[10%] md:left-[10%]'>
                    <div className='space-y-4'>
                        <h1 className='text-xl md:text-5xl font-bold text-[#E5C597]'>Exclusive Private Islands</h1>
                        <p className='pr-10 md:pr-20 text-sm md:text-2xl text-white'>Escape to your own secluded paradise with our exclusive private island retreat. Nestled amidst pristine turquoise waters and surrounded by lush tropical landscapes, this private island offers a unique and unparalleled luxury living experience.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Banner