import { useState } from "react";

function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
    } catch (error) {
      setOutput("❌ Invalid JSON");
    }
  };

  return (
    <div  className="max-w-3xl mx-auto">
         <div className="bg-white p-6 md:p-8 rounded-xl shadow">
      <h1 className="text-2xl text-blue-700 font-bold mb-2">
  JSON Formatter
</h1>

<p className="text-sm text-gray-600 mb-6">
  Format and beautify raw JSON data instantly.
</p>


      <textarea
  rows="8"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder='Paste raw JSON here...'
  className="w-full p-4 border border-gray-300 rounded-lg
             font-mono text-sm
             focus:outline-none focus:ring-2 focus:ring-blue-500
             resize-none"
/>


      <br />
      <div className="mt-4">
      <button className="bg-blue-600 text-white px-5 py-2 rounded-lghover:bg-blue-700 transition"
       onClick={formatJson}>
        Format JSON</button>
      </div>
      <div className="mt-6">
  <h3 className="text-sm font-semibold text-gray-600 mb-2">
    Formatted Output
  </h3>

  <pre className="bg-slate-100 p-4 rounded-lg text-sm
                  overflow-auto max-h-80 font-mono">
    {output}
  </pre>
</div>

     
      </div>
    </div>
  );
}

export default JsonFormatter;
