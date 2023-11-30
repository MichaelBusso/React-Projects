import { useState } from 'react';
import Keyboard from './components/Keyboard';
import Screen from './components/Screen';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [style, setStyle] = useState('blue');

  const onDataChangeHandeker = (event) => {
    if (typeof event === 'function') {
      let newData = event;
      setData(newData)
    } else {
      setData(data => [...data, { value: event, color: style }])
    }
  }

  return (
    <div className="App">
      <Screen
        dataToShow={data}
        color={style}
      />
      <Keyboard
        onDataChange={onDataChangeHandeker}
        currentData={data}
        onStyleChange={(newStyle) => setStyle(newStyle)}
        currentStyle={style}
      />
    </div>
  );
}

export default App;
