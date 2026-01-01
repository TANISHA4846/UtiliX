
import { useState } from "react";

function WordCounter() {
  const [text, setText] = useState("");
  const wordCount = text.trim()
  ? text.trim().split(/\s+/).length
  : 0;

const charCount = text.length;

const charWithoutSpaces = text.replace(/\s/g, "").length;

const sentenceCount = text
  .split(/[.!?]+/)
  .filter(sentence => sentence.trim().length > 0)
  .length;

  

  return (
    <div className="max-w-3xl mx-auto">
    <div className="bg-white p-6 md:p-8 rounded-xl shadow">
      <h1 className="text-2xl text-blue-700 font-bold mb-2">
  Word Counter
</h1>

<p className="text-sm text-gray-600 mb-6">
  Count words, characters, and sentences in real time.
</p>


      <textarea
  rows="6"
  value={text}
  onChange={(e) => setText(e.target.value)}
  placeholder="Start typing or paste your text here..."
  className="w-full p-4 border border-gray-300 rounded-lg
             focus:outline-none focus:ring-2 focus:ring-blue-500
             resize-none"
/>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

    </div>
    <div className="bg-slate-100 p-4 rounded-lg text-center">
  <p className="text-sm text-gray-500">Words</p>
  <p className="text-2xl font-bold">{wordCount}</p>
</div>
<div className="bg-slate-100 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-500">Characters</p>
            <p className="text-2xl font-bold">{charCount}</p>
          </div>

          <div className="bg-slate-100 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-500">No Spaces</p>
            <p className="text-2xl font-bold">{charWithoutSpaces}</p>
          </div>
          <div className="bg-slate-100 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-500">Sentences</p>
            <p className="text-2xl font-bold">{sentenceCount}</p>
          </div>

      
    </div>
    </div>
  );
}

export default WordCounter;
