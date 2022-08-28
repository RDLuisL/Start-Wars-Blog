import React, { useProps, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Button
} from "reactstrap";
import "../../styles/homecard.css";

export const HomeCard = (props) => {
  return (
      <Card className="homeCard" id={props.color}>
        <CardBody className="py-0 px-0" id="img-space">
        <img
          className="img-fluid"
          alt="Card image cap"
          src={props.img}
          width="100%"
        />
        </CardBody>
        <CardBody id="text-area">
              <h3 id="title">{props.title}</h3>
          <Link to={props.link}><Button className="exploreButton">{props.action}</Button></Link>
        </CardBody>
      </Card>
  );
};
