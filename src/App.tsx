import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import AddProduct from "./pages/addproduct";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";

function App() {
  const authToken = useSelector((state: RootState) => state.user.token);

  const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
    return authToken ? element : <Navigate to="/login" />;
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Router>
        <Header />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Login />} />
          <Route
            path="/login"
            element={authToken ? <Navigate to="/addProduct" /> : <Login />}
          />
          <Route
            path="/register"
            element={authToken ? <Navigate to="/addProduct" /> : <Register />}
          />

          {/* Protected route for AddProduct */}
          <Route
            path="/addProduct"
            element={<ProtectedRoute element={<AddProduct />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
