import { useState, useEffect } from "react";
import { db } from "../../firebase/Firebase_con";
import "./CustomerRes.css";
import { Row, Card, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { collection, getDocs } from "firebase/firestore";

const CustomerRes = () => {
  const userCollectionRef = collection(db, "CustomerReservations");
  const [loading, setLoading] = useState(true);
  const [filtered, setfiltered] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    const data = await getDocs(userCollectionRef);
    const dt = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setfiltered(dt);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const renderCard = (card) => {
    return (
      <>
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.service}</Card.Text>
            <Card.Text>{card.time}</Card.Text>
            <Button variant="primary">Delete</Button>
          </Card.Body>
        </Card>
      </>
    );
  };
  return (
    <div className="hero-containery">
      <Helmet>
        <style>{"body { background-color: lightblue; }"}</style>
      </Helmet>
      <div className="cards">
        {loading && <div>Loading...</div>}
        <Row>{filtered && filtered.length > 0 && filtered.map(renderCard)}</Row>
      </div>
    </div>
  );
};
export default CustomerRes;
