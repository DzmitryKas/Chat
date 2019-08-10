import React from "react";
import "./App.css";
// import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/chat/Main";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Main />
  //   <BrowserRouter>
  //     {/* <Navbar />       */}
  //     <Route path="/chat" component={Main} />
  //   </BrowserRouter>
  );
}

export default App;
