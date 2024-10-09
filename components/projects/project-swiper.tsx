import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

type CustomSwiperProps = {
  imageUrl: readonly (StaticImageData | string)[];
  title: string;
};

const CustomSwiper = ({ imageUrl, title }: CustomSwiperProps) => {
  const swiperRef = useRef<any>(null); // Ref to access Swiper instance

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  }, []);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
      swiperRef.current.slideTo(0);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter} // Start autoplay on hover
      onMouseLeave={handleMouseLeave} // Stop autoplay and reset on leave
      className="relative w-full sm:p-4 sm:w-[50%] sm:h-auto order-1 sm:order-2 flex items-center justify-center"
    >
      <Swiper
        className="rounded-t-lg shadow-none transition group-hover/project:scale-105 w-full h-full"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} !bg-gray-700 swiper-pagination-bullet-custom"></span>`;
          },
        }}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {imageUrl.map((url, index) => (
          <SwiperSlide key={index}>
            <Image
              src={url}
              alt={`${title} project image ${index + 1}`}
              layout="responsive"
              objectFit="cover"
              quality={95}
              className="rounded-lg border border-gray-200 dark:border-gray-700"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
