import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Phishtest } from "./components/Phishtest/Phishtest";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Phishtest />
    </div>
  );
}

export default App;
