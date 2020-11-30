import React, { Component } from "react";
import Slider from "react-slick";
import { Button, Container, Row, Col } from "react-bootstrap";
import MiniSlider from "./miniFirstSlider";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

class firstSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings} style={size}>
          <div>
            <Container>
              <Row>
                <Col sm={6}>
                  <div className="images">
                    <MiniSlider
                      style={{
                        maxWidth: "100%",
                        textAlign: "center",
                      }}
                    />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="title">
                    <p>
                      กล้องวงจรปิด &nbsp;
                      <span style={{ color: "#E51A1E" }}>LILIN</span>
                    </p>
                  </div>
                  <div className="detail">
                    <p>
                      เอ็นทรานซ์วาทกรรมเทียมทานเบนโลคอรัปชัน
                      สโรชาศิลปากรนายแบบมาร์ช
                      ไงแตงกวาแชมเปี้ยนช็อปปิ้งตี๋แจ๊กเก็ตบัลลาสต์
                      บ๋อยบร็อคโคลีพริตตี้
                    </p>
                  </div>
                  <div className="radio-color">
                    <div className="in">
                      <Container>
                        <Row>
                          <Col
                            xs={6}
                            className="justify-content-end"
                            style={{ float: "right", textAlign: "right" }}
                          >
                            xs=6
                          </Col>
                          <Col
                            xs={6}
                            style={{ float: "left", textAlign: "left" }}
                          >
                            xs=6
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </div>
                  {/* button */}
                  <div className="border border-light p-3 mb-4">
                    <div className="text-center">
                      <Button style={{ marginRight: "1rem" }} variant="primary">
                        Primary
                      </Button>
                      <Button className="buttons" variant="primary">
                        Primary
                      </Button>
                    </div>
                  </div>
                  <div className="border border-light p-3 mb-4">
                    <div className="text-center">facebook</div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Slider>

        <style jsx>{`
          :global(body) {
            margin: 0;
            padding: 0;
            font-family: "Sukhumvit Set", sans-serif;
            background-color: #f8f9fb;
          }
          .buttons {
            margin-left: 2rem;
          }
          .box-button {
            display: flex;
            align-item: center;
          }
          .radio-color {
            padding: 2rem;
          }
          .detail {
            text-align: center;
            font-weight: 600;
          }
          .title {
            // border: 1px solid green;
            width: 100%;
            text-align: center;
            font-size: 38px;
            padding: 0.5rem;
            margin-top: 1rem;
            font-weight: bold;
            color: #494a4f;
          }
          h3 {
            justify-content: center;
            align-items: center;
          }
          Col {
            background-color: blue;
          }
          .images {
            display: block;
            text-align: center;
            padding-top: 2rem;
            max-width: 100%;
            height: auto !important;
          }
          .images img {
          }
        `}</style>
      </div>
    );
  }
}

const size = {
  height: "516px",
  maxWidth: "100%",
  display: "block",
};
export default firstSlider;
