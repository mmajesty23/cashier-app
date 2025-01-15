import React, { Component } from "react";

import { BrowserRouter, Route, Routes } from "react-router";

import NavbarComponent from "./components/NavbarComponent";

import { Home, Success } from "./pages";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/success" Component={Success} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
