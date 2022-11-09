import "./App.css";
import Companies from "./Pages/Companies";
import Searchbar from "./Components/Searchbar";
import TypesOfJob from "./Components/TypesOfJob";

function App() {
  return (
    <div className="App">
      <Companies />
      <Searchbar />
      <TypesOfJob />
    </div>
  );
}

export default App;
