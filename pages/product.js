import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";

class Product extends Component {
  render() {
    return (
      <div>
        <h1>Product / สินค้า</h1>
        <div className="container">
          <div className="row">
            <div className="col"></div>
          </div>
        </div>

        <style jsx>{`
          h1 {
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            padding: 2rem;
            padding-top: 4rem;
          }
        `}</style>
      </div>
    );
  }
}
export default Product;
