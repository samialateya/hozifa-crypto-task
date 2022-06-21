import React from "react";
import { Card } from "react-bootstrap";

export default function (props) {
  return (
    <Card
      bg={"warning"}
      text={"white"}
      style={{ width: "18rem", cursor: "pointer" }}
      className="mb-2"
    >
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}
