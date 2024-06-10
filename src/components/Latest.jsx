import React from 'react'
import toplayer from '../assets/images/PNG/latest-top-layer.png'
import bottomlayer from '../assets/images/PNG/latest-bottom-layer.png'
import Commonheading from '../common/Commonheading'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import slide1 from '../assets/images/PNG/slider-1.webp'
import slide2 from '../assets/images/PNG/slider-2.webp'
import slide3 from '../assets/images/PNG/slider-3.webp'
import slide4 from '../assets/images/PNG/slider-4.webp'
import slide5 from '../assets/images/PNG/slider-5.webp'
import { Left, Right } from '../common/Icon';

function Latest() {
    return (
        <>
            <div className="bg-orange">
                <div className=""><img src={toplayer} alt="toplayer" className='w-100 mt-neg-3' /></div>
                <div className="container pb-latest">
                    <Commonheading text="See Our Latest Work" color=" text-white" align="text-center" />
                    <div className=" position-relative">
                        <Swiper className=' mt-57'
                            slidesPerView={2.5}
                            spaceBetween={0}
                            centeredSlides={true}
                            pagination={{
                                clickable: true,
                            }}
                            effect={'coverflow'}
                            navigation={{ nextEl: ".swiper-btn-next", prevEl: ".swiper-btn-prev" }}
                            modules={[EffectCoverflow, Pagination, Navigation]}
                            loop={true}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 100,
                                depth: 150,
                                modifier: 2,
                                slideShadows: false,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 0,
                                },
                                992: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 0,
                                },
                            }}
                        >
                            <div className="swiper-wrapper">
                                <SwiperSlide className="gallery-slide">
                                    <div><img src={slide1} alt="slide1" /></div>
                                </SwiperSlide>
                                <SwiperSlide className="gallery-slide">
                                    <div><img src={slide2} alt="slide1" /></div>
                                </SwiperSlide>
                                <SwiperSlide className="gallery-slide">
                                    <div><img src={slide3} alt="slide1" /></div>
                                </SwiperSlide>
                                <SwiperSlide className="gallery-slide">
                                    <div><img src={slide4} alt="slide1" /></div>
                                </SwiperSlide>
                                <SwiperSlide className="gallery-slide">
                                    <div><img src={slide5} alt="slide5" /></div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                        <div className="swiper-btn swiper-btn-prev justify-content-center align-items-center position-absolute next-btn-pos d-none d-lg-flex cursor-pointer">
                            <Left />
                        </div>
                        <div className="swiper-btn swiper-btn-next justify-content-center align-items-center position-absolute prev-btn-pos d-none d-lg-flex cursor-pointer">
                            <Right />
                        </div>
                    </div>

                </div>
                <div className=""><img src={bottomlayer} alt="toplayer" className='w-100 mb-neg-3' /></div>
            </div >
        </>
    )
}

export default Latest