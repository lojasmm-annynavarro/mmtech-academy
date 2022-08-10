import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";
import Carousel from "./Carousel.js";

// core components

function Examples() {
  return (
    <>
      <div className="section" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
        <Carousel />
        </Container>
      </div>
    </>
  );
}

export default Examples;
