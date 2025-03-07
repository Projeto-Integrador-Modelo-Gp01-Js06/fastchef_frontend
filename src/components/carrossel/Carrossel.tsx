import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carrossel.css";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img
                        className="swiper-slide-img" 
                        src="https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/img_sobre(1).jpeg?updatedAt=1740711359967" 
                        alt="Carrossel - Slide 01"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="swiper-slide-img" 
                        src="https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club.jpg?updatedAt=1740708514461" 
                        alt="Carrossel - Slide 02"
                    />
                </SwiperSlide>

                <SwiperSlide>
                <img 
                    className="swiper-slide-img"
                    src="https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/asian-sporty-athlete-waving-ropes-as-part-fat-burning-workout-fitness.jpg?updatedAt=1740708516802" 
                    alt="Carrossel - Slide 03"
                />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel