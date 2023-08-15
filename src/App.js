import './App.css';

function App(props) {
  return (
    <div className="App">
      <p>
        {props.children}
      </p>
    </div>
  );
}

export default App;
