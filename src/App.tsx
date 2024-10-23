import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import AddProduct from "./pages/addproduct";

function App() {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
