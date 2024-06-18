import { insuranceGallery } from "@utils/data";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import dynamic from "next/dynamic";

const InsuranceGallery = () => {
  const [isOpen, setOpen] = useState(false);
  const swiperRef = useRef();

  return (
    <section className="ins-gallery">
      <div className="container">
        {/* <div className="row align-items-center justify-content-between">
          <div className="col-xl-6">
            <div className="ins-title">
              <div className="d-flex align-items-center">
                <span className="subtitle fw-bold me-1">Our Marketplace</span>
                <span>
                  <svg
                    width="56"
                    height="13"
                    viewBox="0 0 56 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.262474 6.51123L49.0564 6.51123"
                      stroke="black"
                      strokeWidth="1.49369"
                    />
                    <path
                      d="M55.0297 6.51187L46.0675 11.6862L46.0675 1.33758L55.0297 6.51187Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
              <h2 className="mt-2 ins-heading mb-0">
              Search Product & Find Verified Sellers Across  <mark>East</mark> Africa
              </h2>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="ins-gallery-info mt-3 mt-xl-0">
              <p className="ins-text mb-30">
                source and Access construction comodities with our app
              </p>
              <div className="d-flex align-items-center ins-gallery-info-btns flex-wrap">
                <Link href="https://app.qivook.com">
                  <a className="ins-btn ins-secondary-btn">
                    Go To
                    <span className="ms-1">
                      <svg
                        width="22"
                        height="9"
                        viewBox="0 0 22 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.776428 4.55017L15.7133 4.55017"
                          stroke="white"
                          strokeWidth="1.49369"
                        />
                        <path
                          d="M21.6888 4.54934L15.7141 7.99887L15.7141 1.09981L21.6888 4.54934Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                </Link>
                <ModalVideo
                  channel="youtube"
                  isOpen={isOpen}
                  videoId="hAP2QF--2Dg"
                  onClose={() => setOpen(false)}
                />
                <a
                  href="#!"
                  onClick={() => setOpen(true)}
                  className="video-icon popup-youtube text-decoration-none"
                >
                  <span className="ins-gallery-info-btns video-icon i">
                    {" "}
                    <FaPlay />
                  </span>

                  <span className="ms-2 fs-md fw-bold"> How It Work</span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="ins-gallery-center-slider overflow-hidden">
        <div className="ins-gallery-slider swiper overflow-visible mt-5">
          <>
            
          </>
          {/* <div className="swiper-wrapper">
            <div className="ins-gallery-slide-single swiper-slide position-relative">
              <img
                src="/insurance/01.jpg"
                alt="not found"
                className="img-fluid"
              />
              <a href="#" className="ins-btn ins-primary-btn position-absolute">
                View Details
                <span className="ms-1">
                  <svg
                    width="22"
                    height="9"
                    viewBox="0 0 22 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.776428 4.55017L15.7133 4.55017"
                      stroke="white"
                      strokeWidth="1.49369"
                    />
                    <path
                      d="M21.6888 4.54934L15.7141 7.99887L15.7141 1.09981L21.6888 4.54934Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className="ins-gallery-slide-single swiper-slide position-relative">
              <img
                src="/insurance/02.jpg"
                alt="not found"
                className="img-fluid"
              />
              <a href="#" className="ins-btn ins-primary-btn position-absolute">
                View Details
                <span className="ms-1">
                  <svg
                    width="22"
                    height="9"
                    viewBox="0 0 22 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.776428 4.55017L15.7133 4.55017"
                      stroke="white"
                      strokeWidth="1.49369"
                    />
                    <path
                      d="M21.6888 4.54934L15.7141 7.99887L15.7141 1.09981L21.6888 4.54934Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className="ins-gallery-slide-single swiper-slide position-relative">
              <img
                src="/insurance/03.jpg"
                alt="not found"
                className="img-fluid"
              />
              <a href="#" className="ins-btn ins-primary-btn position-absolute">
                View Details
                <span className="ms-1">
                  <svg
                    width="22"
                    height="9"
                    viewBox="0 0 22 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.776428 4.55017L15.7133 4.55017"
                      stroke="white"
                      strokeWidth="1.49369"
                    />
                    <path
                      d="M21.6888 4.54934L15.7141 7.99887L15.7141 1.09981L21.6888 4.54934Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div> */}
          {/* <div
            onClick={() => swiperRef.current?.slidePrev()}
            className="swiper-btn-prev swiper-control"
            role="button"
          >
            <FaAngleLeft className="mb-1" />
          </div>
          <div
            onClick={() => swiperRef.current?.slideNext()}
            className="swiper-btn-next swiper-control"
            role="button"
          >
            <FaAngleRight className="mb-1" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(InsuranceGallery), { ssr: false });
