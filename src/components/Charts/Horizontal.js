import { useState,useEffect } from "react";
import { Bar } from "react-chartjs-2";
import data from '../../db.json';
import "chart.js/auto";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Horizontal = () => {
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
  const filterr = ()=>{
    return {
       labels: record.map((data) => data.date),
        datasets: [
        {
            label: "Spent",
            data: record.map((data) => data.amount),
            backgroundColor: [
            "rgba(75,192,192,1)",
            "#CC97C1",
          "#FADAE2",
          "#BEB4D6",
          "#C1D4E3",
            ],
            borderWidth: 0,
        },
      ],
    };
}
    const option={
        indexAxis:'y',
        elements:{
          bar:{
            borderWidth:1,
            // width:"70%",
            // height:"90%"
          }
        },
        responsive:true,
        plugins:{
          // legend:{
          //   position:'left'
          // },
          title:{
            display:true,
            // text:' chart'
          }
        }
      }
      // const [userData, setUserData] = useState({
      //   labels: record.map((data) => data.id),
      //   datasets: [
      //     {
      //       label: "Spent",
      //       data: record.map((data) => data.amount),
      //       backgroundColor: [
      //         "rgba(75,192,192,1)",
      //         "#CC97C1",
      //         "#FADAE2",
      //         "#BEB4D6",
      //         "#C1D4E3",
      //       ],
      //       borderWidth: 0,
      //     },
      //   ],
      // });
      
     
        return (
          <div>
            <Bar options={option} style={{width:600,height:650}} data={filterr()} />
          </div>
        );
}

export default Horizontal