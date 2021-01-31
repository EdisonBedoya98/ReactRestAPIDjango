import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";
import BasicTable from "./BasicTable";
import FileInput from "./FileInput";

class FormSentimentIndex extends Component {
  state = {
    loading: false,
    // clearInput: false,
    textArray: [],
    text: "",
    endpoint: "http://ec2-34-228-10-222.compute-1.amazonaws.com:8080/model_analysis/",
    name: "",
    code: "",
    confidence: 0,
    feeling: "",
    entities: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handler = (val) => {
    this.setState({
      text: val
    })

    console.log('hi desde el padre '+val)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    this.setState({ loading: true });
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
          this.setState({
            textArray: data.textArray,
            feeling: data.feeling,
            loading: false,
            name: data.name,
            code: data.code,
            confidence: data.confidence,
            entities: data.entities,
          });
          this.render();
        });
    } else {
      this.setState({ feeling: "", loading: false });
    }
  };

  render() {
    const {
      textArray,
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
                    <textarea
                      type="text"
                      name="text"
                      value={this.state.textAreaValue}
                      onChange={this.handleChange}
                      value={text}
                      rows={5}
                      cols={100}
                      required
                    />
                  </div>
                </Row>
            <div>
              <FileInput handler = {this.handler}/>
            </div>
                <Row className="justify-content-md-center">
                  <div className="mt-5">
                    El idioma del texto analizado es:{" "}
                    {(() => {
                      if (name === "") {
                        return <div></div>;
                      } else if (name === "Spanish") {
                        return <div>Español</div>;
                      } else if (name === "English") {
                        return <div>Ingles</div>;
                      } else {
                        return <div>Idioma no soportado</div>;
                      }
                    })()}
                  </div>
                </Row>
                <Row className="justify-content-md-center">
                  <div className="mt-5">
                    <BasicTable responseData={this.state}></BasicTable>
                  </div>
                </Row>
                <Row className="justify-content-md-center">
                  <div className="mt-5">
                    <b>Ingrese el texto y analizalo</b>
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
            <div>{loading ? <CircularProgress /> : ""}</div>
          </form>
        </div>
      </div>
    );
  }
}
export default FormSentimentIndex;
