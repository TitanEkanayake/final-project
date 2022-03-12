import React from "react";
import styles from "./ComDash.module.css";
import { Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ComDash = () => {
  let navigate = useNavigate();
  const cardInfo = [
    {
      image:
        "https://images.unsplash.com/photo-1616628188524-65a2deb4f06f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: 1,
      title: "Add your Servise",
      text: "",
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
            <div className={styles.Btncom1}>
              <Button
                onClick={() => navigate(`/ComAddform/${card.id}`)}
                variant="primary"
              >
                Add....
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Card.Text>{card.text1}</Card.Text>
            <Card.Text>{card.text2}</Card.Text>
            <div className={styles.Btncom1}>
              <Button
                onClick={() => navigate(`/CustomerInsdeRes/${card.id}`)}
                variant="primary"
              >
                Update
              </Button>
            </div>
            <div className={styles.Btncom2}>
              <Button
                onClick={() => navigate(`/CustomerInsdeRes/${card.id}`)}
                variant="primary"
              >
                Delete
              </Button>
            </div>
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
