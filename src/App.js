import './App.css';
import Greet from './components/greet'
import Counter from './components/counter'
import Welcome from './components/welcome'
import Functionalclick from './components/functionalclick';
import Classclick from './components/clickclass';

function App() {
  return (
    <div className="App">
      <Greet name='Sumit' nickName='Sammy'/>
      <Welcome name='Sumit' nickName='Sammy'/>
      <Counter/>
      <Functionalclick/>
      <Classclick/>
    </div>
  );
}

export default App;
