import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";

function validate(MRN) {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];

  if (MRN.length === 0) {
    errors.push("atleast one field entry is required");
  }
  return errors;
}


class Search extends Component {
  state = {
    MRN:"",
    errors:[]
  };

// validate = (MRN) => {
//   const errors = [];
//   if(MRN.length === 0){
//     errors.push("atleast one field entry is required");
//   }
//   return errors;
// }

handleSearch = (e) => {
  e.preventDefault();
    const {MRN} = this.state;
    const errors = validate(MRN);
    if(errors.length > 0){
      this.setState({ errors });
      return;
    }
}

  render() {
    const { errors } = this.state
      const mystyle = {
          position: "relative",
          left: "10%",
          top: "40%"
      };
    return (
      <div className="search">
        <Form onSubmit = {this.handleSearch}>
          {errors.map(error => (<p style={{color:'red'}} key={error}>Error: {error}</p>))}
          <Form.Row>
            <Col xs={2}>
              <Form.Label className="font-weight-bold">MRN </Form.Label>
              <Form.Control type="text" placeholder="MRN"  />
            </Col>
            <Col>
              <Form.Label className="font-weight-bold">FirstName </Form.Label>
              <Form.Control type="text" placeholder="name" />
            </Col>
            <Col>
              <Form.Label className="font-weight-bold">LastName </Form.Label>
              <Form.Control type="text" placeholder="name" />
            </Col>
            <Col>
              <Form.Label className="font-weight-bold">DateOfBirth </Form.Label>
              <Form.Control type="date" min="1900-01-01" max="2999-12-31" placeholder="dob" />
            </Col>
            <Col>
              <Form.Label className="font-weight-bold">InvoiceNum </Form.Label>
              <Form.Control type="number" placeholder="num" />
            </Col>
            <Col>
              <Form.Label className="font-weight-bold">DateOfService </Form.Label>
              <Form.Control type="date" min="1900-01-01" max="2999-12-31" placeholder="dos" />
            </Col>
            <Col>
            <Form.Label> </Form.Label>
              <Button style={mystyle} type="submit" >Search</Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default Search;
