import { useState } from "react";

function TextTool() {
  const [text, setText] = useState("");

  return (
    <div className="max-w-3xl mx-auto">
         <div className="bg-white p-6 md:p-8 rounded-xl shadow">
      <h1 className="text-2xl text-blue-700 font-bold mb-2">
  Text Case Converter
</h1>
<p className="text-sm text-gray-600 mb-6">
  Convert your text to uppercase or lowercase instantly.
</p>
      <textarea
  rows="6"
  value={text}
  onChange={(e) => setText(e.target.value)}
  placeholder="Enter your text here..."
  className="w-full p-4 border border-gray-300 rounded-lg
             focus:outline-none focus:ring-2 focus:ring-blue-500
             resize-none"
/>

     
      <br />
      <div className="flex flex-wrap gap-3 mt-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" onClick={() => setText(text.toUpperCase())}>
        UPPERCASE
      </button>

      <button className="bg-slate-200 px-4 py-2 rounded-lg hover:bg-slate-300 transition"
      onClick={() => setText(text.toLowerCase())}>
        lowercase
      </button>

      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      onClick={() => setText("")}>
        Clear
      </button>
      </div>
      </div>
    </div>
  );
}

export default TextTool;
