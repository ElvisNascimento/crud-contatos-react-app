import './App.css';

function App() {
  const atividade = [
    {
      "id" : 1,
      "descrição": "primeira atividade"
    },
    {
      "id" : 2,
      "descrição": "segunda ativiadade"
    },
    {
      "id" : 3,
      "descrição": "terceira atividade"
    },

  ]

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>{atividade[0].id} {atividade[0].descrição}</li>
          <li>{atividade[1].id} {atividade[1].descrição}</li>
          <li>{atividade[2].id} {atividade[2].descrição}</li>
        </ul>
      </header>

    </div>
  );
}

export default App;
