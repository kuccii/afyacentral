import React from 'react';
import Link from 'next/link';
import { ImMobile } from 'react-icons/im';
import { FiEdit } from 'react-icons/fi';
import { BiExpand } from 'react-icons/bi';
import { BsArrowRight, BsCloudArrowDown } from 'react-icons/bs';

const FeatureFive = () => {
  return (
    <>
      <section className="app-two-feature ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="section-heading text-center">
                <h2>Transforming Maternal & Infant Care</h2>
                <p>
                  A bit of how is your father he nicked it charles daft plant
                  lavator.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="app-two-single-feature d-md-flex align-items-start mb-30">
                    <div className="app-two-single-feature-icon box-one me-3 mb-4 mb-md-0">
                      <i className="far">
                        <FiEdit />
                      </i>
                    </div>
                    <div className="app-two-single-feature-content">
                      <h3 className="h5">Continuous Vital Monitoring</h3>
                      <p>
                      Real-time tracking of vital health indicators to detect issues early.
                      </p>
                      <Link href="/single-service">
                        <a className="link-with-icon text-decoration-none">
                          {' '}
                          View Details{' '}
                          <i className="far mb-1">
                            <BsArrowRight />
                          </i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="app-two-single-feature d-md-flex align-items-start mb-30">
                    <div className="app-two-single-feature-icon box-two me-3 mb-4 mb-md-0">
                      <i className="far">
                        <ImMobile />
                      </i>
                    </div>
                    <div className="app-two-single-feature-content">
                      <h3 className="h5">Secure Data Connectivity</h3>
                      <p>
                      Private, accessible data for healthcare providers and mothers.
                      </p>
                      <Link href="/single-service">
                        <a className="link-with-icon text-decoration-none">
                          {' '}
                          View Details{' '}
                          <i className="far mb-1">
                            <BsArrowRight />
                          </i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="app-two-single-feature d-md-flex align-items-start mb-30">
                    <div className="app-two-single-feature-icon box-three me-3 mb-4 mb-md-0">
                      <i className="far">
                        <BiExpand />
                      </i>
                    </div>
                    <div className="app-two-single-feature-content">
                      <h3 className="h5">Proactive Healthcare</h3>
                      <p>
                      Remote monitoring and timely interventions to improve outcomes.
                      </p>
                      <Link href="/single-service">
                        <a className="link-with-icon text-decoration-none">
                          View Details{' '}
                          <i className="far mb-1">
                            <BsArrowRight />
                          </i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="app-two-single-feature d-md-flex align-items-start mb-30">
                    <div className="app-two-single-feature-icon box-four me-3 mb-4 mb-md-0">
                      <i className="far">
                        <BsCloudArrowDown />
                      </i>
                    </div>
                    <div className="app-two-single-feature-content">
                      <h3 className="h5">Informed Caregiving</h3>
                      <p>
                      Empowering mothers with tools to closely track and manage their family's health.
                      </p>
                      <Link href="/single-service">
                        <a className="link-with-icon text-decoration-none">
                          View Details{' '}
                          <i className="far mb-1">
                            <BsArrowRight />
                          </i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureFive;
