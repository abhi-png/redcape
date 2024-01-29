import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatedData from "./pages/CreatedData";
import UpdatedData from "./pages/UpdatedData";
import ErrorPage from "./pages/ErrorPage";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";

const App = () => {
   return (
      <div className="App">
         <Router>
         <MainNavbar />
            <Routes>
               <Route index element={<Home />} />
               <Route path="/createdata" element={<CreatedData />} />
               <Route path="/edit/:id" element={<UpdatedData />} />
               <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <Footer />
         </Router>
      </div>
   )
}

export default App