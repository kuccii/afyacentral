import React from "react";
import Link from 'next/link';
import Image from 'next/image';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { insuranceGallery } from "@utils/data";
import { useRef, useState } from "react";



import { Pagination } from 'swiper';


import VideoModal from '../common/VideoModal';
import DarkModal from "@components/common/DarkModal";

// const InsuranceGallery = () => {
//   const [isOpen, setOpen] = useState(false);
  // const swiperRef = useRef();
// }

const HeroSectionNine = () => {
  const swiperRef = useRef();

  return (
    <section
      className="hero-it-solution hero-nine-bg ptb-60 container-fluid"
      style={{
        backgroundImage: "url('/hero-9-img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}
    >
      <div className="container-fluid">
        <div className="row d-flex text-center
       justify-content-center">
          <div className="col-lg-6 col-md-10 ">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h1 className="fw-bold display-3">
                Import
              </h1>
              <p className="lead">
              
              </p>
              <div className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex justify-content-center">
                <Link href="https://app.qivook.com/" >
                  <a  className="btn btn-primary me-3 ">Import Now</a>
                </Link>
               {/* <DarkModal className="true"/> */}
              </div>
            </div>
            <Swiper align-self-center 
        // pagination={{
        //   type: 'progressbar',
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper " 
      >
        <SwiperSlide>
              <Image
                src="/african_Trade.png"
                alt="hero hero-it-solution"
                className="img-fluid"
                width={920}
                height={520}
              /></SwiperSlide>
        <SwiperSlide><Image
                src="/East_africa_trade.png"
                alt="hero hero-it-solution"
                className="img-fluid"
                width={920}
                height={520}
              /></SwiperSlide>
        <SwiperSlide><Image
                src="/Africa_trade_construction_set-.png"
                alt="hero hero-it-solution"
                className="img-fluid"
                width={920}
                height={520}
              /></SwiperSlide>
        
        
      </Swiper>
            
          </div>
          <div className="col-lg-6">
          <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
          <h1 className="fw-bold display-3 text-white">
  Export
</h1>

              <p className="lead text-white">
             
              </p>
              <div className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex justify-content-center">
                <Link href="/request-demo" >
                  <a  className="btn btn-primary me-3">Export Now</a>
                </Link>
               {/* <DarkModal className="true"/> */}
              </div>
            </div>
            {/* <div className="hero-img position-relative mt-5 mt-lg-0">
              <Image
                src="/banner_image.png"
                alt="hero hero-it-solution"
                className="img-fluid"
                width={520}
                height={520}
              />
              <div className="dots">
                  <div className="dot-1">
                  <Image
                  src="/banner_dot.png"
                  alt="dot"
                  width={96}
                  height={91}
                  />
                  </div>
                <div className="dot-2">
                   <Image
                  src="/banner_dot.png"
                  alt="dot"
                  width={96}
                  height={91}
                /></div>
              </div>
              <div className="bubble">
                <span className="bubble-1"></span>
                <span className="bubble-2"></span>
              </div>
            </div> */}
            <Swiper 
        // pagination={{
        //   type: 'progressbar',
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper ptb-60" 
      >
        <SwiperSlide>
              <Image
                src="/Africa-trade-export-.png"
                alt="hero hero-it-solution"
                className="img-fluid"
                width={920}
                height={520}
              /></SwiperSlide>
        
        
        
      </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionNine;
