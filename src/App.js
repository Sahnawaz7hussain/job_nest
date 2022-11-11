import "./App.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import MainRoute from "./Pages/MainRoute";
import RecommendedJobs from "./Pages/RecommendedJobs";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <MainRoute />
    </div>
  );
}

export default App;
