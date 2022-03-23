
import './App.css';
import { useState } from 'react';
import BoxForm from './components/BoxForm';
import Boxes from './views/Boxes';

function App() {

  const [boxes,setBoxes]=useState([]);

  return (
    <div className="App">
      <BoxForm boxes={boxes} setBoxes={setBoxes}></BoxForm>
      <Boxes boxes={boxes} ></Boxes>
    </div>
  );
}

export default App;
