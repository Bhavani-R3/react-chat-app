import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/default/Home";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Pnf from "./component/default/Pnf";

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home/>} />
        <Route path={`/login`} element={<Login/>} />
        <Route path={`/register`} element={<Register/>} />
        <Route path={`/*`} element={<Pnf/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App