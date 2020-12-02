import React, { Component } from "react";
import Slider from "react-slick";
import { Button, Container, Row, Col, Nav } from "react-bootstrap";
import MiniSliderWhite from "./miniSliderWhite";
import MiniSliderblack from "./MiniSliderblack";
import SecondSlider from "./secondSlider";

import styled from "styled-components";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaCircle,
  FaLeaf,
} from "react-icons/fa";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="align-middle"
      style={{
        ...style,
        cursor: "pointer",
        position: "absolute",
        display: "inline-table",
        right: "100%",
        top: "50%",
      }}
      onClick={onClick}
    >
      <img src="/png/arrow-left.png" width="20" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        cursor: "pointer",
        zindex: "5",
        position: "absolute",
        display: "inline-table",
        top: "50%",
        left: "99.7%",
      }}
      onClick={onClick}
    >
      <img src="/png/arrow-right.png" width="20" />
    </div>
  );
}

class firstSlider extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleMouseHoverfacebook = this.handleMouseHoverfacebook.bind(this);
    this.handleMouseHoverig = this.handleMouseHoverig.bind(this);
    this.handleMouseHovertw = this.handleMouseHovertw.bind(this);
    this.handleMouseHovertla = this.handleMouseHovertla.bind(this);
    this.state = {
      isCamera: false,
      isHovering: false,
      isHoveringfacebook: false,
      isHoveringig: false,
      isHoveringtw: false,
      isHoveringtla: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }
  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }
  handleMouseHoverfacebook() {
    this.setState(this.toggleHoverStatefacebook);
  }
  toggleHoverStatefacebook(state) {
    return {
      isHoveringfacebook: !state.isHoveringfacebook,
    };
  }
  handleMouseHoverig() {
    this.setState(this.toggleHoverStateig);
  }
  toggleHoverStateig(state) {
    return {
      isHoveringig: !state.isHoveringig,
    };
  }
  handleMouseHovertw() {
    this.setState(this.toggleHoverStatetw);
  }
  toggleHoverStatetw(state) {
    return {
      isHoveringtw: !state.isHoveringtw,
    };
  }
  handleMouseHovertla() {
    this.setState(this.toggleHoverStatetla);
  }
  toggleHoverStatetla(state) {
    return {
      isHoveringtla: !state.isHoveringtla,
    };
  }

  render() {
    console.log(this.state);
    const settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div className="m-1">
        <Container>
          <Row>
            <Col>
              <Slider {...settings} style={size}>
                <div>
                  {/* <Container fluid="sm md lg"> */}
                  <Row>
                    <Col sm={6}>
                      <div className="images">
                        {this.state.isCamera ? (
                          <MiniSliderblack
                            style={{
                              maxWidth: "100%",
                              textAlign: "center",
                            }}
                          />
                        ) : (
                          <MiniSliderWhite
                            style={{
                              maxWidth: "100%",
                              textAlign: "center",
                            }}
                          />
                        )}
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
                                <div
                                  style={{ cursor: "pointer" }}
                                  onClick={(e) =>
                                    this.setState({ isCamera: false })
                                  }
                                >
                                  <FaCircle
                                    size={35}
                                    style={{ color: "#E6E6E6" }}
                                  />
                                  <span className="p-2" style={style}>
                                    White
                                  </span>
                                </div>
                              </Col>
                              <Col
                                xs={6}
                                style={{ float: "left", textAlign: "left" }}
                              >
                                <div
                                  style={{ cursor: "pointer" }}
                                  onClick={(e) =>
                                    this.setState({ isCamera: true })
                                  }
                                >
                                  <FaCircle
                                    size={35}
                                    style={{ color: "#494A4F" }}
                                  />
                                  <span className="p-2" style={style}>
                                    Black
                                  </span>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                        </div>
                      </div>
                      {/* button */}
                      <div className="border border-light py-2  mb-4">
                        <div className="text-center">
                          <Button
                            variant="danger"
                            style={{
                              margin: "0.5rem",
                              backgroundColor: "#41A1E",
                              borderRadius: "0",
                              width: "120px",
                            }}
                          >
                            ซื้อสินค้า
                          </Button>
                          <Button
                            className="buttons"
                            variant="outline-dark"
                            style={{
                              width: "120px",
                              backgroundColor: "#41A1E",
                              borderRadius: "0",
                            }}
                          >
                            ดูสินค้าทั้งหมด
                          </Button>
                        </div>
                      </div>
                      <div
                        className="border border-light"
                        style={{ marginTop: "-0.5rem" }}
                      >
                        <div className="text-center">
                          <Nav
                            className="justify-content-center"
                            activeKey="/home"
                            style={{ paddingTop: "0" }}
                          >
                            <Nav.Item>
                              <Nav.Link href="#" style={icon}>
                                <Hovers
                                  className="hover-icon"
                                  onMouseEnter={this.handleMouseHover}
                                  onMouseLeave={this.handleMouseHover}
                                >
                                  <FaPhoneAlt className="hover-icon" />
                                  {this.state.isHovering && (
                                    <div>
                                      <svg
                                        className="pt-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                      >
                                        <path
                                          data-name="Polygon 1"
                                          d="M6.5 0L13 12H0z"
                                          fill="#e51a1e"
                                        />
                                      </svg>
                                      <span
                                        style={{
                                          position: "absolute",
                                          marginTop: "20px",
                                          marginLeft: "-2rem",
                                          color: "#e51a1e",
                                          fontFamily: "Sukhumvit Set",
                                        }}
                                      >
                                        Phone
                                      </span>
                                    </div>
                                  )}
                                </Hovers>

                                {/* </div> */}
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="link-1" style={icon}>
                                <Hovers
                                  onMouseEnter={this.handleMouseHoverfacebook}
                                  onMouseLeave={this.handleMouseHoverfacebook}
                                >
                                  <FaFacebookF className="hover-icon" />
                                  {this.state.isHoveringfacebook && (
                                    <div>
                                      <svg
                                        className="pt-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                      >
                                        <path
                                          data-name="Polygon 1"
                                          d="M6.5 0L13 12H0z"
                                          fill="#e51a1e"
                                        />
                                      </svg>
                                      <span
                                        style={{
                                          position: "absolute",
                                          marginTop: "20px",
                                          marginLeft: "-2.5rem",
                                          color: "#e51a1e",
                                          fontFamily: "Sukhumvit Set",
                                        }}
                                      >
                                        facebook
                                      </span>
                                    </div>
                                  )}
                                </Hovers>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="link-2" style={icon}>
                                <Hovers
                                  // className="hover-icon"
                                  onMouseEnter={this.handleMouseHoverig}
                                  onMouseLeave={this.handleMouseHoverig}
                                >
                                  <FaInstagram className="hover-icon" />
                                  {this.state.isHoveringig && (
                                    <div>
                                      <svg
                                        className="pt-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                      >
                                        <path
                                          data-name="Polygon 1"
                                          d="M6.5 0L13 12H0z"
                                          fill="#e51a1e"
                                        />
                                      </svg>
                                      <span
                                        style={{
                                          position: "absolute",
                                          marginTop: "20px",
                                          marginLeft: "-2.5rem",
                                          color: "#e51a1e",
                                          fontFamily: "Sukhumvit Set",
                                        }}
                                      >
                                        instagram
                                      </span>
                                    </div>
                                  )}
                                </Hovers>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="link-3" style={icon}>
                                <Hovers
                                  // className="hover-icon"
                                  onMouseEnter={this.handleMouseHovertw}
                                  onMouseLeave={this.handleMouseHovertw}
                                >
                                  <FaTwitter className="hover-icon" />
                                  {this.state.isHoveringtw && (
                                    <div>
                                      <svg
                                        className="pt-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                      >
                                        <path
                                          data-name="Polygon 1"
                                          d="M6.5 0L13 12H0z"
                                          fill="#e51a1e"
                                        />
                                      </svg>
                                      <span
                                        style={{
                                          position: "absolute",
                                          marginTop: "20px",
                                          marginLeft: "-2rem",
                                          color: "#e51a1e",
                                          fontFamily: "Sukhumvit Set",
                                        }}
                                      >
                                        twitter
                                      </span>
                                    </div>
                                  )}
                                </Hovers>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="link-4" style={icon}>
                                <Hovers
                                  // className="hover-icon"
                                  onMouseEnter={this.handleMouseHovertla}
                                  onMouseLeave={this.handleMouseHovertla}
                                >
                                  <FaTelegramPlane className="hover-icon" />
                                  {this.state.isHoveringtla && (
                                    <div>
                                      <svg
                                        className="pt-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                      >
                                        <path
                                          data-name="Polygon 1"
                                          d="M6.5 0L13 12H0z"
                                          fill="#e51a1e"
                                        />
                                      </svg>
                                      <span
                                        style={{
                                          position: "absolute",
                                          marginTop: "20px",
                                          marginLeft: "-2.5rem",
                                          color: "#e51a1e",
                                          fontFamily: "Sukhumvit Set",
                                        }}
                                      >
                                        telegram
                                      </span>
                                    </div>
                                  )}
                                </Hovers>
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  {/* </Container> */}
                </div>

                <div>
                  <Container fluid="sm md lg">
                    <Row>
                      <Col sm={6}>
                        <div className="images">
                          {this.state.isCamera ? (
                            <MiniSliderblack
                              style={{
                                maxWidth: "100%",
                                textAlign: "center",
                              }}
                            />
                          ) : (
                            <MiniSliderWhite
                              style={{
                                maxWidth: "100%",
                                textAlign: "center",
                              }}
                            />
                          )}
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
                                  <div
                                    style={{ cursor: "pointer" }}
                                    onClick={(e) =>
                                      this.setState({ isCamera: false })
                                    }
                                  >
                                    <FaCircle
                                      size={35}
                                      style={{ color: "#E6E6E6" }}
                                    />
                                    <span className="p-2" style={style}>
                                      White
                                    </span>
                                  </div>
                                </Col>
                                <Col
                                  xs={6}
                                  style={{ float: "left", textAlign: "left" }}
                                >
                                  <div
                                    style={{ cursor: "pointer" }}
                                    onClick={(e) =>
                                      this.setState({ isCamera: true })
                                    }
                                  >
                                    <FaCircle
                                      size={35}
                                      style={{ color: "#494A4F" }}
                                    />
                                    <span className="p-2" style={style}>
                                      Black
                                    </span>
                                  </div>
                                </Col>
                              </Row>
                            </Container>
                          </div>
                        </div>
                        {/* button */}
                        <div className="border border-light py-2  mb-4">
                          <div className="text-center">
                            <Button
                              variant="danger"
                              style={{
                                margin: "0.5rem",
                                backgroundColor: "#41A1E",
                                borderRadius: "0",
                                width: "120px",
                              }}
                            >
                              ซื้อสินค้า
                            </Button>
                            <Button
                              className="buttons"
                              variant="outline-dark"
                              style={{
                                width: "120px",
                                backgroundColor: "#41A1E",
                                borderRadius: "0",
                              }}
                            >
                              ดูสินค้าทั้งหมด
                            </Button>
                          </div>
                        </div>
                        <div
                          className="border border-light"
                          style={{ marginTop: "-0.5rem" }}
                        >
                          <div className="text-center">
                            <Nav
                              className="justify-content-center"
                              activeKey="/home"
                              style={{ paddingTop: "0" }}
                            >
                              <Nav.Item>
                                <Nav.Link href="#" style={icon}>
                                  <Hovers
                                    className="hover-icon"
                                    onMouseEnter={this.handleMouseHover}
                                    onMouseLeave={this.handleMouseHover}
                                  >
                                    <FaPhoneAlt className="hover-icon" />
                                    {this.state.isHovering && (
                                      <div>
                                        <svg
                                          className="pt-1"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="15"
                                        >
                                          <path
                                            data-name="Polygon 1"
                                            d="M6.5 0L13 12H0z"
                                            fill="#e51a1e"
                                          />
                                        </svg>
                                        <span
                                          style={{
                                            position: "absolute",
                                            marginTop: "20px",
                                            marginLeft: "-2rem",
                                            color: "#e51a1e",
                                            fontFamily: "Sukhumvit Set",
                                          }}
                                        >
                                          Phone
                                        </span>
                                      </div>
                                    )}
                                  </Hovers>

                                  {/* </div> */}
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="link-1" style={icon}>
                                  <Hovers
                                    onMouseEnter={this.handleMouseHoverfacebook}
                                    onMouseLeave={this.handleMouseHoverfacebook}
                                  >
                                    <FaFacebookF className="hover-icon" />
                                    {this.state.isHoveringfacebook && (
                                      <div>
                                        <svg
                                          className="pt-1"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="15"
                                        >
                                          <path
                                            data-name="Polygon 1"
                                            d="M6.5 0L13 12H0z"
                                            fill="#e51a1e"
                                          />
                                        </svg>
                                        <span
                                          style={{
                                            position: "absolute",
                                            marginTop: "20px",
                                            marginLeft: "-2.5rem",
                                            color: "#e51a1e",
                                            fontFamily: "Sukhumvit Set",
                                          }}
                                        >
                                          facebook
                                        </span>
                                      </div>
                                    )}
                                  </Hovers>
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="link-2" style={icon}>
                                  <Hovers
                                    // className="hover-icon"
                                    onMouseEnter={this.handleMouseHoverig}
                                    onMouseLeave={this.handleMouseHoverig}
                                  >
                                    <FaInstagram className="hover-icon" />
                                    {this.state.isHoveringig && (
                                      <div>
                                        <svg
                                          className="pt-1"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="15"
                                        >
                                          <path
                                            data-name="Polygon 1"
                                            d="M6.5 0L13 12H0z"
                                            fill="#e51a1e"
                                          />
                                        </svg>
                                        <span
                                          style={{
                                            position: "absolute",
                                            marginTop: "20px",
                                            marginLeft: "-2.5rem",
                                            color: "#e51a1e",
                                            fontFamily: "Sukhumvit Set",
                                          }}
                                        >
                                          instagram
                                        </span>
                                      </div>
                                    )}
                                  </Hovers>
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="link-3" style={icon}>
                                  <Hovers
                                    // className="hover-icon"
                                    onMouseEnter={this.handleMouseHovertw}
                                    onMouseLeave={this.handleMouseHovertw}
                                  >
                                    <FaTwitter className="hover-icon" />
                                    {this.state.isHoveringtw && (
                                      <div>
                                        <svg
                                          className="pt-1"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="15"
                                        >
                                          <path
                                            data-name="Polygon 1"
                                            d="M6.5 0L13 12H0z"
                                            fill="#e51a1e"
                                          />
                                        </svg>
                                        <span
                                          style={{
                                            position: "absolute",
                                            marginTop: "20px",
                                            marginLeft: "-2rem",
                                            color: "#e51a1e",
                                            fontFamily: "Sukhumvit Set",
                                          }}
                                        >
                                          twitter
                                        </span>
                                      </div>
                                    )}
                                  </Hovers>
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="link-4" style={icon}>
                                  <Hovers
                                    // className="hover-icon"
                                    onMouseEnter={this.handleMouseHovertla}
                                    onMouseLeave={this.handleMouseHovertla}
                                  >
                                    <FaTelegramPlane className="hover-icon" />
                                    {this.state.isHoveringtla && (
                                      <div>
                                        <svg
                                          className="pt-1"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="15"
                                        >
                                          <path
                                            data-name="Polygon 1"
                                            d="M6.5 0L13 12H0z"
                                            fill="#e51a1e"
                                          />
                                        </svg>
                                        <span
                                          style={{
                                            position: "absolute",
                                            marginTop: "20px",
                                            marginLeft: "-2.5rem",
                                            color: "#e51a1e",
                                            fontFamily: "Sukhumvit Set",
                                          }}
                                        >
                                          telegram
                                        </span>
                                      </div>
                                    )}
                                  </Hovers>
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Slider>
            </Col>
          </Row>
          <Row style={{ display: "block" }}>
            <Col>
              <SecondSlider />
            </Col>
          </Row>
        </Container>
        <style jsx>{`
          :global(body) {
            margin: 0;
            padding: 0;
            font-family: "Sukhumvit Set", sans-serif;
            background-color: #f8f9fb;
          }
          .slick-next:before,
          [dir="rtl"] .slick-prev:before {
            display: none;
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
            width: 100%;
            text-align: center;
            font-size: 38px;
            padding: 0.5rem;
            margin-top: 1rem;
            font-weight: bold;
            color: #494a4f;
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
        `}</style>
      </div>
    );
  }
}

const icon = {
  color: "#494a4f",
};

const size = {
  height: "516px",
  maxWidth: "100%",
  display: "block",
};
const style = {
  fontSize: "15px",
  fontWeight: "bold",
  alignItem: "center",
};

const Hovers = styled.div`
&:hover .hover-icon {
  color:#E51A1E;
}
  }
`;
export default firstSlider;
