import logo from './logo.svg';
import './App.css';

function App() {
  function mokou() {
    window.alert("helloworld")
  }
  return (
    <div className="App">
      <header className="App-header">


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>


        <button onClick={mokou}>
          helloworld
          </button>
      </header >
    </div >
  );
}


export default App;
