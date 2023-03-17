import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import History from "../History/History";
import PieChart from "../Charts/PieChart";
import data from '../../db.json'
import Filter from "../History/Filter";

const Dashboard = () => {
  let navigate = useNavigate();
  const routeExpense = () => {
    navigate("/expense");
  };
  const routeIncome = () => {
    navigate("/income");
  };
  const routeTracker = () => {
    navigate("/tracker");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="conte1">
      <div className="con10">
                  <div className="con12">
                    <h2>Expense</h2>
                    <button onClick={routeExpense}>ADD EXPENSE</button>
                  </div>
                  <div className="con12">
                    <h2>Income</h2>
                    <button onClick={routeIncome}>ADD INCOME</button>
                  </div>
                  </div> 
      {/* <div className="con11">
        <h3>
          <span className="">Expense</span>
          <span className="income">Income</span>
        </h3>
        <button onClick={routeExpense}>ADD EXPENSE</button>
        <button onClick={routeIncome}>ADD INCOME</button>
      </div> */}
      
      <div className="con11">
        <PieChart />
        <button onClick={routeTracker} style={{width:60,height:30}}>more</button>
      </div>
      </div>
      <Filter />
    </div>
  );
};

export default Dashboard;
