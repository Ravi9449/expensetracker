import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Speech from "./components/Speech/Speech";

function App() {
  return (
    <div>
      <div>
        <Header />
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
