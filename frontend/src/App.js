import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/Login";
import Register from "./pages/Home/Register";
import AuthRoom from "./pages/Home/AuthRoom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/blog" element={<Register />} />
                <Route path="/auth" element={<AuthRoom />} />


            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;