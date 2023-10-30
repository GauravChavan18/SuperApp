// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Registration from "./Pages/Registration";
import CategoryPage from "./Pages/CategoryPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/categorypage" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
