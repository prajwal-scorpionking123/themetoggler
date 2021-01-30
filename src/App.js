import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Navigation from "./Components/Navigation";
import ParaContext from "./Context/paraContext";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const themeHook = useState("light");
  const paraHook= useState("light");
  const footerHook= useState("dark");
  return (
    <ThemeContext.Provider value={themeHook}>
      <main className="container">
        {/* <Header /> */}
        <Navigation></Navigation>   
        <ParaContext.Provider value={paraHook}>
        <HeroSection message="theme toggler using Context API" classname="jumbotron mt-5"/>
        </ParaContext.Provider> 
        <ParaContext.Provider value={footerHook}>
        <footer  class="footer mt-auto py-3" >
        <HeroSection message="Hi! This is Prajwal Patil. Hope you Like this Application" classname="container"/>
        </footer>
        {/* <footer class="footer mt-auto py-3 bg-light yellow">
  <div class="container">
    <span class="text-muted">Hey there everyone! This is Prajwal Patil.</span>
  </div>
</footer> */}
        </ParaContext.Provider> 
      </main>
    </ThemeContext.Provider>
    
  );
};

export default App;
