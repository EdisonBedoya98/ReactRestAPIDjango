import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";
import FolderList from "./FolderList";

class FormSentimentIndex extends Component {
  state = {
    loading: false,
   // clearInput: false,
    text: "",
    endpoint: "http://127.0.0.1:8000/model_analysis/",
    name: "",
    code: "",
    confidence: 0,
    feeling: "",
    entities: [],
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    this.setState({ loading: true })
    this.render();
    if (text !== "") {
      const lead = { text };
      const conf = {
        method: "post",
        body: JSON.stringify(lead),
        headers: new Headers({ "Content-Type": "application/json" }),
      };
      fetch(this.state.endpoint, conf)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.setState({ feeling: data.feeling, loading: false });
          this.render();
        });
    }else{
        this.setState({ feeling: "",loading: false });
    }
  };

  render() {
    const {
    loading,
      text,
      name,
      code,
      confidence,
      feeling,
      entities,
    } = this.state;

    //   console.log(feeling)
    //     console.log(entities)
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
                      size="100"
                    />
                  </div>
                </Row>
                <Row className="justify-content-md-center">
                  <div className="mt-5">
                      
                    <b>
                      {text}, {name}, {code}, {confidence}, {feeling},
                      {entities[0]}
                    </b>
                  </div>
                </Row>
                <Row className="justify-content-md-center">
                  <div className="mt-5">
                    El sentimiento para este texto es{" "} 
                    <b>
                      {feeling!==""
                        ? (() => {
                            if (feeling <= 0.5) {
                              return "Negativo 😟";
                            } else {
                              return "Positivo 🤗";
                            }
                          })()
                        : "Ingrese el texto y analizalo"}
                    </b>
                  </div>
                </Row>
              </Container>
            </div>
            <div className="control mt-5">
              <Button
                onClick={this.handleSubmit}
                variant="contained"
                size="large"
                color="primary"
              >
                Analizar
              </Button>
            </div>
            <div>
              {loading ? <CircularProgress  /> : ""}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default FormSentimentIndex;
