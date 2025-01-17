import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import formatNumberWithDots from "../utils/helperFunction";
import { Link } from "react-router";

export default class PurchaseComponent extends Component {
  render() {
    const { carts, purchaseCallback, calcTotalPriceMethod } = this.props;
    return (
      <div className="fixed-bottom mb-4 px-3">
        <Row>
          <Col md={{ span: 3, offset: 9 }}>
            <h5>
              Total harga:
              <strong>
                {" "}
                Rp {formatNumberWithDots(calcTotalPriceMethod(carts))}
              </strong>
            </h5>
            <Button
              variant="primary"
              className="w-100"
              onClick={() => purchaseCallback(carts)}
              as={Link}
              to="/success"
            >
              Order
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
