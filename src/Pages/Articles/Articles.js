import React from "react";
import Lottie from "lottie-react";
import "./Articles.css";
import cryptocurrency from "./cryptocurrency.json";
import { Container, Row, Col } from "react-bootstrap";

export default function Articles() {
  return (
    <div className="article">
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={6}>
            <Lottie
              animationData={cryptocurrency}
              loop={true}
              style={{
                height: "300px",
              }}
            />
          </Col>
          <Col xs={12} md={6}>
            <p className="article-title">
              Hatom is a decentralized, algorithmic protocol for lending and
              borrowing assets, that operates on the Elrond Network.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
