import ListGroup from "react-bootstrap/ListGroup";

function ListGroupComponent({ category }) {
  return (
    <ListGroup className="mb-2 cursor-pointer custom-hover">
      <ListGroup.Item>{category.nama}</ListGroup.Item>
    </ListGroup>
  );
}

export default ListGroupComponent;
