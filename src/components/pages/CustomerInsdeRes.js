import { useState, useEffect } from "react";
import "./CustomerInsdeRes.css";
import { db } from "../../Firebase_con";
import { Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

const CustomerInsdeRes = () => {
  const userCollectionRef = collection(db, "ComDash");
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

  let navigate = useNavigate();
  // const cardInfo = [
  //   {
  //     id: 1,
  //     image:
  //       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     title: "Reserve for fever",
  //     text: "Reserve Spot for medicine, Channeling",
  //     text1: "Reservation in to your door steps",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     title: "Medical checkout",
  //     text: "THE TRUE GOAT",
  //     text1: "lol",
  //   },
  // ];
  const renderCard = (card) => {
    return (
      <>
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.Name}</Card.Title>
            <Card.Text>{card.Description}</Card.Text>
            <Button
              onClick={() => navigate(`/../Comtemp1`)}
              variant="primary"
              placeholder="First Name"
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
        <p>Cylon Hospitals.LTD</p>
      </div>
      <div className="cards">
        {loading && <div>Loading...</div>}
        <Row>{filtered && filtered.length > 0 && filtered.map(renderCard)}</Row>
      </div>
    </div>
  );
};
export default CustomerInsdeRes;
