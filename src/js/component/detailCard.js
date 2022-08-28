import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Table,
  Button,
} from "reactstrap";
import mando from "../../img/mando.jpg";
import "../../styles/detailCard.css";


switch (props.type) {
    case "characters":
        return (
        <div className="container">
          <Card className="detailCard">
            <div className="row d-flex gx-0 justify-content-between no-wrap">
              <div className="col-7 ">
                <div className="container d-flex-align-items-center">
                  <CardImg
                    className="detailImage"
                    alt="Card image cap"
                    src={babyYoda}
                  />
                </div>
              </div>
              <div className="col-5 ">
                <CardBody>
                  <CardTitle className="detailTitle">
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    className="detailSubtitle"
                  >
                    Star Wars Profile Character
                  </CardSubtitle>
                  <Table borderless>
                    <tbody className="detailTable">
                      <tr>
                        <th scope="row">Birth Year</th>
                        <td>*****</td>
                      </tr>
                      <tr>
                        <th scope="row">Eye Color</th>
                        <td>*****</td>
                      </tr>
                      <tr>
                        <th scope="row">Gender</th>
                        <td>*****</td>
                      </tr>
                      <tr>
                        <th scope="row">Hair Color</th>
                        <td>*****</td>
                      </tr>
                      <tr>
                        <th scope="row">Height</th>
                        <td>*****</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </div>
            </div>
          </Card>
        </div>
      );
    case "planets":
      return (
        <div className="container">
          <Card className="detailCard">
            <div className="row d-flex gx-0 justify-content-between no-wrap">
              <div className="col-7 ">
                <div className="container">
                  <CardImg
                    className="detailImage"
                    alt="Card image cap"
                    src={mando}
                  />
                </div>
              </div>
              <div className="col-5 ">
                <CardBody>
                  <CardTitle className="detailTitle">
                    {activeItem.properties.name}
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    className="detailSubtitle"
                  >
                    long time ago in a galaxy far far away...
                  </CardSubtitle>
                  <Table borderless>
                    <tbody className="detailTable">
                      <tr>
                        <th scope="row">Climate:</th>
                        <td>????</td>
                      </tr>
                      <tr>
                        <th scope="row">"Diameter millions kilometers:</th>
                        <td>????</td>
                      </tr>
                      <tr>
                        <th scope="row">Gravity m/s2:</th>
                        <td>????</td>
                      </tr>
                      <tr>
                        <th scope="row">Orbital Period in earth days:</th>
                        <td>????</td>
                      </tr>
                      <tr>
                        <th scope="row">Population humanoids:</th>
                        <td>????</td>
                      </tr>
                      <tr>
                        <th scope="row">Rotation Period in hrs:</th>
                        <td>????</td>
                      </tr>
                      <tr>
                        <th scope="row">Surface Water %:</th>
                        <td>????</td>
                      </tr>
                      <tr>
                        <th scope="row">Terrain Types:</th>
                        <td>????</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </div>
            </div>
          </Card>
        </div>
      );
    case "vehicles":
      return (
        <div className="container">
          <Card className="detailCard">
            <div className="row d-flex justify-content-between no-wrap">
              <div className="col-7">
                <div className="container px-0 py-0 my-autos">
                  <CardImg
                    className="detailImage"
                    alt="Card image cap"
                    src={mando}
                  />
                </div>
              </div>
              <div className="col-5">
                <CardBody>
                  <CardTitle className="detailTitle">
                   
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    className="detailSubtitle"
                  >
                   Awesome vehicles from Star Wars Universe
                  </CardSubtitle>
                  <Table borderless>
                    <tbody className="detailTable">
                      <tr>
                        <th scope="row">Cargo Capacity in Tons:</th>
                        <td>????</td>
                      </tr>
                      <tr>
                        <th scope="row">Consumables:</th>
                        <td>????</td>
                      </tr>
                      <tr>
                        <th scope="row">Cost in Credits:</th>
                        <td>????</td>
                      </tr>
                      <tr>
                        <th scope="row">Crew:</th>
                        <td>????</td>
                      </tr>
                      <tr>
                        <th scope="row">Manufacturer:</th>
                        <td>????</td>
                      </tr>
                      <tr>
                        <th scope="row">Max Atmospheric Speed kpm:</th>
                        <td>????</td>
                      </tr>
                      <tr>
                        <th scope="row">Model Name:</th>
                        <td>????</td>
                      </tr>
                      <tr>
                        <th scope="row">Max Passengers:</th>
                        <td>????</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </div>
            </div>
          </Card>
        </div>
);
};