import logo from "./logo.svg";
import "./App.css";
import useJuiceboxBalance from "./hooks/useJuiceboxBalance";
import { formatEther } from "ethers/lib/utils";

const PROJECT_ID = 1;

function App() {
  const { data: balance } = useJuiceboxBalance({ projectId: PROJECT_ID });
  const balanceETH = balance
    ? parseFloat(formatEther(balance)).toFixed(4)
    : "...";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Project {PROJECT_ID} Juicebox balance: {balanceETH} ETH
        </p>
      </header>
    </div>
  );
}

export default App;
