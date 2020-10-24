import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import BasicTable from "./BasicTable";

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
                <Row className="justify-content-md-center">
                  <div className="mt-5">
                    <BasicTable></BasicTable>
                    <List>
                      <ListItem>
                        <ListItemText primary="Idioma" secondary={name} />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Entidades"
                          secondary={entities.map((entitie) => entitie + ", ")}
                        />
                      </ListItem>
                    </List>
                  </div>
                </Row>
                <Row className="justify-content-md-center">
                  <div className="mt-5">
                    El sentimiento para este texto es{" "}
                    <b>
                      {feeling !== ""
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
            <div>{loading ? <CircularProgress /> : ""}</div>
          </form>
        </div>
      </div>
    );
  }
}
export default FormSentimentIndex;
