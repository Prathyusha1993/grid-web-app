import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";

function validate(MRN) {
  const errors = [];

  if (MRN.length === 0) {
    errors.push("atleast one field entry is required");
  }
  return errors;
}

class Search extends Component {
  state = {
    MRN: "",
    errors: [],
  };


  handleSearch = (e) => {
    e.preventDefault();
    const { MRN } = this.state;
    const errors = validate(MRN);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
  };

  render() {
    const { errors } = this.state;
    const mystyle = {
      position: "relative",
      top: "45%",
      width: "200px",
      border:"1px solid black"
    };
    return (
      <div className="container">
        <div className="row justify-content-md-center">
        <Form onSubmit={this.handleSearch}>
          {errors.map((error) => (
            <p style={{ color: "red" }} key={error}>
              Error: {error}
            </p>
          ))}
          <Form.Row>
            <Form.Group as={Col} xs="auto" controlId="formGridInvoiceNum" >
              <Form.Label className="font-weight-bold">Invoice # </Form.Label>
              <Form.Control type="number" style={{border:"1px solid black"}}/>
            </Form.Group>

            <Form.Group as={Col} xs="auto" controlId="formGridFirstName" >
              <Form.Label className="font-weight-bold">First Name </Form.Label>
              <Form.Control type="text" style={{border:"1px solid black"}}/>
            </Form.Group>

            <Form.Group as={Col} xs="auto" controlId="formGridLastName" >
              <Form.Label className="font-weight-bold">Last Name </Form.Label>
              <Form.Control type="text" style={{border:"1px solid black"}}/>
            </Form.Group>

            <Form.Group as={Col} xs="auto" controlId="formGridMRN">
              <Form.Label className="font-weight-bold">MRN </Form.Label>
              <Form.Control type="text" style={{border:"1px solid black"}}/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs="auto" controlId="formGridDOS" className="col-md-3 mb-3">
              <Form.Label className="font-weight-bold">
                Date Of Service
              </Form.Label>
              <Form.Control
                type="date"
                min="1900-01-01"
                max="2999-12-31"
                placeholder="dos"
                style={{border:"1px solid black"}}
              />
            </Form.Group>

            <Form.Group as={Col} xs="auto" controlId="formGridDOB" className="col-md-3 mb-3">
              <Form.Label className="font-weight-bold">Date Of Birth </Form.Label>
              <Form.Control
                type="date"
                min="1900-01-01"
                max="2999-12-31"
                placeholder="dob"
                style={{border:"1px solid black"}}
              />
            </Form.Group>

            <Form.Group as={Col} xs="auto" controlId="formGridName" className="col-md-3 mb-3">
              <Form.Label className="font-weight-bold">
                Guarantor Name
              </Form.Label>
              <Form.Control type="text" 
              style={{border:"1px solid black"}}/>
            </Form.Group>

            <Form.Group as={Col} xs="auto" controlId="formGridName" className="col-md-3 mb-3">
            <Form.Label> </Form.Label>
            <Button style={mystyle} type="submit" >
              Search
            </Button>
            </Form.Group>
          </Form.Row>
        </Form>
        </div>
      </div>
    );
  }
}

export default Search;
