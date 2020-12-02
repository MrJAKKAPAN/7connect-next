import React, { Component } from "react";
import { Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import styled from "styled-components";
// import { Row, Col } from "react-bootstrap";

class MiniSliderblack extends Component {
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
            padding: "5px",
          }}
        >
          <ul style={{ margin: "0px" }}>{dots}</ul>
        </div>
      ),
      customPaging: (i) => (
        <div
          className="hover-icon"
          style={{
            fontSize: "20px",
          }}
        >
          <Hovers>
            <span className="hover-icon">●</span>
          </Hovers>
        </div>
      ),
    };

    return (
      <div>
        <Slider
          {...settings}
          style={{ maxWidth: "512px", macHeight: "512px", overFlow: "hidden" }}
        >
          <div
            className="col-12"
            style={{ maxWidth: "512px", macHeight: "512px" }}
          >
            <img
              className="img-fluid w-100"
              src="/image/camera1.png"
              alt="camera1"
              style={{
                width: "100%",
                textAlign: "center",
                height: "auto !important",
              }}
            />
          </div>

          <div className="col-12 ">
            <img
              src="/image/camera1.png"
              width="100%"
              alt="camera1"
              style={{
                width: "100%",
                textAlign: "center",
                height: "auto !important",
              }}
            />
          </div>
          <div className="col-12 ">
            <img
              src="/image/camera1.png"
              alt="camera1"
              style={{
                width: "100%",
                textAlign: "center",
                height: "auto !important",
              }}
            />
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

const Hovers = styled.div`
&:hover .hover-icon {
  color:#E51A1E;
}
  }
`;

export default MiniSliderblack;
