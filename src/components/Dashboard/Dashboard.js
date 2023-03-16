import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import History from "../History/History";

const Dashboard = () => {
  let navigate = useNavigate();
  const routeExpense = () => {
    navigate("/expense");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="rectangle">
        <h3>
          <span className="expense">Expense</span>
          <span className="income">Income</span>
        </h3>
        <button onClick={routeExpense}>ADD EXPENSE</button>
        <button>Add Income</button>
      </div>
      <History />
    </div>
  );
};

export default Dashboard;
