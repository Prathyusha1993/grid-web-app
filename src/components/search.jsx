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
  constructor(props){
    super(props);
    this.state = {
      MRN: "",
      errors: [],
      Invoice_Num:"",
      Patient_First_Name:"",
      Patient_Last_Name:"",
      DateOfBirth:"",
      Guarantor_Name:"",
      DateOfService:"",
      results: []
    }
  }


  // handleSearch = (e) => {
  //   e.preventDefault();
  //   const { MRN } = this.state;
  //   const errors = validate(MRN);
  //   if (errors.length > 0) {
  //     this.setState({ errors });
  //     return;
  //   }
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = {
      Invoice_Num: this.state.Invoice_Num,
      MRN: this.state.MRN,
      Patient_First_Name: this.state.Patient_First_Name,
      Patient_Last_Name: this.state.Patient_Last_Name,
      DateOfBirth: this.state.DateOfBirth,
      Guarantor_Name: this.state.Guarantor_Name,
      DateOfService: this.state.DateOfService,
    }; // construct from state 
    this.props.onSearch(searchParams);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value});
  }

  render() {
    const { errors } = this.state;
    const mystyle = {
      position: "relative",
      top: "45%",
      width: "200px",
    };
    return (
      <div className="container">
        <div className="row justify-content-md-center">
        <Form onSubmit={this.handleSubmit}>
          {/* {errors.map((error) => (
            <p style={{ color: "red" }} key={error}>
              Error: {error}
            </p>
          ))} */}
          <Form.Row>
            <Form.Group as={Col} xs="auto" controlId="formGridInvoiceNum" >
              <Form.Label className="font-weight-bold">Invoice # </Form.Label>
              <Form.Control type="number" name="Invoice_Num" value={this.state.Invoice_Num} onChange={this.handleChange}  style={{border:".5pxpx solid black"}}/>
            </Form.Group>

            <Form.Group as={Col} xs="auto" controlId="formGridFirstName" >
              <Form.Label className="font-weight-bold">First Name </Form.Label>
              <Form.Control type="text"  name="Patient_First_Name" value={this.state.Patient_First_Name}  onChange={this.handleChange}style={{border:".5pxpx solid black"}}/>
            </Form.Group>

            <Form.Group as={Col} xs="auto" controlId="formGridLastName" >
              <Form.Label className="font-weight-bold">Last Name </Form.Label>
              <Form.Control type="text" name="Patient_Last_Name" value={this.state.Patient_Last_Name}  onChange={this.handleChange} style={{border:".5pxpx solid black"}}/>
            </Form.Group>

            <Form.Group as={Col} xs="auto" controlId="formGridMRN">
              <Form.Label className="font-weight-bold">MRN </Form.Label>
              <Form.Control type="text"  name="MRN" value={this.state.MRN} onChange={this.handleChange} style={{border:".5pxpx solid black"}}/>
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
                value={this.state.DateOfService}
                name="DateOfService"
                onChange={this.handleChange}
                style={{border:".5pxpx solid black"}}
              />
            </Form.Group>

            <Form.Group as={Col} xs="auto" controlId="formGridDOB" className="col-md-3 mb-3">
              <Form.Label className="font-weight-bold">Date Of Birth </Form.Label>
              <Form.Control
                type="date"
                min="1900-01-01"
                max="2999-12-31"
                placeholder="dob"
                value={this.state.DateOfBirth}
                name="DateOfBirth"
                onChange={this.handleChange}
                style={{border:".5pxpx solid black"}}
              />
            </Form.Group>

            <Form.Group as={Col} xs="auto" controlId="formGridName" className="col-md-3 mb-3">
              <Form.Label className="font-weight-bold">
                Guarantor Name
              </Form.Label>
              <Form.Control type="text" 
              value={this.state.Guarantor_Name}
              name="Guarantor_Name"
              onChange={this.handleChange}
              style={{border:".5pxpx solid black"}}/>
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
