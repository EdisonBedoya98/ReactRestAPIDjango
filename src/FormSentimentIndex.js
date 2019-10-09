import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'
import ButtonCarga from "./ButtonCarga";

class FormSentimentIndex extends Component {
    state = {
        loaded: false,
        clearInput: false,
        texto: "",
        feeling: "",
        endpoint: "https://apidjangoproyectoingtegrador1.herokuapp.com/api/mlpindex/"
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { texto} = this.state;
        this.setState({clearInput:!this.state.clearInput})
        if(this.state.clearInput===false){
            const lead = { texto };
            const conf = {
                method: "post", 
                body: JSON.stringify(lead),
                headers: new Headers({ "Content-Type": "application/json" })
            };
            fetch(this.state.endpoint, conf).then(response => {
                return response.json();
            }).then(data => {
                this.setState({ feeling: data, loaded: true })
                this.render()
    
            });

        }
        if(this.state.clearInput===true)
        {
            this.setState({ texto: "",feeling:""})
            this.render()
        }
     
    };
    handleSelect = eventKey => {
        if (eventKey === "RevHotel") {
            this.setState({ endpoint: "https://apidjangoproyectoingtegrador1.herokuapp.com/api/mlpindex/" })
        } else {
            this.setState({ endpoint: "https://apidjangoproyectoingtegrador1.herokuapp.com/api/index/" })
        }


    };
    render() {
        const { loaded, texto, feeling } = this.state;
        return (
            <div>
                <div className="column">
                    <form>
                        <div className="field">
                            <h1>Texto a analizar</h1>
                            <Container>
                                <Row className="justify-content-md-center">
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
                                </Row>
                                <Row className="justify-content-md-center">
                                    <div className="mt-5">
                                        El sentimiento para este texto es <b>{loaded ? (() => {
                                            switch (feeling) {
                                                case "[[0]]": return "Negativo";
                                                case "[[1]]": return "Positivo";
                                                default: return "Buscando";
                                            }
                                        })()
                                            : 'Esperando análisis'}</b>
                                    </div>
                                </Row>
                                <Row className="justify-content-md-center">
                                    <Col md="auto" >
                                        <div className="mt-4">
                                            <Nav variant="pills" defaultActiveKey="RevHotel" onSelect={this.handleSelect}>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="RevHotel">Revisión Hotel</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="RevIphone">Tweet Iphone</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="control mt-5">                          
                            <div onClick={this.handleSubmit}>                                                        
                                <ButtonCarga></ButtonCarga>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}
export default FormSentimentIndex;


