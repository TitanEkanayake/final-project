import { useState, useEffect } from "react";
import styles from "./ComDash.module.css";
import { db, auth } from "../../firebase/Firebase_con";
import { Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Helmet } from "react-helmet";
import { useAuthState } from "react-firebase-hooks/auth";

export const ComDash = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const [filtered, setfiltered] = useState([]);
  //querie fuction
  const uid = user ? user.uid : null;
  const userCollectionRef = collection(db, "company", uid, "service");

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

  // delete
  const deleteDocument = async (id) => {
    const userDoc = doc(db, "company", uid, "service", id);
    await deleteDoc(userDoc)
      .then(() => {
        alert("Deleted");
        window.location.reload(false);
      })
      .catch((error) => {
        alert("Unable to delete Error!:" + error);
      });
  };

  const renderCard = (card) => {
    return (
      <>
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            src={
              "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
            }
          />
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>{card.Description}</Card.Text>
            <div className={styles.Btncom1}>
              <Button
                onClick={() => navigate(`/Compupdateform/${card.id}`)}
                variant="primary"
              >
                Update
              </Button>
            </div>
            <div className={styles.Btncom2}>
              <Button
                onClick={() => {
                  deleteDocument(card.id);
                }}
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
                "https://images.unsplash.com/photo-1512314889357-e157c22f938d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171"
              }
            />
            <Card.Body>
              <Card.Title>{"Add your Service"}</Card.Title>
              <div className={styles.Btncom1}>
                <Button
                  onClick={() => navigate(`/ComResSelec/${uid}`)}
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
