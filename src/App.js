import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
import Message from './components/message'

function App() {
  return (
    <div className="App">
      {/* <Greet name='Sumit'/>
      <Greet name='Rumit'/>
      <Welcome/> */}
      <Message/>
    </div>
  );
}

export default App;
