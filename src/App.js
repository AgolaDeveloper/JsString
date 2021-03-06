import logo from './logo.svg';
import './App.css';
import Stringz from './components/stringz.js'
import Arra from './components/arrayz.js'
import chess from './components/chess.jpg'


function App() {
  return (
    <div className="App">
      <div className="chess">
      <img className= "im" src={chess} width= "700px" alt="chess" />

      </div>


      <div>     
         <Stringz  />
      </div>
      <br/>
      <div>
        

      <Arra />

      </div>
      
      
    </div>
  );
}

export default App;
