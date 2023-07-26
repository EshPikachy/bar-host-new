import React from "react";
// Import Swiper React components
import { useNavigate, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_URL } from '../../config';

// Import Swiper styles
import "swiper/css";



export default function Slider({ ingredients }) {

    const {pathname} = useLocation()
    const navigate = useNavigate()
    

    const renderSlides = ingredients?.map((el, index) => (
        <SwiperSlide onClick={()=>{
            navigate(`${pathname}/ingredients/${el}`)
        }} key={index}>
            <img src={`${IMG_URL}${el}.png`} alt="" />
        </SwiperSlide>
    ))
    return (
        <>
            <Swiper className="mySwiper">
                {renderSlides}
            </Swiper>
        </>
    );
}
