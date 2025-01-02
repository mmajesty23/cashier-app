import React, { Component } from "react";
import { Col } from "react-bootstrap";

export default class OrderSummaryComponent extends Component {
  render() {
    return (
      <Col md={3}>
        <h3>Order Summary</h3>
        <hr />
      </Col>
    );
  }
}
