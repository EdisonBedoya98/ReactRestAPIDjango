import React from "react";
class FileInput extends React.Component {
    constructor(props) {
      super(props)
      this.uploadFile = this.uploadFile.bind(this);
    }
    
    uploadFile(e) {
      e.preventDefault()
      const reader = new FileReader()
      reader.onload = async (e) => {
        const text = (e.target.result)
        console.log(text)
        this.props.handler(text)
      };
      reader.readAsText(e.target.files[0])

    }
    
    render() {
      return <span>
        <input type="file"
        name="myFile"
        onChange={this.uploadFile} 
        color="primary"/>
      </span>
    }
}

export default FileInput;