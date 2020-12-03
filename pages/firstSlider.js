import React, { Component } from "react";
import AllSlider from "./AllSlide";
import SecondSlider from "./secondSlider";
import Product from "./product";

class firstSlider extends Component {
  render() {
    return (
      <div>
        <AllSlider />
        <div>
          <SecondSlider />
          <Product />
        </div>
        {/* <style jsx>{`
          @media screen and (min-width: 320px) and (max-width: 770px) {
            SecondSlider {
              margin-top: 80%;
            }
          }
        `}</style> */}
      </div>
    );
  }
}

export default firstSlider;
