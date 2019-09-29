import React, { Component } from "react";
import PropTypes from "prop-types";
class FormSentimentIndex extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };
    state = {
        // name: "",
        // email: "",
        // message: ""
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
                    <form onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label className="label">Tweet a analizar</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    name="texto"
                                    onChange={this.handleChange}
                                    value={texto}
                                    required
                                />
                            </div>
                        </div>
                        <div className="control">
                            <button type="submit" className="button is-info">
                                Do sentiment analisis
            </button>
                        </div>
                    </form>
                </div>
                <div>
                    The feeling for this tweet is <b>{loaded ? feeling : 'Waiting for click'}</b>

                </div>

            </div>
        );
    }
}
export default FormSentimentIndex;