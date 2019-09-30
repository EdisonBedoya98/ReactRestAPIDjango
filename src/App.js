import React from 'react';
import DataProvider from "./DataProvider";
import Table from "./Table";
import FormSentimentIndex from "./FormSentimentIndex";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className='mt-5' align="center" >
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <div className="App" >
        {/* <DataProvider endpoint="http://127.0.0.1:8000/api/classifier/"
        render={data => <Table data={data} />} /> */}
        <FormSentimentIndex endpoint="http://127.0.0.1:8000/api/index/" />
      </div>

    </div>
  );
}

export default App;
