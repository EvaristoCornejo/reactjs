import logo from './logo.svg';
import './App.css';
import Navegador from './componentes/nav/nav';
import Lista from './componentes/lista/lista';

function App() {

const hamburguesa = ["cheddar","big mac", "simple" ];

const objetos = {};


  return (
    <div className="App">
      
      <Navegador/>

      <br/>

     <Lista items = {hamburguesa} titulo= "destacadas" />

    </div>
  );
}

export default App;
