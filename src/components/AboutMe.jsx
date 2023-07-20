import React from "react";

import { useState, useEffect } from "react";

export const AboutMe = () => {
  const [isActive, setIsActive] = useState({
    id: "divOne d-none",
  });

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  const cancelBtn = (e) => {
    setIsActive({
      id: 'divOne d-none'
    });
  };

  const hideShowDiv = (e) => {
    setIsActive({
      id: e.target.id,
    });
  };
  return (
    <div className="card-container">
      <div className="btn-edit">
        <h3 className="btn-dark">
          <button
            onClick={(e) => {
              hideShowDiv(e);
            }}
            className="btn btn-dark"
            id="divOne"
          >
            Bio
          </button>
        </h3>
      </div>
      <div
        className={isActive.id === "divOne" ? `divOne` : "divOne d-none"}
        id="text-sample"
      >
        <div className="close-button">
          <button 
          onClick={(e) => {
            cancelBtn(e);
          }}
          className="close-modal">&times;</button>
        </div>

        <h1 className="main-name">Joyal Corda</h1>
        <br/>
        <div className="resize">
          <p className="p-text">I'm 20 years old. I've always been passionate about drawing / sketching anime characters and is one of the fun things that I like to do in my free time.</p>
        </div>
      </div>
    </div>
  );
};
