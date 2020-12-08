import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";

class Product extends Component {
  render() {
    return (
      <div>
        <h1>Product / สินค้า</h1>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-3 mt-4 ">
            {/* map */}
            <div className="col-lg-4 align-self-center">
              <div className="card shadows">
                <img
                  src="./image/Macs.png"
                  className="card-img-top w-100 img-fluid p-2 mb-4"
                  alt="..."
                />
                <div className="card-body mt-5">
                  <div className="row">
                    <div className="col-6">
                      <div className="title">บัส ไหร่ไทม์รีไซเคิล</div>
                      <div className="title-price">23,900 TH</div>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn border m-2"
                        style={{
                          borderRadius: "0px",
                          width: "122px",
                          height: "48px",
                        }}
                      >
                        ซื้อสินค้า
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 align-self-center">
              <div className="card shadows">
                <img
                  src="./image/Macs.png"
                  className="card-img-top w-100 img-fluid p-2 mb-4"
                  alt="..."
                />
                <div className="card-body mt-5">
                  <div className="row">
                    <div className="col-6">
                      <div className="title">บัส ไหร่ไทม์รีไซเคิล</div>
                      <div className="title-price">23,900 TH</div>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn border m-2"
                        style={{
                          borderRadius: "0px",
                          width: "122px",
                          height: "48px",
                        }}
                      >
                        ซื้อสินค้า
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 align-self-center">
              <div className="card shadows">
                <img
                  src="./image/Macs.png"
                  className="card-img-top w-100 img-fluid p-2 mb-4"
                  alt="..."
                />
                <div className="card-body mt-5">
                  <div className="row">
                    <div className="col-6">
                      <div className="title">บัส ไหร่ไทม์รีไซเคิล</div>
                      <div className="title-price">23,900 TH</div>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn border m-2"
                        style={{
                          borderRadius: "0px",
                          width: "122px",
                          height: "48px",
                        }}
                      >
                        ซื้อสินค้า
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          

          .top-card {
            padding-top: 2rem;
          }
          .card {
            width: 324px;
            height:428px; 
            }         }
          .title-price {
            font-size: 20px;
            font-weight: bold;
          }
          .title {
            font-size: 15px;
          }
          h1 {
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            padding: 2rem;
            padding-top: 4rem;
          }
          .shadows {
            border-radius: 0px;
            -webkit-box-shadow: -2px 13px 24px -6px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: -2px 13px 24px -6px rgba(0, 0, 0, 0.75);
            box-shadow: -2px 13px 24px -6px rgba(0, 0, 0, 0.75);
          }
        `}</style>
      </div>
    );
  }
}
export default Product;
