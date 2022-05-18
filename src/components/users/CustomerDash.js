import { useState, useEffect } from "react";
import "./CustomerDash.css";
import { db } from "../../firebase/Firebase_con";
import { Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getDocs } from "firebase/firestore";

function CustomerDash() {
  const [users, setusers] = useState([]);
  const [query, setQuery] = useState("");
  const userCollectionRef = collection(db, "company");
  const [loading, setLoading] = useState(true);
  const [filtered, setfiltered] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    const data = await getDocs(userCollectionRef);
    const dt = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setusers(dt);
    setfiltered(dt);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const search = (value) => {
    const items = [...users];
    const filtered = items.filter(
      (e) => e.title.toLowerCase().search(value.toLowerCase()) != -1
    );
    if (value == "") {
      setfiltered(users);
    } else {
      setfiltered(filtered);
    }
  };

  let navigate = useNavigate();
  // const cardInfo = [
  //   {
  //     id: 1,
  //     image:
  //       "https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     title: "Cylon Hospitals.LTD",
  //     text: "Reserve Spot for medicine, Channeling",
  //     text1: "Reservation in to your door steps",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     title: "Imigation Department",
  //     text: "create your pass portaaaaaaaaaaaaaaaaaaaaaaaaa",
  //     text2: " reserve your passport",
  //   },
  // ];
  const renderCard = (card) => {
    return (
      <Card key={card.id} style={{ width: "18rem", margin: "10px" }}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <Card.Text>{card.description}</Card.Text>
          <Button
            onClick={() => navigate(`/CustomerInsdeRes/${card.id}`)}
            variant="primary"
          >
            Reserve
          </Button>
        </Card.Body>
      </Card>
    );
  };
  return (
    <div className="hero-containery">
      <div className="search-box">
        <button className="btn-search">
          <i className="fas fa-search" />
        </button>
        <input
          type="text"
          className="input-search"
          placeholder="Type to Search..."
          onChange={(e) => search(e.target.value)}
        />
      </div>
      <div className="cards">
        {loading && <div>Loading...</div>}
        <Row>{filtered && filtered.length > 0 && filtered.map(renderCard)}</Row>
      </div>
    </div>
  );
}
export default CustomerDash;
