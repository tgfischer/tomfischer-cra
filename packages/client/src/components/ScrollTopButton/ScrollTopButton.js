import React from "react";
import { animateScroll as scroll } from "react-scroll";
import Button from "@material-ui/core/Button";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

const ScrollTopButton = () => (
  <Button
    onClick={() => scroll.scrollToTop({ smooth: true, duration: 250 })}
    variant="fab"
    color="primary"
  >
    <ArrowUpward />
  </Button>
);

export default ScrollTopButton;
