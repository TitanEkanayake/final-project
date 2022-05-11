import { useState, useEffect } from "react";
import { db } from "../../Firebase_con";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./ComRecords.module.css";
import Table from "react-bootstrap/Table";
import { addDoc, collection, getDocs } from "firebase/firestore";

const ComRecords = () => {
  const userCollectionRef = collection(db, "ComRecords");
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

  // const tableInfo = [
  //   {
  //     id: "sdsd",
  //     Fname: "sdsd",
  //     Lname: "sdsds",
  //     UName: "sasddsds",
  //   },
  //   {
  //     id: "123",
  //     Fname: "Titan",
  //     Lname: "mano",
  //     UName: "eka",
  //   },
  // ];
  const renderTable = (table) => {
    return (
      <>
        <tr>
          <td>{table.Id}</td>
          <td>{table.fname}</td>
          <td>{table.lname}</td>
          <td>{table.age}</td>
          <td>{table.gender}</td>
          <td>{table.address}</td>
          <td>{table.service}</td>
        </tr>
      </>
    );
  };
  return (
    <div className={styles.table}>
      <Table striped bordered hover>
        {" "}
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Service</th>
          </tr>
        </thead>{" "}
        <tbody>
          {filtered && filtered.length > 0 && filtered.map(renderTable)}
        </tbody>
      </Table>
    </div>
  );
};
export default ComRecords;
