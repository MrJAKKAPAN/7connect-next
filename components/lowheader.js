import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

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
              <a className="nav-link active" href="#" style={fontColor}>
                หน้าแรก
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                สินค้า
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                การติดตั้ง
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                เกี่ยวกับเรา
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

export default LowHeader;
