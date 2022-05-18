import { useState, useEffect } from "react";
import styles from "./ComDash.module.css";
import { db } from "../../firebase/Firebase_con";
import { Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { Helmet } from "react-helmet";

export const ComDash = () => {
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

  const renderCard = (card) => {
    return (
      <>
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>{card.Description}</Card.Text>
            <div className={styles.Btncom1}>
              <Button
                onClick={() => navigate(`/ComResSelec/${card.id}`)}
                variant="primary"
              >
                Update
              </Button>
            </div>
            <div className={styles.Btncom2}>
              <Button
                onClick={() => navigate(`#/${card.id}`)}
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
      <Helmet>
        <style>{"body { background-color: lightblue; }"}</style>
      </Helmet>
      <div className="cards">
        {loading && <div>Loading...</div>}
        <Row>
          <Card style={{ width: "18rem", height: "18rem", margin: "10px" }}>
            <Card.Img
              variant="top"
              src={
                "https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
            />
            <Card.Body>
              <Card.Title>{"Add your Service"}</Card.Title>
              <div className={styles.Btncom1}>
                <Button
                  onClick={() => navigate(`/ComResSelec`)}
                  variant="primary"
                >
                  Add....
                </Button>
              </div>
            </Card.Body>
          </Card>
          {filtered && filtered.length > 0 && filtered.map(renderCard)}
        </Row>
      </div>
    </div>
  );
};
export default ComDash;
