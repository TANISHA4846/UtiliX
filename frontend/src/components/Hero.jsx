



import logo from "../assets/logo1.png";
function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 w-full items-center">
        
        {/* LEFT — TEXT (40%) */}
        <div className="lg:col-span-2">
       
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-extrabold text-blue-600 tracking-tight">
            UTILIX
          </h1>
          <span>
             <div className="bg-white p-6 rounded-xl  mb-6 flex items-center justify-center">
    <img 
   
      src={logo}
      alt="UtiliX Logo"
      className="h-24 w-24 md:h-32 md:w-32 object-contain hidden lg:block"
    />
    </div>
          <p className="mt-4 text-xl sm:text-xl md:text-2xl text-gray-700 font-medium">
            Your productivity companion
          </p>
             <a
  href="#tools"
  className="inline-flex items-center justify-center mt-8 
             px-10 py-3 text-white font-semibold rounded-lg
             bg-gradient-to-r from-blue-600 to-purple-600
             hover:opacity-90 transition block lg:hidden"
>
  GET STARTED
</a>
</span>
          <p className="mt-6 text-lg sm:text-lg md:text-lg text-gray-600 max-w-md leading-relaxed">
            A thoughtfully designed collection of developer utilities that helps
            you work faster and stay organized.
          </p>
        </div>

        {/* RIGHT — IMAGE (60%) */}
        <div className="lg:col-span-3 flex justify-center">
          <img
            src="src/assets/progress1.svg"
            alt="Productivity illustration"
            className="w-full max-w-xl"
          />
        </div>

      </div>
      <a
  href="#tools"
  className="inline-flex items-center justify-center mt-8 
             px-10 py-3 text-white font-semibold rounded-lg
             bg-gradient-to-r from-blue-600 to-purple-600
             hover:opacity-90 transition hidden lg:block"
>
  GET STARTED
</a>


    </section>
  );
}

export default Hero;
