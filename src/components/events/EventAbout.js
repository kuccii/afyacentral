import React from 'react';
import Link from 'next/link';

export default function EventAbout() {
  return (
    <section
      className="event-about"
      style={{
        background: "url('/event/about-bg.jpg')no-repeat center center/cover",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="ev-ab-img position-relative ms-0 ms-lg-5">
              <img
                src="/event/about-img-1.png"
                className="img-fluid z-5 position-relative"
                alt="men"
              />
              <img
                src="/event/about-img-2.png"
                className="img-fluid ev-about-img-one z-5"
                alt="men"
              />
              <ul className="list-unstyled">
                <li>
                  <h4>
                    Qivook <span className="text-pink">Ltd</span>
                  </h4>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="p-3">
              <span className="text-black fw-bold mb-3 d-inline-block">
              Your Trade Partner
              </span>
              <h2 className="mb-4">About Qivook </h2>
              <p>
                Qivook stands out as a transformative force in cross-border trade in Africa, dedicated to leveraging
                technology and rich information to spur change and growth
              </p>
              <p className="mb-4">
                Our Platform goes beyond transactional efficiency; it's a hub for empowering businesses with reliable supplier networks, up to date
                information inlcuding a monthly e-magazine on market trends, and streamlined trade processes.
              </p>
              <div>
                <Link href="/about-us">
                  <a className="btn btn-primary bg-blue me-3 mb-2 mb-lg-0 mb-md-0">
                    Read more
                  </a>
                </Link>
                {/* <Link href="/request-for-demo">
                  <a className="btn border-pink">Download PDF</a>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <ul className="elements list-unstyled d-none d-xl-block">
          <li>
            <img src="/event/star.png" alt="star" />
          </li>
          <li>
            <img
              src="/event/human-shape.png"
              className="img-fluid"
              alt="human"
            />
          </li>
          <li></li>
        </ul>
      </div>
    </section>
  );
}
