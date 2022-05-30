import { useState, useEffect } from "react";
import { db, auth } from "../../firebase/Firebase_con";
import "./CustomerRes.css";
import { Row, Card, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import {
  collection,
  getDocs,
  where,
  deleteDoc,
  query,
  doc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { jsPDF } from "jspdf";

const CustomerRes = () => {
  const [user] = useAuthState(auth);
  const userCollectionRef = collection(db, "bookings");
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

  // delete
  const deleteDocument = async (id) => {
    const userDoc = doc(db, "bookings", id);
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
    //PDF
    const saveFilePDf = () => {
      const date = new Date(card.date.seconds * 1000).toLocaleDateString(
        "en-US"
      );
      const pdfData = [
        "                            RESERVATION.LK",
        "\n",
        "Customer name = ",
        card.name,
        "\n",
        "Service name = ",
        card.serviceName,
        "\n",
        "Date = ",
        date,
        "\n",
        "Time = ",
        card.time,
        "\n",
        "Resferance ID = ",
        card.serviceId,
        "\n",
        "email = ",
        card.email,
      ];
      const doc = new jsPDF();

      doc.text(pdfData, 10, 10);
      doc.save("Reservation.LK.pdf");
    };
    return (
      <>
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.serviceName}</Card.Title>
            <Card.Text>{card.email}</Card.Text>
            <Card.Text>
              {new Date(card.date.seconds * 1000).toLocaleDateString("en-US")}
            </Card.Text>
            <Card.Text>{card.time}</Card.Text>
            <Button variant="primary" onClick={saveFilePDf}>
              Download PDF
            </Button>
            <span />
            <Button
              variant="primary"
              onClick={() => {
                deleteDocument(card.id);
              }}
            >
              Delete
            </Button>
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
