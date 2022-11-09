import "./App.css";
import Companies from "./Pages/Companies";
import Searchbar from "./Components/Searchbar";
import TypesOfJob from "./Components/TypesOfJob";
import Dummy from "./Components/Dummy2";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Companies />
      <Searchbar />
      <TypesOfJob />
      <Dummy />
    </div>
  );
}

export default App;
