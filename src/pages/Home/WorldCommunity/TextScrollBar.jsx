import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
// const TextScrollBar = () => {
//   return (
// <div className="snap-mandatory snap-x ...">
//   <div className="snap-center ...">
//     <h1 className="absolute lg:text-[75px] text-[30px] lg:-ml-[235px] font-medium text-center	md:text-center ">
//       Real-Time with <span className="italic">Machine Learning.</span>
//     </h1>
//   </div>
//   <div className="snap-center ...">
//     <h1 className="absolute lg:text-[75px] text-[30px] lg:-ml-[235px] font-medium text-center	md:text-center ">
//       Real-Time with <span className="italic">Machine Learning.</span>
//     </h1>
//   </div>
//   <div className="snap-center ...">
//     <h1 className="absolute lg:text-[75px] text-[30px] lg:-ml-[235px] font-medium text-center	md:text-center ">
//       Real-Time with <span className="italic">Machine Learning.</span>
//     </h1>
//   </div>
// </div>

const TextScrollBar = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={190}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-24 text-white"
        breakpoints={{
            // Define breakpoints for different screen sizes
            300: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
                slidesPerView:2,
                spaceBetween:190
            },
          }}
      >
           <SwiperSlide>
         
         <h1 className="lg:text-[65px] text-[30px] lg:-ml-[235px] font-medium text-center	md:text-center ">
            Real-Time with <span className="italic">Machine Learning.</span>
         
         </h1>
       </SwiperSlide>
        <SwiperSlide>
         
          <h1 className="lg:text-[65px] text-[30px] lg:-ml-[235px] font-medium text-center	md:text-center ">
             Real-Time with <span className="italic">Machine Learning.</span>
          
          </h1>
        </SwiperSlide>
        <SwiperSlide>
         
          <h1 className="lg:text-[65px] text-[30px] lg:-ml-[235px] font-medium text-center	md:text-center ">
             Real-Time with <span className="italic">Machine Learning.</span>
          
          </h1>
        </SwiperSlide>
  
  
      </Swiper>
    </>
  );
};

export default TextScrollBar;
