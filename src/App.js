import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent.js";
import ListCategoryComponent from "./components/ListCategoryComponent.js";
import ListProductComponent from "./components/ListProductComponent.js";
import OrderSummaryComponent from "./components/OrderSummaryComponent.js";
import { Container, Row } from "react-bootstrap";

export default class App extends Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <Container fluid className="mt-3">
          <Row>
            <ListCategoryComponent />
            <ListProductComponent />
            <OrderSummaryComponent />
          </Row>
        </Container>
      </>
    );
  }
}
