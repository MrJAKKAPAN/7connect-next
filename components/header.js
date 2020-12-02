import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Button, Container, Row, Col, Nav } from "react-bootstrap";
import styled from "styled-components";
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
        <Col>
          <Container>
            <Nav
              className="justify-content-end"
              activeKey="/home"
              style={{ padding: "5px" }}
            >
              <Nav.Item>
                <Nav.Link href="/home" style={icon}>
                  <Hovers>
                    <FaPhoneAlt className="hover-icon" />
                  </Hovers>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" style={icon}>
                  <Hovers>
                    <FaFacebookF className="hover-icon" />
                  </Hovers>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" style={icon}>
                  <Hovers>
                    <FaInstagram className="hover-icon" />
                  </Hovers>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3" style={icon}>
                  <Hovers>
                    <FaTwitter className="hover-icon" />
                  </Hovers>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4" style={icon}>
                  <Hovers>
                    <FaTelegramPlane className="hover-icon" />
                  </Hovers>
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
const Hovers = styled.div`
&:hover .hover-icon {
  color:#E51A1E;
}
  }
`;

export default Header;
