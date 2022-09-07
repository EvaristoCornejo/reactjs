
import './App.css';
import Navegador from './componentes/nav/nav';
import Lista from './componentes/lista/lista';
import Itemcount from './componentes/itemcount/itemcount';


function App() {

const hamburguesa = ["simple = 5" ];

const objetos = {};


  return (
    <div className="App">
      
      <Navegador/>

      <br/>

     <Lista items = {hamburguesa} titulo= "destacadas" />
     
     <br/>
     <br/>

    <Itemcount/>

    </div>
  );
}

export default App;
