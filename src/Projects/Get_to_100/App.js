import Linking from './components/Linking';
import './App.css';

function App() {

  let gamePlayers = [];

  return (
    <div className="App">
      <Linking gamePlayers={gamePlayers} />
    </div>
  );
}

export default App;
