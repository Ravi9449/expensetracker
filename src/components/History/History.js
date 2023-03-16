import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import "./History.css";

const History = () => {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/expense")
      .then((res) => {
        console.log(res);
        setRecord(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    // const newData = record.filter((_, i) => i !== index);
    // setTransactionData(newData);
    //const newRecord = rec
  };

  const handleUpdate = () => {};
  return (
    <div>
      <div className="table-container">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Category</th>
              <th>Note</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {record.map((rec) => (
              <tr>
                <td>{rec.amount}</td>
                <td>{rec.category}</td>
                <td>{rec.notes}</td>
                <td>{rec.date}</td>
                <td>
                  <button onClick={() => handleUpdate()}>Update</button>
                  <button onClick={() => handleDelete(rec.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
