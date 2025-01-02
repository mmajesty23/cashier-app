import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../utils/constant";
import { Col, Row } from "react-bootstrap";
import ListGroupComponent from "./sub-components/ListGroupComponent";

export default class ListCategoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${API_URL}categories`)
      .then((res) => this.setState({ categories: res.data }));
  }

  render() {
    const { categories } = this.state;

    return (
      <>
        <Col md={3}>
          <h3>List Category</h3>
          <hr />
          <Row>
            {categories &&
              categories.map((category) => {
                return (
                  <>
                    <ListGroupComponent key={category.id} category={category} />
                  </>
                );
              })}
          </Row>
        </Col>
      </>
    );
  }
}

// 1. Create a state to hold data from rest API (v)
// 2. fetch data (v)
// 3. display data
