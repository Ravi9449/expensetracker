import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Expense = (props) => {
  const location = useLocation();

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(new Date().toJSON().slice(0, 10));

  useEffect(() => {
    if (location?.state?.amount === undefined) {
      setAmount("");
      setCategory("");
    } else {
      setAmount(location.state.amount);
      setCategory(location.state.category);
      console.log(setCategory);
    }
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    const regobj = { amount, category, notes, date };

    fetch("http://localhost:8001/expense", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(regobj),
    })
      .then((res) => {
        toast.success("Registered successfully");
        //window.location.href("/");
      })
      .catch((err) => {
        toast.error("Failed: " + err.message);
      });
    window.location.href("/");
  };

  let navigate = useNavigate();
  const routeDashboard = () => {
    navigate("/");
  };

  return (
    <div className="offset-lg-3 col-lg-6">
      <form id="check" className="container">
        <div className="card">
          <div className="card-header">
            <h1>Add Expenses</h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Amount<span className="errmsg">*</span>
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Category<span className="errmsg">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Select a category</option>
                    <option>Food</option>
                    <option>Groceries</option>
                    <option>Travel</option>
                    <option>Entertainment</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Notes<span className="errmsg">*</span>
                  </label>
                  <input
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    date<span className="errmsg">*</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handlesubmit}
            >
              Save
            </button>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={routeDashboard}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Expense;
