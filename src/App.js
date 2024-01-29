import React from "react";
import HomeCarousels from "./components/HomeCarousels";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";

const App = () => {
   return (
      <div>
         <NavBar />
         <HomeCarousels />
         <Banner />
      </div>
   )
}

export default App