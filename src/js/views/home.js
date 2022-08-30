import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import "../../styles/homeCards.css";
import { CardDeck } from "reactstrap";
import charactersImg from "../../img/characters2sw.jpg";
import planetsImg from "../../img/planetssw.png";
import vehiclesImg from "../../img/vehiclessw.png";
import { HomeCard } from "../component/homeCards.js";

export const Home = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
    actions.getData(), [];
    });
    return (
      <CardDeck className="d-flex justify-content-around mt-5">
            <HomeCard
                img={charactersImg}
                title="Characters"
                link="/character"
                action="Profile Characters"
                color="red"
            >       
            </HomeCard>
            <HomeCard
                img={planetsImg}
                title="Planets"
                link="/planets"
                action="Explore Planets"
                color="green"
            >
            </HomeCard>
            <HomeCard
                img={vehiclesImg}
                title="Vehicles"
                link="/vehicles"
                action="Vehicles Details"
                color="blue"
            >
            </HomeCard>
        </CardDeck>
      );
  };
    
