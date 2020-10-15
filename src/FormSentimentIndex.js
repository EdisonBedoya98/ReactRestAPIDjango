import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ButtonCarga from "./ButtonCarga";

class FormSentimentIndex extends Component {
    state = {
        loaded: false,
        clearInput: false,
        text: "",
        feeling: "",
        endpoint: "http://127.0.0.1:8000/model_analysis/"
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { text} = this.state;
        this.setState({clearInput:!this.state.clearInput})
        if(text!==""&& this.state.clearInput===false){
            const lead = { text };
            const conf = {
                method: "post", 
                body: JSON.stringify(lead),
                headers: new Headers({ "Content-Type": "application/json" })
            };
            fetch(this.state.endpoint, conf).then(response => {
                return response.json();
            }).then(data => {
                console.log(data)
                this.setState({ feeling: data.feeling, loaded: true })
              //  this.setState({ feeling: data, loaded: true })
               this.render()
    
            });

        }
        if(this.state.clearInput===true)
        {
            this.setState({ text: "",feeling:""})
            this.render()
        }
     
    };

    render() {
        const { loaded, text, feeling } = this.state;
        console.log(feeling)
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
                                            name="text"
                                            onChange={this.handleChange}
                                            value={text}
                                            required
                                            size="100" />
                                    </div>
                                </Row>
                                <Row className="justify-content-md-center">
                                    <div className="mt-5">
                                        El sentimiento para este texto es <b>{loaded ? (() => {
                                            switch (feeling) {
                                                case 0: return "Negativo";
                                                case 1: return "Positivo";
                                                default: return "Buscando";
                                            }
                                        })()
                                            : 'Esperando análisis'}</b>
                                    </div>
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


