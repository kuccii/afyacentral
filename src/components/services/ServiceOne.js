import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {
  HiOutlineCog,
  HiOutlineDocumentReport,
  HiOutlineUsers,
} from "react-icons/hi";
import { SiSimpleanalytics } from "react-icons/si";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";

const ServiceOne = ({ bgDark }) => {
  return (
    <section
      className={`feature-section ptb-120 ${bgDark ? "bg-dark" : "bg-light"}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 justify-content-center">
            {bgDark ? (
              <SectionTitle
                description="Fueling Your Growth with our"
                title="Services"
                subtitlen="To Grow Your Business"
                centerAlign
                dark
              />
            ) : (
              <SectionTitle
                subtitle="Services"
                title="Best Services Grow Your Business"
                description="Globally actualize cost effective way of resourcing"
                centerAlign
              />
            )}
            <div className="feature-grid">
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <span className="fal">
                    <HiOutlineDocumentReport className="h3 text-success" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Market intelligence</h3>
                  <p className="mb-0"></p>
                </div>
                {/* <Link href="">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link> */}
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <span className="fal">
                    <HiOutlineDocumentReport className="h3 text-success" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Comprehensive trade information</h3>
                  <p className="mb-0"></p> 
                  
                </div>
                {/* <Link href="">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link> */}
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <span className="fal">
                    <HiOutlineDocumentReport className="h3 text-success" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Reguratory assistance</h3>
                  <p className="mb-0">
                    </p>
                </div>
                {/* <Link href="">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link> */}
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-danger-soft mb-32">
                  <span className="fal">
                    <HiOutlineUsers className="h3 text-danger" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Verified supplier network</h3>
                  <p className="mb-0">
                  
                  </p>
                </div>
                {/* <Link href="">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link> */}
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-dark-soft mb-32">
                  <span className="fal">
                    <IoGitCompareOutline className="h3 text-dark" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Negotiation support</h3>
                  <p className="mb-0">
                  
                  </p>
                </div>
                {/* <Link href="">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link> */}
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <span className="fal">
                    <HiOutlineCog className="h3 text-warning" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Documentation services</h3>
                  <p className="mb-0">
                 
                  </p>
                </div>
                {/* <Link href="">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
