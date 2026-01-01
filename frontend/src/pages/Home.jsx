import { Link } from "react-router-dom";
import { useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import About from "../components/About";
import Hero from "../components/Hero";
import Contact from "../components/Contact";


const faqs = [
  {
    question: "What is UtiliX?",
    answer:
      "UtiliX is a collection of fast, simple developer utility tools designed to help with everyday tasks like text manipulation, data formatting, and security checks."
  },
  {
    question: "Are the tools free to use?",
    answer:
      "Yes, all tools are completely free with no hidden charges."
  },
  {
    question: "Is my data safe while using these tools?",
    answer:
      "Yes! UTILIX does not store your text or personal data permanently. Any input you provide is used temporarily in the browser or backend only for analytics and processing purposes."
  },
  {
    question: "Who is UtiliX built for?",
    answer:
      "UtiliX is built for students, developers, and anyone who needs quick and reliable utility tools."
  }
];
function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white border rounded-xl overflow-hidden"
        >
          {/* Question Row */}
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
          >
            {/* Left: Search Icon + Question */}
            <div className="flex items-center gap-3">
              <FiSearch className="text-gray-400" />
              <span className="font-medium text-gray-900">
                {faq.question}
              </span>
            </div>

            {/* Right: Dropdown Icon */}
            <FiChevronDown
              className={`text-xl transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                }`}
            />
          </button>

          {/* Answer */}
          {activeIndex === index && (
            <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100">

      {/* HERO SECTION */}
      <Hero />
      {/* About section */}
      <About />

      {/* TOOLS SECTION */}
      <section id="tools" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-blue-500 text-5xl font-bold  text-center">
          Available Tools
        </h2>
        <p className="text-slate-500 text-center mt-2">
          Clean, fast and easy-to-use utilities
        </p>

        {/* Tools Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          <ToolCard
            title="Text Tool"
            desc="Format, analyze and transform text instantly."
            link="/tools/text"
          />

          <ToolCard
            title="Word Counter"
            desc="Count words, characters and sentences easily."
            link="/tools/word-counter"
          />

          <ToolCard
            title="JSON Formatter"
            desc="Beautify and validate JSON in one click."
            link="/tools/json"
          />

          <ToolCard
            title="Base64 Tool"
            desc="Encode and decode Base64 strings securely."
            link="/tools/base64"
          />

          <ToolCard
            title="Password Strength Checker"
            desc="Check password strength and security."
            link="/tools/password"
          />

        </div>
      </section>
      {/* features section */}
    
      <section className="mt-24">
        <h2 className="text-blue-500 text-5xl font-bold text-center mb-14">
          Why Use UtiliX?
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {/* Feature 1 */}
          <div className="text-center">
            <img
              src="/src/assets/feature-speed.svg"
              alt="Fast productivity"
              className="h-48 mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">
              Fast & Time-Saving
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Complete everyday developer tasks instantly with lightweight,
              responsive tools designed to boost productivity.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <img
              src="/src/assets/feature-simple.svg"
              alt="Easy to use"
              className="h-48 mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">
              Simple & Easy to Use
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Clean interfaces and intuitive workflows ensure anyone can
              use UtiliX effectively — even without prior experience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <img
              src="/src/assets/feature-hub.svg"
              alt="All in one platform"
              className="h-48 mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">
              All-in-One Utility Hub
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Access multiple essential developer tools in one platform,
              eliminating the need to jump between different websites.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}

      <section className="mt-28 max-w-4xl mx-auto">
        <h2 className="text-blue-500 text-5xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <FAQAccordion />
      </section>

      <Contact />
    </div>
  );
}

/* Tool Card Component */
function ToolCard({ title, desc, link }) {
  return (
    <Link
      to={link}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-slate-100"
    >
      <h3 className="text-xl font-semibold text-slate-800">
        {title}
      </h3>
      <p className="mt-2 text-slate-500">
        {desc}
      </p>

      <span className="inline-block mt-4 text-blue-600 font-medium">
        Open Tool →
      </span>
    </Link>
  );
}
