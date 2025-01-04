import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../utils/constant";
import { Col, Row, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMartiniGlass,
  faCheese,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ iconCategoryDetails }) => {
  if (iconCategoryDetails === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} />;
  if (iconCategoryDetails === "Minuman")
    return <FontAwesomeIcon icon={faMartiniGlass} />;
  if (iconCategoryDetails === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} />;
  return;
};

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
                    <ListGroup className="mb-2 cursor-pointer">
                      <ListGroup.Item className="d-flex align-items-center gap-2">
                        <Icon iconCategoryDetails={category.nama} />
                        {category.nama}
                      </ListGroup.Item>
                    </ListGroup>
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
