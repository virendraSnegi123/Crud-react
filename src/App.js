// import './App.css';
import {BrowserRouter,  Routes, Route } from "react-router-dom";

import Create from './components/Create';
import Edit from "./components/Edit";
import Read from './components/Read';



function App() {
  return (
    <div className="container d-flex justify-content-center">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Read />} />
            <Route path="Create" element={<Create />} />
            <Route path="Edit" element={<Edit />} />
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
