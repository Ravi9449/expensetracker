import { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import data from '../../db.json';
import "chart.js/auto";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OptionChart = () => {
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
    const filterr = ()=>{
        const filteredIncome = record.filter((item) => item.category === categoryFilter || categoryFilter === "");
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
            
            <select style={{width:220,marginLeft:'50%'}} value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}>
                    <option value=" ">Select a category</option>
                    <option value="food">Food</option>
                    <option value="groceries">Groceries</option>
                    <option value="travel">Travel</option>
                    <option value="entertainment">Entertainment</option>
            </select>
          
            <Bar style={{width:450,height:300}}  data={filterr()} />
          </div>
        );
}

export default OptionChart
