import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [name, namechange] = useState("");
  const [id, idchange] = useState("");
  const [password, passwordchange] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const regobj = { name, id, password };

    fetch("http://localhost:8001/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(regobj),
    })
      .then((res) => {
        if (res.status === 500) {
          toast.error("Failed: " + "User already exists with provided info");
        }
        if (res.status === 201) {
          toast.success("Registered successfully");
          namechange("");
          idchange("");
          passwordchange("");
        }
      })
      .catch((err) => {
        toast.error("Failed: " + err.message);
      });
  };
  return (
    <div>
      <ToastContainer />
      <div className="offset-lg-3 col-lg-6" data-testid="Register">
        <form id="check" className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header">
              <h1>Welcome to Registration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Name<span className="errmsg">*</span>
                    </label>
                    <input
                      value={name}
                      placeholder="Enter your Name"
                      onChange={(e) => namechange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      EMAIL<span className="errmsg">*</span>
                    </label>
                    <input
                      value={id}
                      placeholder="Enter your Email"
                      onChange={(e) => idchange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password<span className="errmsg">*</span>
                    </label>
                    <input
                      value={password}
                      placeholder="Enter Password"
                      onChange={(e) => passwordchange(e.target.value)}
                      type="password"
                      className="form-control"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
