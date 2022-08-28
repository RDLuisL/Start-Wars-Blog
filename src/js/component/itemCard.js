import React, {useProps} from "react";
import { Link } from "react-router-dom"
import {
    Card, 
    CardImg, 
    CardTitle, 
    CardBody, 
    Button
} from "reactstrap"
import "../../styles/itemCard.css"
import mando from "../../img/mando.jpg"

export const ItemCard = (props) => {
  return (
    <Card className="itemCard">
      <CardImg
        className="cardImg"
        alt="Card image cap"
        src={mando}
        top
        width="100%"
      />
      <CardBody className="cardBody">
            <CardTitle tag="h5" className="cardTitle">{props.name}</CardTitle>
                <div className="d-flex justify-content-between">
                    <Link to={"/"}>
                    <Button className="detailButton">
                        Details
                    </Button>
                    </Link>
                    <Button className="favoriteButton"onClick={() => {}}>
                        <i class="far fa-heart"></i>
                    </Button>
                </div>
            </CardBody>
    </Card>
  );
};