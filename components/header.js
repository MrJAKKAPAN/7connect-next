import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Button, Container, Row, Col, Nav } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";

const Header = () => (
  <div>
    <Head>
      <link href="/your-path-to-fontawesome/css/all.css" rel="stylesheet" />
    </Head>
    <Container fluid style={style} className="justufy-content-center">
      <Row>
        {/* <Col></Col> */}
        <Col>
          <Container>
            <Nav
              className="justify-content-end"
              activeKey="/home"
              style={{ padding: "5px" }}
            >
              <Nav.Item>
                <Nav.Link href="/home" style={icon}>
                  <FaPhoneAlt />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" style={icon}>
                  <FaFacebookF />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" style={icon}>
                  <FaInstagram />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3" style={icon}>
                  <FaTwitter />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4" style={icon}>
                  <FaTelegramPlane />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Col>
      </Row>
    </Container>
  </div>
);

const style = {
  backgroundColor: "black",
  color: "white",
  float: "right",
};
const icon = {
  color: "white",
};

export default Header;
