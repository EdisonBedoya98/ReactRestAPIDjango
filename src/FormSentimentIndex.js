import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
class FormSentimentIndex extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };
    state = {
        loaded: false,
        texto: "",
        feeling: ""
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { texto } = this.state;
        const lead = { texto };
        const conf = {
            method: "post",
            body: JSON.stringify(lead),
            headers: new Headers({ "Content-Type": "application/json" })
        };
        fetch(this.props.endpoint, conf).then(response => {
            return response.json();
        }).then(data => {
            this.setState({ feeling: data, loaded: true })
            this.render()

        });
    };

    render() {
        const { loaded, texto, feeling } = this.state;
        return (
            <div>
                <div className="column">
                    <form>

                        <div className="field">
                            <h1>Tweet to analyze</h1>
                            <Container>
                                <Row>
                                    <Col >
                                        <div className="control ">
                                            <input
                                                autoFocus
                                                className="input"
                                                type="text"
                                                name="texto"
                                                onChange={this.handleChange}
                                                value={texto}
                                                required
                                                size="100" />
                                        </div>

                                    </Col>
                                    <Col sm={12}>
                                        <div className="mt-3">
                                            <DropdownButton
                                                title="Choose text type"
                                                id="dropdown-menu-align-right"
                                            >
                                                <Dropdown.Item eventKey="1">Tweet about Iphone</Dropdown.Item>
                                                <Dropdown.Item eventKey="2">hotel review</Dropdown.Item>

                                            </DropdownButton>

                                        </div>
                                    </Col>
                                </Row>

                            </Container>


                        </div>

                        <div className="control mt-5" >
                            <Button
                                variant="primary"
                                onClick={this.handleSubmit}
                            >
                                {loaded ? 'New analisis' : 'OK. sentiment analisis'}
                            </Button>



                        </div>
                    </form>
                </div>
                <div className="mt-5">
                    The feeling for this tweet is <b>{loaded ? (() => {
                        switch (feeling) {
                            case "[[0]]": return "Negative";
                            case "[[1]]": return "Positive";
                            default: return "Seeking";
                        }
                    })()

                        : 'Waiting analisis'}</b>

                </div>

            </div>
        );
    }
}
export default FormSentimentIndex;


