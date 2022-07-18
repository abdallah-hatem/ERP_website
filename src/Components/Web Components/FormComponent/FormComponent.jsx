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
import { useTranslation } from "react-i18next";

function FormComponent({ children, title, style }) {
  const { t, i18n } = useTranslation();
  return (
    <div style={style}>
      <Card small className="mb-4">
        <CardHeader
          style={{ backgroundColor: "white" }}
          className="border-bottom"
        >
          <h6 style={{}} className="m-0">
            {t(title)}
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
    </div>
  );
}

export default FormComponent;
