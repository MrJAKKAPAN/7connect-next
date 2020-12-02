import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SecondSlider = () => (
  <div>
    <Container style={style}>
      <Row className="align-self-center">
        <Col style={{ backgroundColor: "green" }}>1 of 3</Col>
        <Col xs={10} style={{ backgroundColor: "red" }}>
          2 of 3 (wider)
        </Col>
        <Col style={{ backgroundColor: "green" }}>3 of 3</Col>
      </Row>
    </Container>
  </div>
);

const style = {
  backgroundColor: "#000",
  height: "565px",
  width: "100%",
};
export default SecondSlider;
