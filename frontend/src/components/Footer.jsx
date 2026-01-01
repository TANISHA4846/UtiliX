import { FiGithub, FiLinkedin, } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-slate-700 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600 dark:text-gray-400">

        {/* Left */}
        <span>
          © {new Date().getFullYear()} <span className="font-medium text-gray-800 dark:text-gray-200">UtiliX</span>
        </span>

        {/* Center */}
        <span className="text-center sm:text-left">
          Made with ❤️ & 💻 by <span className="font-medium text-gray-800 dark:text-gray-200">Tanisha</span>
        </span>

        {/* Right - Social Icons */}
        <span className="flex items-center gap-4">
          <a
            href="https://github.com/tanisha4846"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/tanisha-chauhan-09951428a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
          <a
  href="https://x.com/Tanisha05925189"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-white transition"
  aria-label="X (Twitter)"
>
  <FaXTwitter size={18} />
</a>
          
        </span>
      </div>
    </footer>
  );
}

export default Footer;

