import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChevronRight,
  faChevronLeft,
 } from "@fortawesome/free-solid-svg-icons";
const Brands = () => {
  return (
    <section className="bg-light py-5">
      <div className="container my-4">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Our Brands</h1>
            <p>
              Discover top-quality electronics from the most trusted brands. We bring you the latest gadgets, cutting-edge technology, and premium products to enhance your lifestyle. Shop with confidence and experience innovation like never before.
            </p>
          </div>
          <div className="col-lg-9 m-auto tempaltemo-carousel">
            <div className="row d-flex flex-row">
              <div className="col-1 align-self-center">
                <a className="h1" href="#brand" role="button" data-bs-slide="prev">
                  <FontAwesomeIcon icon={faChevronLeft} size="xs" />
                </a>
              </div>

              <div className="col-10">
                <div
                  className="carousel slide carousel-multi-item pt-2 pt-md-0"
                  id="brand"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner product-links-wap" role="listbox">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-3 p-md-5">
                          <img
                            className="img-fluid brand-img"
                            src="https://i.ibb.co/xqPcR48/dffedw.png"
                            alt="Brand Logo"
                          />
                        </div>
                        <div className="col-3 p-md-5">
                          <img
                            className="img-fluid brand-img"
                            src="https://i.ibb.co/MkzVRpG/1200px-Samsung-Logo-svg.png"
                            alt="Brand Logo"
                          />
                        </div>
                        <div className="col-3 p-md-5">
                          <img
                            className="img-fluid brand-img"
                            src="https://i.ibb.co/RydZn0q/lloyd-logo-6-FFE9-A0779-seeklogo-com.png"
                            alt="Brand Logo"
                          />
                        </div>
                        <div className="col-3 p-md-5">
                          <img
                            className="img-fluid brand-img"
                            src="https://i.ibb.co/ckTRxSY/unnamed-1-removebg-preview.png"
                            alt="Brand Logo"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-3 p-md-5">
                          <img
                            className="img-fluid brand-img"
                            src="https://i.ibb.co/748Vgxc/PNGPIX-COM-Whirlpool-Logo-PNG-Transparent.png"
                            alt="Brand Logo"
                          />
                        </div>
                        <div className="col-3 p-md-5">
                          <img
                            className="img-fluid brand-img"
                            src="https://i.ibb.co/ckgnywn/png-clipart-logo-hitachi-high-technologies-america-manufacturing-others-electronics-text-removebg-pr.png"
                            alt="Brand Logo"
                          />
                        </div>
                        <div className="col-3 p-md-5">
                          <img
                            className="img-fluid brand-img"
                            src="https://i.ibb.co/qYkcXXp/unnamed-2.png"
                            alt="Brand Logo"
                          />
                        </div>
                        <div className="col-3 p-md-5">
                          <img
                            className="img-fluid brand-img"
                            src="https://i.ibb.co/0ZBSS6X/175-1755101-o-general-hd-png-download-removebg-preview.png"
                            alt="Brand Logo"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-3 p-md-5">
                          <img
                            className="img-fluid brand-img"
                            src="https://i.ibb.co/MVDTFd3/ifb-logo-CDA98-EC536-seeklogo-com.png"
                            alt="Brand Logo"
                          />
                        </div>
                        <div className="col-3 p-md-5">
                          <img
                            className="img-fluid brand-img"
                            src="https://i.ibb.co/xqPcR48/dffedw.png"
                            alt="Brand Logo"
                          />
                        </div>
                        <div className="col-3 p-md-5">
                          <img
                            className="img-fluid brand-img"
                            src="https://i.ibb.co/ckgnywn/png-clipart-logo-hitachi-high-technologies-america-manufacturing-others-electronics-text-removebg-pr.png"
                            alt="Brand Logo"
                          />
                        </div>
                        <div className="col-3 p-md-5">
                          <img
                            className="img-fluid brand-img"
                            src="https://i.ibb.co/qYkcXXp/unnamed-2.png"
                            alt="Brand Logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-1 align-self-center">
                <a className="h1" href="#brand" role="button" data-bs-slide="next">
                  <FontAwesomeIcon icon={faChevronRight} size="xs" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands