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
        <FormSentimentIndex />
      </div>

      <div>
        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Title>Información sobre la APP</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">MIDANSE</Card.Subtitle>
            <Card.Text>
              La aplicación MIDANSE clasifica una opinión como positiva o negativa. Actualmente funciona bajo dos modelos entrenados con textos de dos dominios: revisiones de servicios hoteleros y tweets sobre el producto Iphone. Ejemplos de opiniones que puede clasificar la aplicación:
              
 </Card.Text>
            <Card.Text>
              "Me intentaron estafar un poco con una Suite y el wifi no llegaba a la habitación que nos dieron" <b>(Negativa)</b>
             
             
   </Card.Text>
            <Card.Text>
              "Todo muy bien, ubicación, limpieza, decoración, tamaño de la habitación" <b>(Positiva)</b>
           
           
     </Card.Text>
            <Card.Body>
              <Card.Text>Desarrollada por:</Card.Text>
              <Card.Text>Edison Bedoya (edison.bedoyag@udea.edu.co)</Card.Text>
              <Card.Text>Santiago Quintero (santiago.quinteroh@udea.edu.co )</Card.Text>
              <Card.Text>Antonio Tamayo (ajtamayoh@gmail.com)</Card.Text>
            </Card.Body>
            <Card.Text></Card.Text>
            <Card.Text>

            <Card.Text> Departamento de Ingeniería de Sistemas</Card.Text>

            <Card.Text> Facultad de Ingeniería</Card.Text>
            <Card.Text>Universidad de Antioquia</Card.Text>
             
             <Card.Text>Medellín-Colombia</Card.Text>
              <Card.Text>   2019</Card.Text>
              
           
              
</Card.Text>
          </Card.Body>
        </Card>


      </div>
    </div>
  );
}

export default App;
