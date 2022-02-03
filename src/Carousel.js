import React from "react";

const Carousel = () => {
  return (
    <div className="carouselcomp">
      {/* <div className="carousel-header">
        <p>Drawings</p>
      </div> */}
      <div class="container">
        <div class="carousel">
          <div
            id="panel-1"
            class="panel"
            style={{
              backgroundImage: `url( ${
                process.env.PUBLIC_URL + "./images/drawing1.jpg"
              })`,
            }}
          ></div>
          <div
            id="panel-2"
            class="panel"
            style={{
              backgroundImage: `url(
                ${process.env.PUBLIC_URL + "./images/drawing2.jpg"}
            )`,
            }}
          ></div>
          <div
            id="panel-3"
            class="panel"
            style={{
              backgroundImage: `url(
                ${process.env.PUBLIC_URL + "./images/drawing3.jpg"}
            )`,
            }}
          ></div>
          <div
            id="panel-4"
            class="panel"
            style={{
              backgroundImage: `url(
                ${process.env.PUBLIC_URL + "./images/drawing4.jpg"}
            )`,
            }}
          ></div>
          <div
            id="panel-5"
            class="panel"
            style={{
              backgroundImage: `url(
                ${process.env.PUBLIC_URL + "./images/drawing5.jpg"}
            )`,
            }}
          ></div>
          <div
            id="panel-6"
            class="panel"
            style={{
              backgroundImage: `url(
                ${process.env.PUBLIC_URL + "./images/drawing6.jpg"}
            )`,
            }}
          ></div>
          <div
            id="panel-7"
            class="panel"
            style={{
              backgroundImage: `url(
                ${process.env.PUBLIC_URL + "./images/drawing7.jpg"}
            )`,
            }}
          ></div>
          <div
            id="panel-8"
            class="panel"
            style={{
              backgroundImage: `url(
                ${process.env.PUBLIC_URL + "./images/drawing8.jpg"}
            )`,
            }}
          ></div>
          <div
            id="panel-9"
            class="panel"
            style={{
              backgroundImage: `url(
                ${process.env.PUBLIC_URL + "./images/drawing9.jpg"}
            )`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
