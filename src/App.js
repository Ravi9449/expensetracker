import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Speech from "./components/Speech/Speech";
import HeaderBeforeLogin from "./components/Header/HeaderBeforeLogin";

function App() {
  return (
    <div>
      <div>
        {/* If else condition to render header */}
        {/* <Header /> */}
        <HeaderBeforeLogin />
      </div>
      <div>
        <Speech />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
