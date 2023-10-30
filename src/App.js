import "./App.css";
import { Route, Routes } from "react-router-dom";
import Registration from "./Pages/Registration";
import CategoryPage from "./Pages/CategoryPage";
import HomePage from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/" element={<Registration />} />
        <Route path="/categorypage" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
