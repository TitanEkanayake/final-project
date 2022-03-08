import React from "react";

import { Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ComDash = () => {
  let navigate = useNavigate();
  const cardInfo = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Cylon Hospitals.LTD",
      text: "Reserve Spot for medicine, Channeling",
      text1: "Reservation in to your door steps",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Imigation Department",
      text: "create your pass portaaaaaaaaaaaaaaaaaaaaaaaaa",
      text2: " reserve your passport",
    },
  ];
  const renderCard = (card) => {
    return (
      <>
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Card.Text>{card.text1}</Card.Text>
            <Card.Text>{card.text2}</Card.Text>
            <Button
              onClick={() => navigate(`/CustomerInsdeRes/${card.id}`)}
              variant="primary"
            ></Button>
            <Button
              onClick={() => navigate(`/CustomerInsdeRes/${card.id}`)}
              variant="primary"
            >
              Reserve
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  };
  return (
    <div className="hero-containery">
      <div className="cards">
        <Row>{cardInfo.map(renderCard)}</Row>
      </div>
    </div>
  );
};
