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
                <img src={Banner1} className='h-[30rem] md:h-[40rem] w-full relative bg-cover' alt="" />
                <div className='banner flex justify-center items-center absolute top-[30%] md:top-[38%] left-[10%] md:left-[10%]'>
                    <div className='space-y-4'>
                        <h1 className='text-xl md:text-5xl font-bold text-[#E5C597]'>Premium Luxury Flats</h1>
                        <p className='pr-10 md:pr-20 text-sm md:text-2xl text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ex labore earum! Doloremque quisquam doloribus quidem, illo, perferendis ut laudantium nostrum hic nesciunt dolorum soluta a eos incidunt saepe! Officiis.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Banner2} className='h-[30rem] md:h-[40rem] w-full relative bg-cover' alt="" />
                <div className='banner flex justify-center items-center absolute top-[30%] md:top-[38%] left-[10%] md:left-[10%]'>
                    <div className='space-y-4'>
                        <h1 className='text-xl md:text-5xl font-bold text-[#E5C597]'>Exotic Penthouses</h1>
                        <p className='pr-10 md:pr-20 text-sm md:text-2xl text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ex labore earum! Doloremque quisquam doloribus quidem, illo, perferendis ut laudantium nostrum hic nesciunt dolorum soluta a eos incidunt saepe! Officiis.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Banner3} className='h-[30rem] md:h-[40rem] w-full relative bg-cover' alt="" />
                <div className='banner flex justify-center items-center absolute top-[30%] md:top-[38%] left-[10%] md:left-[10%]'>
                    <div className='space-y-4'>
                        <h1 className='text-xl md:text-5xl font-bold text-[#E5C597]'>Exclusive Private Islands</h1>
                        <p className='pr-10 md:pr-20 text-sm md:text-2xl text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ex labore earum! Doloremque quisquam doloribus quidem, illo, perferendis ut laudantium nostrum hic nesciunt dolorum soluta a eos incidunt saepe! Officiis.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Banner