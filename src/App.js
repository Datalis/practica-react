
import './App.css';

function App() {
  const user = {
    name: "Rosa",
    last_name: "Ocana"
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Nombre: {user.name}</p>
        <p>Apellido: {user.last_name}</p>
      </header>
    </div>
  );
}

export default App;
