import React from "react";
import "./CustomerRes.css";
import { Row, Card, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

const CustomerRes = () => {
  const cardInfo = [
    {
      image:
        "https://images.unsplash.com/photo-1462206092226-f46025ffe607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      title: "Cylon Hospitals.LTD",
      text: "Doctor Channeling",
      text1: "10.30 pm - 12.30 pm",
    },
    {
      image:
        "https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Department of Imigation",
      text: "Passport renewal",
      text2: "12.30 pm - 1.30 pm ",
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
            <Button variant="primary">Delete</Button>
          </Card.Body>
        </Card>
      </>
    );
  };
  return (
    <div className="hero-containery">
      <Helmet>
        <style>{"body { background-color: red; }"}</style>
      </Helmet>
      <div className="cards">
        <Row>{cardInfo.map(renderCard)}</Row>
      </div>
    </div>
  );
};
export default CustomerRes;
