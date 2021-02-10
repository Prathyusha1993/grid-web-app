import React, { Component } from "react";

class DemoSearch extends Component {
    state={
        id:'',
        title:'',
        stock:'',
        rate:''
    };

    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value});
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} xs="auto" controlId="formGridInvoiceNum" >
                            <Form.Label className="font-weight-bold">title </Form.Label>
                            <Form.Control type="number" name="title" value={this.state.title} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} xs="auto" controlId="formGridInvoiceNum" >
                            <Form.Label className="font-weight-bold">stock </Form.Label>
                            <Form.Control type="number" name="stock" value={this.state.stock} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} xs="auto" controlId="formGridInvoiceNum" >
                            <Form.Label className="font-weight-bold">rate </Form.Label>
                            <Form.Control type="number" name="rate" value={this.state.rate} onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
            </Form>
            </div>
        );
    }
}

export default DemoSearch;