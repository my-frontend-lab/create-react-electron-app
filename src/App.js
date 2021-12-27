import './App.css';

function App() {
  return (
    <div className="App">
      <span>{window.API.greeting('Create React Electron App')}</span>
    </div>
  );
}

export default App;
