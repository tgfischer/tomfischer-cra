import React from "react";
import { animateScroll as scroll } from "react-scroll";
import Fab from "@material-ui/core/Fab";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

const ScrollTopButton = () => (
  <Fab
    onClick={() => scroll.scrollToTop({ smooth: true, duration: 250 })}
    color="primary"
  >
    <ArrowUpward />
  </Fab>
);

export default ScrollTopButton;
