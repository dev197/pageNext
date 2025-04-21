'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperComponents = () => {
  return (
    <div className="swipper w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-[80%]"
      >
        <SwiperSlide>
            <Image src="/lamp.jpeg" alt="Lamp" className="rounded-lg shadow-lg" width={300} height={400} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponents;
