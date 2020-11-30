import React, { Component } from "react";
import Slider from "react-slick";

class MiniSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => (
        <div
          style={{
            borderRadius: "10px",
            padding: "15px",
          }}
        >
          <ul style={{ margin: "0px" }}>{dots}</ul>
        </div>
      ),
      customPaging: (i) => (
        <div
          style={{
            fontSize: "20px",
          }}
        >
          ●
        </div>
      ),
    };

    return (
      <div>
        <Slider {...settings}>
          <div className="page-content">
            <img
              src="/image/camera1.png"
              alt="camera1"
              width="100%"
              style={{
                maxWidth: "100%",
                textAlign: "center",
                height: "auto !important",
              }}
            />
          </div>
          <div className="page-content">
            <img
              src="/image/camera1.png"
              width="100%"
              alt="camera1"
              style={{
                maxWidth: "100%",
                textAlign: "center",
                height: "auto !important",
              }}
            />
          </div>
          <div>
            <div className="page-content">
              <img src="/image/camera1.png" alt="camera1" />
            </div>
          </div>
        </Slider>
        <style jsx>{`
          .page-content img {
            max-width: 100%;
            height: auto !important;
            overflow: hidden;
          }
        `}</style>
      </div>
    );
  }
}

export default MiniSlider;
