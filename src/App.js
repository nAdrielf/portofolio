import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Jumbotron,Formnlink} from './bootstrap/barbootstrap';
import Biografi from './konteks/konteks';

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <div className="container">
        <Biografi />
        <hr />
        <Formnlink />
      </div>
    </div>
  );
}

export default App;
