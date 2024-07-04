import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegCheckCircle } from 'react-icons/fa';

const FeatureImgContentSix = () => {
  return (
    <section className="app-two-feature-two pt-60 pb-120">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 col-xl-6 col-md-12">
            <div className="app-two-feature-two-img">
              <Image
                width={636}
                height={643}
                src="/app-two-feature-phone-with-shape.png"
                alt="feature"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="app-two-feature-two-right">
              <div className="feature-content-wrap">
                <h4 className="h6">Connecting Mothers to Life-Saving Care</h4>
                <h2>How It Works</h2>
                <p>
                This integrated system enables early detection and remote access to quality care 
                 transforming outcomes in underserved communities.
                </p>
              </div>
              <div className="app-two-feature-two-content">
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4">
                  <li className="py-1">
                    <i>
                      <FaRegCheckCircle className="fad me-2" />
                    </i>
                    Lightweight wearable tracks vital health indicators.
                  </li>
                  <li className="py-1">
                    <i>
                      <FaRegCheckCircle className="fad me-2" />
                    </i>
                    Data securely transmitted to mobile app and web platform.
                  </li>
                  <li className="py-1">
                    <i>
                      <FaRegCheckCircle className="fad me-2" />
                    </i>
                    Providers remotely monitor data and deliver care recommendations.
                  </li>
                  <li className="py-1">
                    <i>
                      <FaRegCheckCircle className="fad me-2" />
                    </i>
                    Mothers track child's health, receive alerts, and communicate with care team.
                  </li>
                  
                </ul>
                <div className="action-btns mt-5">
                  <Link href="/about-us">
                    <a className="btn app-two-btn">Learn About More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImgContentSix;
