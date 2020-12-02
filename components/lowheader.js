import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const LowHeader = () => (
  <div>
    <Head>
      <link href="/your-path-to-fontawesome/css/all.css" rel="stylesheet" />
    </Head>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Container>
        <a className="navbar-brand" href="#">
          <img
            src="/image/logo.png"
            className="d-inline-block align-top"
            alt="7Connect"
          />
        </a>
        <div className=" navbar-toggleable-md " id="navbarResponsive">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <Hovers>
                  <span className="hover-icon ">หน้าแรก</span>
                </Hovers>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Hovers>
                  <span className="hover-icon ">สินค้า</span>
                </Hovers>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Hovers>
                  <span className="hover-icon ">การติดตั้ง</span>
                </Hovers>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <Hovers>
                  <span className="hover-icon ">เกี่ยวกับเรา</span>
                </Hovers>
              </a>
            </li>
            <li className="nav-item Search">
              <a className="nav-link active" href="#" style={fontColor}>
                <FaSearch />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>

    <style jsx>{`
      :global(body) {
        margin: 0;
        padding: 0;
        position: relative;
        font-family: "Sukhumvit Set", sans-serif;
      }
      .Search {
        padding-left: 10px;
      }
      li {
        font-size: 15px;
        font-weight: bolder;
      }
      a {
        color: #494a4f;
      }
    `}</style>
  </div>
);

const bg = {
  backgroundColor: "#F8F9FA",
};
const fontColor = {
  color: "#E51A1E",
};

const Hovers = styled.div`
&:hover .hover-icon {
  color:#E51A1E;
}
  }
`;

export default LowHeader;
