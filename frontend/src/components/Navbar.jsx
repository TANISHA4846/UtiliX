import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";


const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // 🔥 immediate UI update
    navigate("/");
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
      
        {/* LEFT */}
        <div className="flex gap-6 font-medium">
         
          <img
      src={logo}
      alt="UtiliX Logo"
      className="h-12 w-12 object-contain"
    />
          <Link
                to="/"
                className="text-3xl font-bold rounded-md  text-blue-600 transition hidden lg:block"
              >
                UtiliX
              </Link>
    <a href="#about" className="hover:text-blue-600 text-xl transition hidden lg:block">
              About
            </a>
         
          <a href="#tools" className="hover:text-blue-600 text-xl transition hidden lg:block">
              Tools
            </a>
           <a href="#contact" className="hover:text-blue-600 text-xl transition hidden lg:block">
              Contact
            </a>
          
        </div>

        {/* RIGHT */}
        <div className="flex gap-4 items-center">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="px-4 py-2 border bg-blue-600 text-white rounded-lg">
                Login
              </Link>

              <Link
                to="/signup"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div>
             
            <button
              onClick={handleLogout}
              className="text-red-600 font-medium"
            >
              Logout
            </button>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;


