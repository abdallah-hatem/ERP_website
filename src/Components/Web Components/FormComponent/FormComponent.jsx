import React from "react";
import "./FormComponent.css";

import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
} from "shards-react";

function FormComponent({ children, title }) {
  return (
    <Card small className="mb-4">
      <CardHeader
        style={{ backgroundColor: "white" }}
        className="border-bottom"
      >
        <h6 style={{}} className="m-0">
          {title}
        </h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>{children}</Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default FormComponent;
