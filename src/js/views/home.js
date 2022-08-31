import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import "../../styles/homeCards.css";
import { CardDeck } from "reactstrap";
import peopleImg from "../../img/characters2sw.jpg";
import planetsImg from "../../img/planetssw.png";
import vehiclesImg from "../../img/vehiclessw.png";
import { HomeCard } from "../component/homeCards.js";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
    actions.getData(), [];
    });
    return (
      // Home Landingcards
      <CardDeck className="d-flex justify-content-around mt-5">
            <HomeCard
                img={peopleImg}
                title="people"
                link="/character"
                action="Profile Characters"
                color="channel1"
            >       
            </HomeCard>

            <HomeCard
                img={planetsImg}
                title="Planets"
                link="/planets"
                action="Explore Planets"
                color="channel2"
            >
            </HomeCard>
            
            <HomeCard
                img={vehiclesImg}
                title="Vehicles"
                link="/vehicles"
                action="Vehicles Details"
                color="channel3"
            >
            </HomeCard>
        </CardDeck>
      );
  };
    
