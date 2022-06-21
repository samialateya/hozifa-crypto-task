import React from "react";
import "./Features.css";
import { Container, Row, Col } from "react-bootstrap";
import Feature from "./Feature";

export default function Features() {
  return (
    <div
      className="features"
      style={{ backgroundImage: 'url("./assets/features-light.png")' }}
    >
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={12}>
            <Container className="features-content">
              <Row>
                <Col xs={12} md={3}>
                  <Feature
                    title="Feature Title 1"
                    body="Feature description 1."
                  />
                </Col>
                <Col xs={12} md={3}>
                  <Feature
                    title="Feature Title 2"
                    body="Feature description 2."
                  />
                </Col>
                <Col xs={12} md={3}>
                  <Feature
                    title="Feature Title 3"
                    body="Feature description 3."
                  />
                </Col>
                <Col xs={12} md={3}>
                  <Feature
                    title="Feature Title 4"
                    body="Feature description 4."
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
