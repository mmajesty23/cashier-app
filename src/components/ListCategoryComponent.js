import React, { Component } from "react";
import { Col } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constant";
import { ListGroup } from "react-bootstrap";

export default class ListCategoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    try {
      axios
        .get(`${API_URL}categories`)
        .then((res) => this.setState({ categories: res.data }));
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const { categories } = this.state;
    const { changeChoosenCategory, choosenCategory } = this.props;

    return (
      <>
        <Col md={3}>
          <h3>List Category</h3>
          <hr />

          <ListGroup>
            {categories &&
              categories.map((category) => {
                return (
                  <ListGroup.Item
                    key={category.id}
                    className={
                      choosenCategory === category.nama
                        ? "category--active"
                        : ""
                    }
                    onClick={() => changeChoosenCategory(category.nama)}
                    style={{ cursor: "pointer" }}
                  >
                    {category.nama}
                  </ListGroup.Item>
                );
              })}
          </ListGroup>
        </Col>
      </>
    );
  }
}
