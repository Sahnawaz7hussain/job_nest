import "./App.css";
import Companies from "./Pages/Companies";
import Searchbar from "./Components/Searchbar";
import TypesOfJob from "./Components/TypesOfJob";
import Dummy2 from "./Components/dummy2";

function App() {
  return (
    <div className="App">
      <Companies />
      <Searchbar />
      <TypesOfJob />
      <Dummy2 />
    </div>
  );
}

export default App;
