import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import data from '../../db.json';
import "./BarChart.css";
import { useNavigate } from "react-router-dom";
import { auto } from "@popperjs/core";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";


const BarChart = () => {
  const [record, setRecord] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    let user = sessionStorage.getItem("email");
    axios
      .get(`http://localhost:8001/expense?user=${user}`)
      .then((res) => {
        setRecord(res.data);
      })
      .catch((err) => {});
  };
  
  const [categoryFilter, setCategoryFilter] = useState("");
  const filteredIncome = record.filter((item) => item.category === categoryFilter || categoryFilter === "");

  const filterr = ()=>{
    const filteredIncome = ((item) => item.category === categoryFilter || categoryFilter === "");
    return {
       labels: filteredIncome.map((data) => data.date),
        datasets: [
        {
            label: "Spent",
            data: filteredIncome.map((data) => data.amount),
            backgroundColor: [
            "rgba(75,192,192,1)",
            ],
            borderWidth: 0,
        },
      ],
    };
}

  return (
    <div>
        <select style={{width:120,marginLeft:'50%'}} value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                <option value="">All</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                <option value="Others">Others</option>
            </select>
            <Bar style={{width:450,height:300}}  data={filterr()} />
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
            {filteredIncome.map((rec) => (
              <tr>
                <td>{rec.amount}</td>
                <td>{rec.category}</td>
                <td>{rec.notes}</td>
                <td>{rec.date}</td>
                <td>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BarChart;
