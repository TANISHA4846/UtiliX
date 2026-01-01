import { Link } from "react-router-dom";

function Tools() {
  return (
    <div>
      <h1>Tools</h1>
      <ul>
        <li>
          <Link to="/tools/text">Text Case Converter</Link>
        </li>
        <li>
          <Link to="/tools/word-counter">Word Counter</Link>
        </li>
        <li>
          <Link to="/tools/json">JSON Formatter</Link>
        </li>
        <li>
          <Link to="/tools/base64">Base64 Tool</Link>
        </li>
        <li>
          <Link to="/tools/PasswordChecker">Password Strength Checker</Link>
        </li>
      </ul>
    </div>
  );
}

export default Tools;
