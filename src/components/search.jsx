import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";

class Search extends Component {
  state = {};

  render() {
    return (
      <div className="search">
        <Form>
          <Form.Row>
            <Col xs={2}>
              <Form.Label>MRN </Form.Label>
              <Form.Control  />
            </Col>
            <Col>
              <Form.Label>FirstName </Form.Label>
              <Form.Control placeholder="name" />
            </Col>
            <Col>
              <Form.Label>LastName </Form.Label>
              <Form.Control placeholder="name" />
            </Col>
            <Col>
              <Form.Label>DateOfBirth </Form.Label>
              <Form.Control placeholder="dob" />
            </Col>
            <Col>
              <Form.Label>InvoiceNum </Form.Label>
              <Form.Control placeholder="num" />
            </Col>
            <Col>
              <Form.Label>DateOfService </Form.Label>
              <Form.Control placeholder="dos" />
            </Col>
            <Col>
            <Form.Label> </Form.Label>
              <Button type="submit" >Search</Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default Search;
