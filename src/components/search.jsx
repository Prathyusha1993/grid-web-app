import React, { Component } from "react";
import { Form, Col, Button} from "react-bootstrap";
//import Spinner from "react-bootstrap/Spinner";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MRN: "",
            Invoice_Num: "",
            Patient_First_Name: "",
            Patient_Last_Name: "",
            DateOfBirth: "",
            Guarantor_Name: "",
            DateOfService: "",
            loading: false
        };
    }


    validateSearch = () => {
      return (
          this.state.Invoice_Num &&
          this.state.Invoice_Num.length > 0 || 
          this.state.Patient_First_Name &&
          this.state.Patient_First_Name.length > 0 || 
          this.state.Patient_Last_Name &&
          this.state.Patient_Last_Name.length > 0 || 
          this.state.DateOfBirth &&
          this.state.DateOfBirth.length > 0 ||  
          this.state.Guarantor_Name &&
          this.state.Guarantor_Name.length > 0 || 
          this.state.DateOfService &&
          this.state.DateOfService.length > 0 || 
          this.state.MRN &&
          this.state.MRN.length > 0
      );
  };

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
        }; 
        this.props.onSearch(searchParams);
        this.setState({ loading: true});
        setTimeout(() => {
            this.setState({ loading: false})
        }, 2000)
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const mystyle = {
            position: "relative",
            top: "45%",
            width: "200px",
            background: '#4CAF50'
        };
        const {loading} = this.state;
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group
                                as={Col}
                                xs="auto"
                                controlId="formGridInvoiceNum"
                            >
                                <Form.Label className="font-weight-bold">
                                    Invoice #{" "}
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    name="Invoice_Num"
                                    value={this.state.Invoice_Num}
                                    onChange={this.handleChange}
                                    style={{ border: ".5pxpx solid black" }}
                                />
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                xs="auto"
                                controlId="formGridFirstName"
                            >
                                <Form.Label className="font-weight-bold">
                                    First Name{" "}
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Patient_First_Name"
                                    value={this.state.Patient_First_Name}
                                    onChange={this.handleChange}
                                    style={{ border: ".5pxpx solid black" }}
                                />
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                xs="auto"
                                controlId="formGridLastName"
                            >
                                <Form.Label className="font-weight-bold">
                                    Last Name{" "}
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Patient_Last_Name"
                                    value={this.state.Patient_Last_Name}
                                    onChange={this.handleChange}
                                    style={{ border: ".5pxpx solid black" }}
                                />
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                xs="auto"
                                controlId="formGridMRN"
                            >
                                <Form.Label className="font-weight-bold">
                                    MRN{" "}
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="MRN"
                                    value={this.state.MRN}
                                    onChange={this.handleChange}
                                    style={{ border: ".5pxpx solid black" }}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group
                                as={Col}
                                xs="auto"
                                controlId="formGridDOS"
                                className="col-md-3 mb-3"
                            >
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
                                    style={{ border: ".5pxpx solid black" }}
                                />
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                xs="auto"
                                controlId="formGridDOB"
                                className="col-md-3 mb-3"
                            >
                                <Form.Label className="font-weight-bold">
                                    Date Of Birth{" "}
                                </Form.Label>
                                <Form.Control
                                    type="date"
                                    min="1900-01-01"
                                    max="2999-12-31"
                                    placeholder="dob"
                                    value={this.state.DateOfBirth}
                                    name="DateOfBirth"
                                    onChange={this.handleChange}
                                    style={{ border: ".5pxpx solid black" }}
                                />
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                xs="auto"
                                controlId="formGridName"
                                className="col-md-3 mb-3"
                            >
                                <Form.Label className="font-weight-bold">
                                    Guarantor Name
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={this.state.Guarantor_Name}
                                    name="Guarantor_Name"
                                    onChange={this.handleChange}
                                    style={{ border: ".5pxpx solid black" }}
                                />
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                xs="auto"
                                controlId="formGridName"
                                className="col-md-3 mb-3"
                            >
                                <Form.Label> </Form.Label>
                                <Button style={mystyle} type="submit" disabled={!this.validateSearch()} >
                                    {loading && <i className="fa fa-refresh fa-spin"></i>}
                                    {loading && <span>Loading...</span>}
                                    {!loading && <span>Search</span>}
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
