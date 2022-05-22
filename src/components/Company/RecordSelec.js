import { useState, useEffect } from "react";
import styles from "./ComDash.module.css";
import { db, auth } from "../../firebase/Firebase_con";
import { Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { Helmet } from "react-helmet";
import { useAuthState } from "react-firebase-hooks/auth";

const RecordSelec = () => {
  const [user] = useAuthState(auth);
  const userCollectionRef = collection(db, "service");
  const [loading, setLoading] = useState(true);
  const [filtered, setfiltered] = useState([]);
  //querie fuction
  const currentUser = user ? user.uid : null;
  const userdocs = query(userCollectionRef, where("uid", "==", currentUser));

  const getUsers = async () => {
    setLoading(true);
    const data = await getDocs(userdocs);
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
            <Card.Text>{card.description}</Card.Text>
            <div className={styles.Btncom1}>
              <Button
                onClick={() => navigate(`/ComRecords/${card.id}`)}
                variant="primary"
              >
                Open
              </Button>
            </div>
            <div className={styles.Btncom2} />
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
export default RecordSelec;
