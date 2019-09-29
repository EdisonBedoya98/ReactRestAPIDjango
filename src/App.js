import React from 'react';
import DataProvider from "./DataProvider";
import Table from "./Table";
import FormSentimentIndex from "./FormSentimentIndex";
function App() {
  return (
    <div className="App">
      <DataProvider endpoint="http://127.0.0.1:8000/api/classifier/"
                    render={data => <Table data={data} />} />
      <FormSentimentIndex endpoint="http://127.0.0.1:8000/api/index/" />
    </div>
  );
}

export default App;
