// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Registration from "./Pages/Registration";
import CategoryPage from "./Pages/CategoryPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/categorypage" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
