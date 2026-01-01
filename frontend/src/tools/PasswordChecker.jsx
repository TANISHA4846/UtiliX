import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  let strength = 0;

if (password.length >= 8) strength++;
if (/[A-Z]/.test(password)) strength++;
if (/[a-z]/.test(password)) strength++;
if (/[0-9]/.test(password)) strength++;
if (/[^A-Za-z0-9]/.test(password)) strength++;

let label = "Weak";
let color = "red";

if (strength >= 3) {
  label = "Medium";
  color = "orange";
}

if (strength === 5) {
  label = "Strong";
  color = "green";
}
const percentage = (strength / 5) * 100;


  return (
  <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
  <h1 className="text-xl text-blue-700 font-bold mb-4 text-center">
    Password Strength Checker
  </h1>

  <input
    type="password"
    className="w-full border p-2 rounded mb-3"
    placeholder="Enter password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  <p className="font-semibold" style={{ color }}>
    Strength: {label}
  </p>
  <div className="w-full h-2 bg-gray-200 rounded mt-2">
  <div
    className={`h-2 rounded transition-all duration-300 ${
      strength <= 2
        ? "bg-red-500"
        : strength <= 4
        ? "bg-yellow-500"
        : "bg-green-600"
    }`}
    style={{ width: `${percentage}%` }}
  ></div>
</div>

</div>

  );
} 

export default PasswordChecker;
