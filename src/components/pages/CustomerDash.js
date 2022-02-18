import React from "react";
import "./CustomerDash.css";
import { Container, Row, Card, Button } from "react-bootstrap";

const CustomerDash = () => {
  const cardInfo = [
    {
      image:
        "https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Lebron James",
      text: "THE GOAT",
    },
    {
      image:
        "https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Alex Caruso",
      text: "THE TRUE GOAT",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <>
        <Card style={{ width: "18rem" }} key={index}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    );
  };
  return <div className="cards">{cardInfo.map(renderCard)}</div>;
};
export default CustomerDash;
