import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";

class Search extends Component {
  state = {
      MRN:''
    //   touched:{
    //       MRN: false,
    //       firstName: false
    //   }
  };

//   handleBlur = (field) => (event) => {
//       this.setState({
//           touched: {...this.state.touched, [field]: true},
//       })
//   }

handleSearch = () => {
    this.props.onButtonClick(this.state.MRN);
    this.setState({ MRN: ''})
}

  render() {
      const mystyle = {
          position: "relative",
          left: "10%",
          top: "40%"
      };
    return (
      <div className="search">
        <Form>
          <Form.Row>
            <Col xs={2}>
              <Form.Label className="font-weight-bold">MRN </Form.Label>
              <Form.Control type="number" placeholder="MRN"  />
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
              <Button style={mystyle} type="submit" disabled={!this.state.MRN} onClick={this.handleSearch} >Search</Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default Search;
