import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { HomeCard } from "../component/homeCard";
import { Context } from "../store/appContext";
import { CardDeck } from "reactstrap";
import charactersImg from "../../img/characters2-sw.jpg";
import planetsImg from "../../img/planest-sw.png";
import vehiclesImg from "../../img/vehiclessw.png";

    <CardDeck className="d-flex justify-content-around mt-5">
      <HomeCard
        img={charactersImg}
        title="Characters"
        link="/people"
        action="Explore Characters"
        color="red"
      ></HomeCard>
      <HomeCard
        img={planetsImg}
        title="Planets"
        link="/planets"
        action="Explore Planets"
        color="green"
      ></HomeCard>
      <HomeCard
        img={vehiclesImg}
        title="Vehicles"
        link="/vehicles"
        action="Explore Vehicles"
        color="blue"
      ></HomeCard>
    </CardDeck>
