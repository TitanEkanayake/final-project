import { useState, useEffect } from "react";
import "./CustomerInsdeRes.css";
import { db } from "../../firebase/Firebase_con";
import { Row, Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

const CustomerInsdeRes = () => {
  const [loading, setLoading] = useState(true);
  const [filtered, setfiltered] = useState([]);
  const { id } = useParams();
  const userCollectionRef = collection(db, "company", id, "service");

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const data = await getDocs(userCollectionRef);
      const dt = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setfiltered(dt);
      setLoading(false);
    };
    if (userCollectionRef) {
      getUsers();
    }
  }, [userCollectionRef]);

  let navigate = useNavigate();

  const renderCard = (card) => {
    return (
      <>
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>{card.Description}</Card.Text>
            <Button
              onClick={() =>
                navigate(
                  `/Comtemp1/${card.id}/${id}/${card.name}/${card.date}/${
                    card.time
                  }/${card.toTime}`
                )
              }
              variant="primary"
            >
              Manul Reserve
            </Button>
            <span />
            <Button
              onClick={() =>
                navigate(
                  `/Comtemp2/${card.id}/${id}/${card.name}/${card.date}/${
                    card.time
                  }/${card.toTime}`
                )
              }
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
    <div className="hero-container6">
      <div className="hero-container-welcome">
        <h1>Welcome</h1>
      </div>
      <div className="cards">
        {loading && <div>Loading...</div>}
        <Row>{filtered && filtered.length > 0 && filtered.map(renderCard)}</Row>
      </div>
    </div>
  );
};
export default CustomerInsdeRes;
