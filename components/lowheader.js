import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Button, Container, Row, Col } from "react-bootstrap";

const style = {
  backgroundColor: "green",
};

const LowHeader = () => (
  <div>
    <Head>
      <link href="/your-path-to-fontawesome/css/all.css" rel="stylesheet" />
    </Head>
    <Container fluid style={style}>
      <Row>
        <Col></Col>
      </Row>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={48}
        height={48}
      >
        <image
          width={48}
          height={48}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABI0lEQVRo3u2WvQrCMBhFj7oLPotDfTMXwTj6SOLk4OtInRzrYANa09Kkf1f8LmSwla/nJFUuWCyWv80OyHqYk5WzRs0BKIA7sOkwZw3cylnHseBd+UC/UiXe4f1ysUPmCQ9+VD4vgVOkxBo4A6vK9SKBJylbPncu5iRCO18A+7Hgu0jIwKdIyMHHSMjCt5GQh/dxAci8XNXrbmrYuoROQn7nYySk4Ju6kKP9ayPbhd5Pom7nJbpQTvNJuJp7Gd8/8Lrv9pouNcJn8r9W60JTw6dIyMHHSMjCt5GQh/dxAcgc60JaElLw1oWwLpQW60JTw3eRkIFPkZCDj5GQhW8jIQ/v4wKQOdaFtCTk4ZskfgY+JDEY/GJAgSswAy68yp/FYhkgT/9uXq3Dy/YsAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTEwLTMwVDA3OjU1OjI1KzAwOjAwwHFPtAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMC0zMFQwNzo1NToyNSswMDowMLEs9wgAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"
          data-name="Group 17"
        />
      </svg>
    </Container>
  </div>
);

export default LowHeader;
