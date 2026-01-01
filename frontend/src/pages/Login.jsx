import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      
      localStorage.setItem("token", data.token);
      setIsLoggedIn(true); 

      // redirect to tools section
      navigate("/", { replace: true });

setTimeout(() => {
  document.getElementById("tools")
    ?.scrollIntoView({ behavior: "smooth" });
}, 100);


    } catch (error) {
      alert("Server error. Please try again.");
    }
  };
  


  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow rounded-xl">
      <h2 className="text-2xl text-blue-800 font-bold mb-6 text-center">Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-slate-600">
        New user?{" "}
        <Link
          to="/signup"
          className="text-blue-600 font-medium hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;




