import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent.js";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.js";
import Success from "./pages/Success.js";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/success" Component={Success} />
        </Routes>
      </BrowserRouter>
    );
  }
}
