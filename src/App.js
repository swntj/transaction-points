
import { calculatePoints } from "./util";

const transactionsCount = Math.floor(Math.random() * 100);

const transactions = Array.from({ length: transactionsCount }, () =>
  Math.floor(Math.random() * 1000)
);

const result = calculatePoints(transactions);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h4>Transactions:</h4>
        <div>{transactions.join(", ")}</div>
        <br/>
        <h4>Points:</h4>
        <div>{result}</div>
      </header>
    </div>
  );
}

export default App;
