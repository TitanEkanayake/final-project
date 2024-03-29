import { useState, useEffect } from "react";
import { db, auth } from "../../firebase/Firebase_con";
import styles from "./ComRecords.module.css";
import Table from "react-bootstrap/Table";
import { collection, getDocs, where, query } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useParams } from "react-router-dom";

const ComRecords = () => {
  const [user] = useAuthState(auth);
  // const [loading, setLoading] = useState(true);
  const [filtered, setfiltered] = useState([]);
  // const { id } = useParams();
  const userCollectionRef = collection(db, "bookings");

  //querie fuction
  const currentUser = user ? user.uid : null;
  const userdocs = query(userCollectionRef, where("compId", "==", currentUser));

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getDocs(userdocs);
        const dt = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setfiltered(dt);
      } catch (error) {
        console.log(error);
      }
    };
    if (currentUser) {
      getUsers();
    }
  }, [currentUser, userdocs]);

  const renderTable = (table) => {
    return (
      <>
        <tr>
          <td>{table.uid}</td>
          <td>{table.name}</td>
          <td>{table.email}</td>
          <td>{table.address}</td>
          <td>{table.number}</td>
          <td>{table.serviceName}</td>
          <td>
            {new Date(table.date.seconds * 1000).toLocaleDateString("en-US")}
          </td>
          <td>{table.time}</td>
        </tr>
      </>
    );
  };
  return (
    <div className={styles.table}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Number</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {filtered && filtered.length > 0 && filtered.map(renderTable)}
        </tbody>
      </Table>
    </div>
  );
};
export default ComRecords;
