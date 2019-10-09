import React from 'react';
// import DataProvider from "./DataProvider";
// import Table from "./Table";
import Card from 'react-bootstrap/Card'
import FormSentimentIndex from "./FormSentimentIndex";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='mt-5' align="center" >
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <div>
        <h1>MIDANSE</h1>
        <h6>Minería de Datos con Análisis de Sentimientos</h6>
      </div>
      <div className="App" >
        {/* <DataProvider endpoint="http://127.0.0.1:8000/api/classifier/"
        render={data => <Table data={data} />} /> 
                      api/mlpindex/
        */}
        <FormSentimentIndex/>
      </div>

      <div>
        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Title>Información sobre la APP</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">MIDANSE</Card.Subtitle>
            <Card.Text>
              La aplicación clasifica una opinión como positiva o negativa,
                dada por el usuario que puede ser sobre hoteles o sobre Iphone, un ejemplo
                de una opinión negativa puede ser: Me intentaron estafar un poco con una Suite y el wifi no llegaba a la habitación que nos dieron, y un ejemplo de
                 una opinión positiva puede ser: Todo muy bien, ubicación, limpieza, decoración, tamaño de la habitación, albornoz.
             </Card.Text>
            <Card.Link href="https://towardsdatascience.com/sentiment-analysis-concept-analysis-and-applications-6c94d6f58c17">Mas Información</Card.Link>

          </Card.Body>
        </Card>


      </div>
    </div>
  );
}

export default App;
