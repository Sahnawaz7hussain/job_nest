import "./App.css";
import Companies from "./Pages/Companies";
import Searchbar from "./Components/Searchbar";
import TypesOfJob from "./Components/TypesOfJob";
import Dummy from "./Components/Dummy2";

function App() {
  return (
    <div className="App">
      <Companies />
      <Searchbar />
      <TypesOfJob />
      <Dummy />
    </div>
  );
}

export default App;
