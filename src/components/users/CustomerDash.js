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

  const renderCard = (card) => {
    return (
      <Card key={card.id} style={{ width: "18rem", margin: "10px" }}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
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
