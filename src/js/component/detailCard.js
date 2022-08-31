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
import "../../styles/homeCards.css";

export const DetailCard = (props) => {
  const { store, actions } = useContext(Context);
  useEffect(() => {}, []);
  let activeItem = store.activeItem; 
switch (props.type) {
    case "people":
        return (

        <div className="container">
          <Card className="detailCard">
            <div className="row d-flex gx-0 justify-content-between no-wrap">
              <div className="col-7 ">
                <div className="container d-flex-align-items-center">
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
                    className="mb-2 text-muted detailSubtitle"
                  >
                    Star Wars Profile Character
                  </CardSubtitle>
                  <Table borderless>
                    <tbody className="detailTable">
                      <tr>
                        <th scope="row">Birth Year:</th>
                        <td>{activeItem.properties.birth_year}</td>
                      </tr>
                      <tr>
                        <th scope="row">Eye Color:</th>
                        <td>{activeItem.properties.eye_color}</td>
                      </tr>
                      <tr>
                        <th scope="row">Gender:</th>
                        <td>{activeItem.properties.gender}</td>
                      </tr>
                      <tr>
                        <th scope="row">Hair Color:</th>
                        <td>{activeItem.properties.hair_color}</td>
                      </tr>
                      <tr>
                        <th scope="row">Height:</th>
                        <td>{activeItem.properties.height}</td>
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
                    className="mb-2 text-muted detailSubtitle"
                  >
                    long time ago in a galaxy far far away...
                  </CardSubtitle>
                  <Table borderless>
                    <tbody className="detailTable">
                      <tr>
                        <th scope="row">Climate:</th>
                        <td>{activeItem.properties.climate}</td>
                      </tr>
                      <tr>
                        <th scope="row">"Diameter millions kilometers:</th>
                        <td>{activeItem.properties.diameter}</td>
                      </tr>
                      <tr>
                        <th scope="row">Gravity m/s2:</th>
                        <td>{activeItem.properties.gravity}</td>
                      </tr>
                      <tr>
                        <th scope="row">Orbital Period in earth days:</th>
                        <td>{activeItem.properties.orbital_period}</td>
                      </tr>
                      <tr>
                        <th scope="row">Population humanoids:</th>
                        <td>{activeItem.properties.population}</td>
                      </tr>
                      <tr>
                        <th scope="row">Rotation Period in hrs:</th>
                        <td>{activeItem.properties.rotation_period}</td>
                      </tr>
                      <tr>
                        <th scope="row">Surface Water %:</th>
                        <td>{activeItem.properties.surface_water + " %"}</td>
                      </tr>
                      <tr>
                        <th scope="row">Terrain Types:</th>
                        <td>{activeItem.properties.terrain}</td>
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
                    className="mb-2 text-muted detailSubtitle"
                  >      {activeItem.properties.name}
                   Awesome vehicles from Star Wars Universe
                  </CardSubtitle>
                  <Table borderless>
                    <tbody className="detailTable">
                      <tr>
                        <th scope="row">Cargo Capacity in Tons:</th>
                        <td>{activeItem.properties.cargo_capacity}</td>
                      </tr>
                      <tr>
                        <th scope="row">Consumables:</th>
                        <td>{activeItem.properties.consumables}</td>
                      </tr>
                      <tr>
                        <th scope="row">Cost in Credits:</th>
                        <td>{activeItem.properties.cost_in_credits}</td>
                      </tr>
                      <tr>
                        <th scope="row">Crew N°:</th>
                        <td>{activeItem.properties.crew}</td>
                      </tr>
                      <tr>
                        <th scope="row">Manufacturer:</th>
                        <td>{activeItem.properties.manufacturer}</td>
                      </tr>
                      <tr>
                        <th scope="row">Max Atmospheric Speed kpm:</th>
                        <td>{activeItem.properties.max_atmosphering_speed}</td>
                      </tr>
                      <tr>
                        <th scope="row">Model Name:</th>
                        <td>{activeItem.properties.model}</td>
                      </tr>
                      <tr>
                        <th scope="row">Max Passengers N°:</th>
                        <td>{activeItem.properties.passengers}</td>
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
};