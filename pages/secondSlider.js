import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";

class SecondSlider extends Component {
  constructor(props) {
    super(props);
    // this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isShows: false,
    };
  }

  render() {
    this.state = this;
    console.log(this);
    return (
      <div className="second11">
        <div className="" style={{ backgroundColor: "#000" }}>
          <div
            className="container "
            style={{
              padding: "5rem",
              paddingLeft: "2.5rem",
              paddingRight: "2.5rem",
            }}
          >
            <div className="row">
              <div className="col-lg-6 p-0">
                <video autoPlay loop muted>
                  <source src="/video/video1.mp4" type="video/mp4" />
                </video>

                {/* <video autoPlay loop muted>
            <source src="/video/video1.mp4" type="video/mp4" />
          </video> */}
              </div>
              <div className="col-lg-6  p-0 ">
                <div className="row row-cols-2 row-cols-md-2 g-2  m-0 ">
                  <div className="col-6 col-sm-6 p-0 m-0 mx-auto">
                    <div className="box-red ">
                      <div className="p-4">
                        <h1 className="mt-4">เกี่ยวกับเรา</h1>
                        <p style={{ fontSize: "10px", textAlign: "center" }}>
                          Sint labore cillum Lorem consectetur eiusmod
                          consectetur ex culpa sunt quis.
                        </p>
                        <div className="text-center mx-auto">
                          <button
                            className="btn btn-light  "
                            style={{
                              fontSize: "10px",
                              textAlign: "center",
                              borderRadius: "0",
                            }}
                          >
                            &nbsp;&nbsp; ดูทั้งหมด &nbsp;&nbsp;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 p-0 m-0 overlays">
                    <img
                      src="./image/06.jpg"
                      alt=""
                      className="overlays  w-100 p-0 m-0"
                    />
                  </div>
                  <div className="col-6 col-sm-6 p-0 m-0 overlays">
                    <img
                      src="./image/07.jpg"
                      alt=""
                      className="overlays w-100 p-0 m-0"
                    />
                  </div>
                  <div className="col-6  ol-sm-6 p-0 m-0 overlays">
                    <img
                      src="./image/11.jpg"
                      alt=""
                      className=" overlay w-100 p-0 m-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            img {
              width: 239px;
              height: 193px;
              display: block;
            }
            video {
              object-fit: cover;
              max-width: 100%;
              height: 385px;
            }
            h1 {
              font-size: 15px;
              text-align: center;
              color: #fff;
            }
            .box-red {
              background-color: #e51a1e;
              height: 193px;
              color: #fff;
            }
            .overlays {
              opacity: 0.7;
            }
            .overlays:hover {
              opacity: 1;
            }

            @media screen and (min-width: 320px) and (max-width: 770px) {
              .second11 {
                margin-top: 88%;
              }
            }
          `}</style>
        </div>
      </div>
    );
  }
}

export default SecondSlider;
