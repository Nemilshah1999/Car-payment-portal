import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroFullScreen.css";
import { Grid } from "@material-ui/core";

const HeroFullScreen = () => {
  return (
    <>
      <div className="hero">
        <Grid container spacing={1}>
          {HeroContainer()}
        </Grid>
      </div>
    </>
  );
};

const HeroContainer = () => (
  <Grid container item sm={12}>
    <Grid item sm={12} className="hero-container">
      <h1 className="customH1">Select Your Dream Ride</h1>
      <h4 className="customH4">
          Ride with passion in your style!
      </h4>
      <hr className="new1"></hr>
    </Grid>
  </Grid>
);
export default HeroFullScreen;
