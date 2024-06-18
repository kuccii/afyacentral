import React from "react";
import Link from "next/link";
import Image from "next/image";

import SectionTitle from "../common/SectionTitle";
import { RiStackLine } from "react-icons/ri";
import { BsCodeSlash, BsShieldCheck } from "react-icons/bs";

const FeatureOne = () => {
  return (
    <>
      <section className="feature-promo ptb-120 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <SectionTitle
                classNam="text-center"
                title="Our Services"
                description="Our product is designed to provide you with the best possible experience in cross-border trade"
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-promo p-lg-5 p-3 text-center mt-4">
                <div className="feature-icon icon-center pb-5 rounded-custom bg-primary">
                  <RiStackLine className="text-white fa-2x" />
                </div>
                <div className="feature-info-wrap">
                  <h3 className="h5">Comprehensive product search</h3>
                  <p>
                  {" Access an extensive product database and supplier network to simplify the process of finding the right products."}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-promo p-lg-5 p-3 text-center mt-4">
                <div className="feature-icon icon-center pb-5 rounded-custom bg-danger">
                  <BsShieldCheck className="fa-2x text-white" />
                </div>
                <div className="feature-info-wrap">
                  <h3 className="h5">Supplier vetting and verification</h3>
                  <p>
                  {" Connect with trusted, verified suppliers to ensure reliability, product quality, and delivery performance. "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-promo p-lg-5 p-3 text-center mt-4">
                <div className="feature-icon icon-center pb-5 rounded-custom bg-dark">
                  <BsCodeSlash className="fa-2x text-white" />
                </div>
                <div className="feature-info-wrap">
                  <h3 className="h5">Efficient matching system</h3>
                  <p>
                 {"Streamline the purchasing process by sending purchase requests to suppliers and obtaining quotations, while our advanced algorithms match your request with the best offers available, ensuring competitive pricing and favorable terms."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-60">
            <div className="col-lg-6 mt-4">
              <div className="position-relative d-flex flex-column h-100 flex-wrap bg-danger-soft p-5 rounded-custom">
                <div className="cta-left-info mb-2">
                  <h5>Get Connect to trusted suppliers</h5>
                  <p>
                    {" "}
                  </p>
                </div>
                <div className="action-btns mt-auto">
                  <Link href="https://app.qivook.com">
                    <a className="btn btn-outline-primary btn-sm">
                      {" "}
                      Start Today
                    </a>
                  </Link>
                </div>
                <div className="cta-img position-absolute right-0 bottom-0">
                  <Image
                    width={223}
                    height={223}
                    src="/cta-img-1.png"
                    alt="cta"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="position-relative d-flex flex-column h-100 flex-wrap bg-primary-soft p-5 rounded-custom">
                <div className="cta-left-info mb-2">
                  <h5>Get matched with potential buyers</h5>
                  <p>
                    {" "}
                  </p>
                </div>
                <div className="action-btns mt-auto">
                  <Link href="https://app.qivook.com">
                    <a className="btn btn-outline-primary btn-sm">
                      Start Today
                    </a>
                  </Link>
                </div>
                <div className="cta-img position-absolute right-0 bottom-0">
                  <Image
                    width={223}
                    height={223}
                    layout="responsive"
                    src="/cta-img-2.png"
                    alt="cta img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureOne;
