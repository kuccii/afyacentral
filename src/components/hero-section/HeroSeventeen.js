import Link from 'next/link';
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';

const HeroSeventeen = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section
      className="mk-hero-section bg-white position-relative overflow-hidden"
      style={{
        backgroundImage: "url('/shape/mk-hero-curve.svg')",
      }}
    >
      <span className="mk-hero-rectangle-shape position-absolute"></span>
      <img
        src="/shape/mk-hero-circle-line.png"
        alt="circle line"
        className="position-absolute start-0 w-100 mk-hero-circle-line"
      />
      <div className="container">
        {/* <div className="row align-items-center">
          <div className="col-xl-7">
            <div className="mk-title">
              <h4 className="display-4 fw-bold mk-title text-white">
                Optimzed{' '}
                <mark className="bg-transparent p-0 
              " style={{color: "#219C90"}}>Trading</mark> System
              </h4>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="mk-hero-content">
              <p className="mb-4 text-white">
                Make your work easier with an integrated trade ecosystem 
              </p>
              <div className="d-flex align-items-center mk-btn-group flex-wrap">
                <Link href="https://app.qivook.comcl">
                  <a className="ins-btn mk-white-btn">Get Started</a>
                </Link>
                <ModalVideo
                  channel="youtube"
                  isOpen={isOpen}
                  videoId="hAP2QF--2Dg"
                  onClose={() => setOpen(false)}
                />
                 <a
                  href="!#"
                  onClick={() => setOpen(true)}
                  className="mk-hero-play fw-bold"
                >
                  <span className="d-inline-flex align-items-center justify-content-center rounded-circle text-white me-2">
                    <i className="fas fa-play"></i>

                    <i className="fas fa-play"></i>
                    <FaPlay />
                  </span>{' '}
                  How it Work
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col-12">
            <div className="mk-hero-dashboard text-md-center position-relative mt-60 position-relative">
              <span className="mk-gradient-hero-shape position-absolute rounded-circle"></span>
              <span className="mk-secondary-gradient-shape position-absolute rounded-circle"></span>
              <img
                src="/shape/mk-doted.png"
                alt="doted"
                className="mk-hero-doted position-absolute"
              />
              <img
                src="/marketing/dashboard.png"
                alt="not found"
                className="img-fluid"
              />
              <img
                src="/marketing/dashboard-sm.png"
                alt="dashboard"
                className="dashboard-sm d-none d-sm-block"
              />
            </div>
          </div>
        </div> */}
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6">
          <div className="mk-title">
              <h4 className="display-4 fw-bold mk-title text-white">
                Optimzed{' '}
                <mark className="bg-transparent p-0 
              " style={{color: "#ffc107"}}>Trading</mark> System.
              </h4>
            </div>
            <div className="ins-title">
              <div className="d-flex align-items-center">
                <span className="subtitle fw-bold me-1 display-6 teal-text" style={{color: "#219C90"}} >Our Marketplace</span>
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
                      stroke="#219C90"
                      strokeWidth="1.49369"
                    />
                    <path
                      d="M55.0297 6.51187L46.0675 11.6862L46.0675 1.33758L55.0297 6.51187Z"
                      fill="#219C90"
                    />
                  </svg>
                </span>
              </div>
              <h2 className="mt-2 ins-heading mb-0 text-white">
              Search Product & Find Verified Sellers Across Africa
                {/* <mark style={{color: "#ffc107"}}>East</mark>  */}
                
              </h2>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="ins-gallery-info mt-3 mt-xl-0">
              <p className="ins-text mb-30 text-white display-6.2">
                Source and access construction comodities with our app
              </p>
              <div className="d-flex align-items-center ins-gallery-info-btns flex-wrap">
              <Link href="https://app.qivook.com">
                  <a className="ins-btn mk-white-btn">Get Started</a>
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
                  <span className="ins-gallery-info-btns video-icon i " style={{color: "#219C90"}}>
                    {" "}
                    <FaPlay />
                  </span>

                  <span className="ms-2 fs-md fw-bold" style={{color: "#219C90"}} > How It Works</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSeventeen;
