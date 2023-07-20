import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

export const ImageSlider = (props) => {
  return (
    <div>
      <header>
        <h2 className="hereare my-5">Here are some of my sketches..</h2>
        <div className="card-wrapper my-5">
        <div class="card">
          <img
            class="card-img-top"
            src={props.luffy}
            alt="Card image cap"
          />
          
        </div>

        <div class="card">
          <img
            class="card-img-top"
            src={props.eren}
            alt="Card image cap"
          />
          
        </div>

        <div class="card">
          <img
            class="card-img-top"
            src={props.zoro}
            alt="Card image cap"
          />
          
        </div>
        </div>
      </header>
    </div>
  );
};
