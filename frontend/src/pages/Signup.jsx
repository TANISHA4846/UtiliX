import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      // ✅ AUTO LOGIN
      localStorage.setItem("token", data.token);
      setIsLoggedIn(true);

        // redirect to tools section
      navigate("/", { replace: true });

setTimeout(() => {
  document.getElementById("tools")
    ?.scrollIntoView({ behavior: "smooth" });
}, 100);
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
        Create Account
      </h2>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-3 border rounded"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

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
          placeholder="Generate a new password"
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
          Sign Up
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-slate-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 font-medium hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
}

export default Signup;


