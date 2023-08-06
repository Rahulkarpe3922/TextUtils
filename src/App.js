
//import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import Alert from "./components/alert";
//let name = "Rahul";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //darkemode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-DarkMode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils-lightMode";
    }
  };
  return (
    <>
      {/* <Navbar title="_2" abouttext="about_Text"/>   */}
      {/* <Navbar/> */}
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about"
                 element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyse Below" mode={mode}/>} /> */}
              <TextForm showAlert={showAlert} heading="Enter text to analyse Below"mode={mode}/>
          {/* </Routes> */}
          </div>
      {/* </Router> */}
    </>
  );
}
export default App;

