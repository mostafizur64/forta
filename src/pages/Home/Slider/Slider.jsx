import { FaHive } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Container from "../../../components/Container/Container";

const Slider = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper lg:mt-[57px] mt-24"
      >
        <SwiperSlide className="sliders">
          <div className="flex flex-row gap-[40px] px-4  border-1  border-[#fff]">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="57"
                viewBox="0 0 61 57"
                fill="none"
                className="border border-[#7154E5] rounded-lg"
              >
                <g filter="url(#filter0_f_138_678)">
                  <g clip-path="url(#clip0_138_678)">
                    <g filter="url(#filter1_f_138_678)">
                      <rect
                        x="-4.00232"
                        y="8.45532"
                        width="63.3392"
                        height="40.0962"
                        rx="4.29337"
                        transform="rotate(-35.0276 -4.00232 8.45532)"
                        fill="url(#paint0_linear_138_678)"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_138_678"
                    x="0.1752"
                    y="0.634306"
                    width="60.1071"
                    height="58.3898"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="1.28801"
                      result="effect1_foregroundBlur_138_678"
                    />
                  </filter>
                  <filter
                    id="filter1_f_138_678"
                    x="-15.1961"
                    y="-39.0934"
                    width="97.2686"
                    height="91.5763"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="6.44005"
                      result="effect1_foregroundBlur_138_678"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_138_678"
                    x1="42.2921"
                    y1="17.8545"
                    x2="6.76539"
                    y2="24.3821"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7154E6" />
                    <stop offset="1" stop-color="#7154E6" stop-opacity="0" />
                  </linearGradient>
                  <clipPath id="clip0_138_678">
                    <rect
                      x="2.75122"
                      y="3.21033"
                      width="54.9551"
                      height="53.2378"
                      rx="6.86939"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute -mt-[43px] -ml-[7px] w-[55px] h-[54px] flex items-center justify-center bg-[#7154E5] rounded-lg">
                <FaHive className="text-[#FFFFFF] w-[19px] h-[25px]" />
              </div>
            </div>
            <div>
              <h2 className="text-[#E6E6E6]">Compound</h2>
              <p className="text-[#9F9FA6] w-[290px]">
                Our superior net extension mixed with Forta Community’s
                real-time risk detection will allow customers to really feel
                assured.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="sliders"
          style={{
            background:
              "linear-gradient(168deg, #292840 0%, #11111C 49.08%, #0E0F16 100%)",
          }}
        >
          <div className="flex flex-row gap-[40px] px-4  border-1  border-[#fff]">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="57"
                viewBox="0 0 61 57"
                fill="none"
                className="border border-[#7154E5] rounded-lg"
              >
                <g filter="url(#filter0_f_138_678)">
                  <g clip-path="url(#clip0_138_678)">
                    <g filter="url(#filter1_f_138_678)">
                      <rect
                        x="-4.00232"
                        y="8.45532"
                        width="63.3392"
                        height="40.0962"
                        rx="4.29337"
                        transform="rotate(-35.0276 -4.00232 8.45532)"
                        fill="url(#paint0_linear_138_678)"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_138_678"
                    x="0.1752"
                    y="0.634306"
                    width="60.1071"
                    height="58.3898"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="1.28801"
                      result="effect1_foregroundBlur_138_678"
                    />
                  </filter>
                  <filter
                    id="filter1_f_138_678"
                    x="-15.1961"
                    y="-39.0934"
                    width="97.2686"
                    height="91.5763"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="6.44005"
                      result="effect1_foregroundBlur_138_678"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_138_678"
                    x1="42.2921"
                    y1="17.8545"
                    x2="6.76539"
                    y2="24.3821"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7154E6" />
                    <stop offset="1" stop-color="#7154E6" stop-opacity="0" />
                  </linearGradient>
                  <clipPath id="clip0_138_678">
                    <rect
                      x="2.75122"
                      y="3.21033"
                      width="54.9551"
                      height="53.2378"
                      rx="6.86939"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute -mt-[43px] -ml-[7px] w-[55px] h-[54px] flex items-center justify-center bg-[#7154E5] rounded-lg">
                <FaHive className="text-[#FFFFFF] w-[19px] h-[25px]" />
              </div>
            </div>
            <div>
              <h2 className="text-[#E6E6E6]">Blockfence</h2>
              <p className="text-[#9F9FA6] w-[290px]">
              We ‘re proud to provide the most cutting -edge protectionto ZenGo wallet user by surfacing real-time Forta.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sliders">
          <div className="flex flex-row gap-[40px] px-4  border-1  border-[#fff]">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="57"
                viewBox="0 0 61 57"
                fill="none"
                className="border border-[#7154E5] rounded-lg"
              >
                <g filter="url(#filter0_f_138_678)">
                  <g clip-path="url(#clip0_138_678)">
                    <g filter="url(#filter1_f_138_678)">
                      <rect
                        x="-4.00232"
                        y="8.45532"
                        width="63.3392"
                        height="40.0962"
                        rx="4.29337"
                        transform="rotate(-35.0276 -4.00232 8.45532)"
                        fill="url(#paint0_linear_138_678)"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_138_678"
                    x="0.1752"
                    y="0.634306"
                    width="60.1071"
                    height="58.3898"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="1.28801"
                      result="effect1_foregroundBlur_138_678"
                    />
                  </filter>
                  <filter
                    id="filter1_f_138_678"
                    x="-15.1961"
                    y="-39.0934"
                    width="97.2686"
                    height="91.5763"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="6.44005"
                      result="effect1_foregroundBlur_138_678"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_138_678"
                    x1="42.2921"
                    y1="17.8545"
                    x2="6.76539"
                    y2="24.3821"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7154E6" />
                    <stop offset="1" stop-color="#7154E6" stop-opacity="0" />
                  </linearGradient>
                  <clipPath id="clip0_138_678">
                    <rect
                      x="2.75122"
                      y="3.21033"
                      width="54.9551"
                      height="53.2378"
                      rx="6.86939"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute -mt-[43px] -ml-[7px] w-[55px] h-[54px] flex items-center justify-center bg-[#7154E5] rounded-lg">
                <FaHive className="text-[#FFFFFF] w-[19px] h-[25px]" />
              </div>
            </div>
            <div>
              <h2 className="text-[#E6E6E6]">Zengo</h2>
              <p className="text-[#9F9FA6] w-[290px]">
            In Lido we have tried a lot mof monitoning tools. And among the great variety of options we have chosen Forta.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="sliders">
          <div className="flex flex-row gap-[40px] px-4  border-1  border-[#fff]">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="57"
                viewBox="0 0 61 57"
                fill="none"
                className="border border-[#7154E5] rounded-lg"
              >
                <g filter="url(#filter0_f_138_678)">
                  <g clip-path="url(#clip0_138_678)">
                    <g filter="url(#filter1_f_138_678)">
                      <rect
                        x="-4.00232"
                        y="8.45532"
                        width="63.3392"
                        height="40.0962"
                        rx="4.29337"
                        transform="rotate(-35.0276 -4.00232 8.45532)"
                        fill="url(#paint0_linear_138_678)"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_138_678"
                    x="0.1752"
                    y="0.634306"
                    width="60.1071"
                    height="58.3898"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="1.28801"
                      result="effect1_foregroundBlur_138_678"
                    />
                  </filter>
                  <filter
                    id="filter1_f_138_678"
                    x="-15.1961"
                    y="-39.0934"
                    width="97.2686"
                    height="91.5763"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="6.44005"
                      result="effect1_foregroundBlur_138_678"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_138_678"
                    x1="42.2921"
                    y1="17.8545"
                    x2="6.76539"
                    y2="24.3821"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7154E6" />
                    <stop offset="1" stop-color="#7154E6" stop-opacity="0" />
                  </linearGradient>
                  <clipPath id="clip0_138_678">
                    <rect
                      x="2.75122"
                      y="3.21033"
                      width="54.9551"
                      height="53.2378"
                      rx="6.86939"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute -mt-[43px] -ml-[7px] w-[55px] h-[54px] flex items-center justify-center bg-[#7154E5] rounded-lg">
                <FaHive className="text-[#FFFFFF] w-[19px] h-[25px]" />
              </div>
            </div>
            <div>
              <h2 className="text-[#E6E6E6]">Compound</h2>
              <p className="text-[#9F9FA6] w-[290px]">
                Our superior net extension mixed with Forta Community’s
                real-time risk detection will allow customers to really feel
                assured.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="sliders">
          <div className="flex flex-row gap-[40px] px-4  border-1  border-[#fff]">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="57"
                viewBox="0 0 61 57"
                fill="none"
                className="border border-[#7154E5] rounded-lg"
              >
                <g filter="url(#filter0_f_138_678)">
                  <g clip-path="url(#clip0_138_678)">
                    <g filter="url(#filter1_f_138_678)">
                      <rect
                        x="-4.00232"
                        y="8.45532"
                        width="63.3392"
                        height="40.0962"
                        rx="4.29337"
                        transform="rotate(-35.0276 -4.00232 8.45532)"
                        fill="url(#paint0_linear_138_678)"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_138_678"
                    x="0.1752"
                    y="0.634306"
                    width="60.1071"
                    height="58.3898"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="1.28801"
                      result="effect1_foregroundBlur_138_678"
                    />
                  </filter>
                  <filter
                    id="filter1_f_138_678"
                    x="-15.1961"
                    y="-39.0934"
                    width="97.2686"
                    height="91.5763"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="6.44005"
                      result="effect1_foregroundBlur_138_678"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_138_678"
                    x1="42.2921"
                    y1="17.8545"
                    x2="6.76539"
                    y2="24.3821"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7154E6" />
                    <stop offset="1" stop-color="#7154E6" stop-opacity="0" />
                  </linearGradient>
                  <clipPath id="clip0_138_678">
                    <rect
                      x="2.75122"
                      y="3.21033"
                      width="54.9551"
                      height="53.2378"
                      rx="6.86939"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute -mt-[43px] -ml-[7px] w-[55px] h-[54px] flex items-center justify-center bg-[#7154E5] rounded-lg">
                <FaHive className="text-[#FFFFFF] w-[19px] h-[25px]" />
              </div>
            </div>
            <div>
              <h2 className="text-[#E6E6E6]">Compound</h2>
              <p className="text-[#9F9FA6] w-[290px]">
                Our superior net extension mixed with Forta Community’s
                real-time risk detection will allow customers to really feel
                assured.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sliders">
          <div className="flex flex-row gap-[40px] px-4  border-1  border-[#fff]">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="57"
                viewBox="0 0 61 57"
                fill="none"
                className="border border-[#7154E5] rounded-lg"
              >
                <g filter="url(#filter0_f_138_678)">
                  <g clip-path="url(#clip0_138_678)">
                    <g filter="url(#filter1_f_138_678)">
                      <rect
                        x="-4.00232"
                        y="8.45532"
                        width="63.3392"
                        height="40.0962"
                        rx="4.29337"
                        transform="rotate(-35.0276 -4.00232 8.45532)"
                        fill="url(#paint0_linear_138_678)"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_138_678"
                    x="0.1752"
                    y="0.634306"
                    width="60.1071"
                    height="58.3898"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="1.28801"
                      result="effect1_foregroundBlur_138_678"
                    />
                  </filter>
                  <filter
                    id="filter1_f_138_678"
                    x="-15.1961"
                    y="-39.0934"
                    width="97.2686"
                    height="91.5763"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="6.44005"
                      result="effect1_foregroundBlur_138_678"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_138_678"
                    x1="42.2921"
                    y1="17.8545"
                    x2="6.76539"
                    y2="24.3821"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7154E6" />
                    <stop offset="1" stop-color="#7154E6" stop-opacity="0" />
                  </linearGradient>
                  <clipPath id="clip0_138_678">
                    <rect
                      x="2.75122"
                      y="3.21033"
                      width="54.9551"
                      height="53.2378"
                      rx="6.86939"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute -mt-[43px] -ml-[7px] w-[55px] h-[54px] flex items-center justify-center bg-[#7154E5] rounded-lg">
                <FaHive className="text-[#FFFFFF] w-[19px] h-[25px]" />
              </div>
            </div>
            <div>
              <h2 className="text-[#E6E6E6]">Compound</h2>
              <p className="text-[#9F9FA6] w-[290px]">
                Our superior net extension mixed with Forta Community’s
                real-time risk detection will allow customers to really feel
                assured.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sliders">
          <div className="flex flex-row gap-[40px] px-4  border-1  border-[#fff]">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="57"
                viewBox="0 0 61 57"
                fill="none"
                className="border border-[#7154E5] rounded-lg"
              >
                <g filter="url(#filter0_f_138_678)">
                  <g clip-path="url(#clip0_138_678)">
                    <g filter="url(#filter1_f_138_678)">
                      <rect
                        x="-4.00232"
                        y="8.45532"
                        width="63.3392"
                        height="40.0962"
                        rx="4.29337"
                        transform="rotate(-35.0276 -4.00232 8.45532)"
                        fill="url(#paint0_linear_138_678)"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_138_678"
                    x="0.1752"
                    y="0.634306"
                    width="60.1071"
                    height="58.3898"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="1.28801"
                      result="effect1_foregroundBlur_138_678"
                    />
                  </filter>
                  <filter
                    id="filter1_f_138_678"
                    x="-15.1961"
                    y="-39.0934"
                    width="97.2686"
                    height="91.5763"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="6.44005"
                      result="effect1_foregroundBlur_138_678"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_138_678"
                    x1="42.2921"
                    y1="17.8545"
                    x2="6.76539"
                    y2="24.3821"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7154E6" />
                    <stop offset="1" stop-color="#7154E6" stop-opacity="0" />
                  </linearGradient>
                  <clipPath id="clip0_138_678">
                    <rect
                      x="2.75122"
                      y="3.21033"
                      width="54.9551"
                      height="53.2378"
                      rx="6.86939"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute -mt-[43px] -ml-[7px] w-[55px] h-[54px] flex items-center justify-center bg-[#7154E5] rounded-lg">
                <FaHive className="text-[#FFFFFF] w-[19px] h-[25px]" />
              </div>
            </div>
            <div>
              <h2 className="text-[#E6E6E6]">Compound</h2>
              <p className="text-[#9F9FA6] w-[290px]">
                Our superior net extension mixed with Forta Community’s
                real-time risk detection will allow customers to really feel
                assured.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Slider;
