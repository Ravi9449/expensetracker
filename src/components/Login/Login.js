import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const [id, changeid] = useState("");
  const [password, changepassword] = useState("");
  const [isLogin, changeIsLogin] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    // If login is successful, navigate to the dashboard page
    if (validate()) {
      fetch("http://localhost:8001/users/" + id)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            toast.error("Please Enter valid email");
          } else {
            if (resp.password === password) {
              toast.success("Success");
              console.log("loggedddd");
              sessionStorage.setItem("email", id);
              navigate("/Dashboard");
              changeIsLogin(true);
              //   navigate("/");
            } else {
              toast.error("Please Enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to :" + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (id === "" || id === null) {
      result = false;
      toast.warning("Please Enter your email.");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter your password.");
    }
    return result;
  };

  //   const auth = () =>{
  //     const sessionID = localStorage.getItem(sessionID)
  //     if (sessionID) {
  //              // Verify the session ID with the server
  //              fetch('http://localhost:3001/users/' + email, {
  //                method: 'POST',
  //                headers: {
  //                  'Content-Type': 'application/json',
  //                },
  //                body: JSON.stringify({ sessionID }),
  //              })
  //                .then((response) => {
  //                  if (response.ok) {
  //                    setAuthenticated(true);
  //                  } else {
  //                    setAuthenticated(false);
  //                    localStorage.removeItem('sessionID');
  //                    window.location.href = '/login';
  //                  }
  //                })
  //                .catch((error) => {
  //                  console.error('Error verifying session:', error);
  //                });
  //            } else {
  //              setAuthenticated(false);
  //              window.location.href = '/login';
  //            }
  //   }

  return (
    <div className="loginContainer">
      <div className={"loginContainerv2"}>
        <h1>Welcome back</h1>

        <div className={"inputContainer"}>
          <label>EMAIL</label>
          <input
            onChange={(e) => changeid(e.target.value)}
            placeholder="enter your email"
            type="email"
          />
        </div>

        <div className={"inputContainer"}>
          <label>PASSWORD</label>
          <input
            onChange={(e) => changepassword(e.target.value)}
            placeholder="enter your password"
            type="password"
          />
        </div>

        <div className={"forgetmeContainer"}>
          <div>
            Remember Me <input type="checkbox" />
          </div>
          <div>
            <Link to="/account/forgotpassowrd">Forgot password?</Link>
          </div>
        </div>

        <button onClick={handleLogin} className={"loginBTN"}>
          LOGIN
        </button>

        <span className={"notreg"}>
          Not registered yet?{" "}
          <Link className={"singupBTN"} to="/register">
            Register
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
