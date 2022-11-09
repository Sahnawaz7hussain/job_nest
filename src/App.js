import "./App.css";
// import Companies from "./Pages/Companies";
import Searchbar from "./Components/Searchbar";
import TypesOfJob from "./Components/TypesOfJob";
import Navbar from "./Components/Navbar";
// import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Searchbar />
      <TypesOfJob />
    </div>
  );
}

export default App;
