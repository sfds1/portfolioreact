import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

import bone from "../images/bone.png";
import notetaker from "../images/notetaker.png";
import doglogo from "../images/doglogo.png";

import "../../App.css"

function Portfolio() {
  return (
    <div className="container">
      <h1>Portfolio Page</h1>

      <p>
        This page uses React Bootstrap Card component
      </p>

      <CardDeck>
        <Card>
          <a href=" https://secret-eyrie-30352.herokuapp.com/" target="_blank">
            <Card.Img variant="top" src={notetaker} />
          </a>
          <Card.Body>
            <Card.Title>Note Taker App</Card.Title>
            <Card.Text>
              This is an app my owner created to allow a user to take notes.
      </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <a href="https://www.ilovefamilydog.org/" target="_blank">
            <Card.Img variant="top" src={doglogo} />
          </a>
          <Card.Body>
            <Card.Title>Family Dog Rescue</Card.Title>
            <Card.Text>
              This is the place that rescued me
      </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={bone} />
          <Card.Body>
            <Card.Title>Bone card</Card.Title>
            <Card.Text>
              Another card for fun
      </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}




export default Portfolio;
