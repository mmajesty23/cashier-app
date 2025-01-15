import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router";

export default class Success extends Component {
  render() {
    return (
      <div className="mt-4 text-center">
        <Image src="assets/images/success.png" width={500} />
        <h2>Success Ordered</h2>
        <p>Thank you for your order!</p>
        <Button variant="primary" as={Link} to="/">
          Back
        </Button>
      </div>
    );
  }
}
