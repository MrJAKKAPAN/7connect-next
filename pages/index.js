import React from "react";
import Link from "next/link";
import Head from "next/Head";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import FirstSlider from "./firstSlider";

const Index = () => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
    {/* <Container> */}
    <div style={box}>
      <FirstSlider />
    </div>
    {/* </Container> */}
    <style jsx>{`
      :global(body) {
        margin: 0;
        padding: 0;
        font-family: "Sukhumvit Set", sans-serif;
        background-color: ##f8f9fb;
      }
    `}</style>
  </div>
);

const box = {
  maxWidth: "100%",
  // padding: "1rem",
};

export default Index;
