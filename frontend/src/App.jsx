import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import TextTool from "./tools/TextTool";
import WordCounter from "./tools/WordCounter";
import JsonFormatter from "./tools/JsonFormatter";
import Base64Tool from "./tools/Base64Tool";
import PasswordChecker from "./tools/PasswordChecker";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";
import BgImage from "./assets/bgimage.png";

function App() {
  // ✅ AUTH STATE (single source of truth)
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center text-slate-800"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* NAVBAR */}
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />

          <Route
            path="/login"
            element={
              <Login setIsLoggedIn={setIsLoggedIn} />
            }
          />

          <Route
            path="/signup"
            element={
              <Signup setIsLoggedIn={setIsLoggedIn} />
            }
          />

          {/* PROTECTED ROUTES */}
          <Route
            path="/tools"
            element={
              <ProtectedRoute>
                <Tools />
              </ProtectedRoute>
            }
          />

          <Route
            path="/tools/text"
            element={
              <ProtectedRoute>
                <TextTool />
              </ProtectedRoute>
            }
          />

          <Route
            path="/tools/word-counter"
            element={
              <ProtectedRoute>
                <WordCounter />
              </ProtectedRoute>
            }
          />

          <Route
            path="/tools/json"
            element={
              <ProtectedRoute>
                <JsonFormatter />
              </ProtectedRoute>
            }
          />

          <Route
            path="/tools/base64"
            element={
              <ProtectedRoute>
                <Base64Tool />
              </ProtectedRoute>
            }
          />

          <Route
            path="/tools/password"
            element={
              <ProtectedRoute>
                <PasswordChecker />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;



