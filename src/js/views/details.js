import React, { useState, useEffect, useContext, useProps } from "react";
import { Link } from "react-router-dom";
import { DetailCard } from "../component/detailCard";

import { Context } from "../store/appContext";
import { Button } from "reactstrap";


export const Detail = () => {
  const fetchRoute = window.location.pathname;
  const { store, actions } = useContext(Context);
    useEffect(() => {
      actions.getDetails(fetchRoute);
    });
      if (fetchRoute.includes("people")) {
        return (
          <div className="container">
            <div>
              <DetailCard type="people"></DetailCard>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <Link to="/"><Button className="home-button">Back Home</Button></Link>
            </div>
          </div>
        );
      }
      if (fetchRoute.includes("planets")) {
        return (
          <div className="container">
            <div>
              <DetailCard type="planets"></DetailCard>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <Link to="/"><Button className="home-button">Back Home</Button></Link>
            </div>
          </div>
        );
      }
      if (fetchRoute.includes("vehicles")) {
        return (
          <div className="container">
            <div>
              <DetailCard type="vehicles"></DetailCard>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <Link to="/"><Button className="home-button">Back Home</Button></Link>
            </div>
        </div>
        );
      }
};