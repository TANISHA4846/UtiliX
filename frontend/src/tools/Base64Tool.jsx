import { useState } from "react";

function Base64Tool() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const encode = () => {
    setResult(btoa(text));
  };

  const decode = () => {
    try {
      setResult(atob(text));
    } catch {
      setResult("❌ Invalid Base64 string");
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
         <div className="bg-white p-6 md:p-8 rounded-xl shadow">
      <h1 className="text-2xl text-blue-700 font-bold mb-2">
  Base64 Encoder / Decoder
</h1>

<p className="text-sm text-gray-600 mb-6">
  Encode text to Base64 or decode Base64 back to readable text.
</p>


      <textarea
  rows="5"
  value={text}
  onChange={(e) => setText(e.target.value)}
  placeholder="Enter text or Base64 string..."
  className="w-full p-4 border border-gray-300 rounded-lg
             font-mono text-sm
             focus:outline-none focus:ring-2 focus:ring-blue-500
             resize-none"
/>


      <br />

      <div className="flex flex-wrap gap-3 mt-4">
  <button
    onClick={encode}
    className="bg-blue-600 text-white px-4 py-2 rounded-lg
               hover:bg-blue-700 transition"
  >
    Encode
  </button>

  <button
    onClick={decode}
    className="bg-slate-200 px-4 py-2 rounded-lg
               hover:bg-slate-300 transition"
  >
    Decode
  </button>
</div>


      <div className="mt-6">
  <h3 className="text-sm font-semibold text-gray-600 mb-2">
    Result
  </h3>

  <pre className="bg-slate-100 p-4 rounded-lg text-sm
                  overflow-auto font-mono">
    {result}
  </pre>
</div>

      </div>
    </div>
  );
}

export default Base64Tool;
