import './App.css';
import NameList from './components/NameList';
// import Greet from './components/greet'
// import Counter from './components/counter'
// import Welcome from './components/welcome'
// import Functionalclick from './components/functionalclick';
// import Classclick from './components/clickclass';
// import EventBind from './components/eventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      {/* <Greet name='Sumit' nickName='Sammy'/>
      <Welcome name='Sumit' nickName='Sammy'/>
      <Counter/>
      <Functionalclick/>
      <Classclick/>
      <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      <NameList/>
    </div>
  );
}

export default App;
