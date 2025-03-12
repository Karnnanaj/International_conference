import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Isp from "./components/isp";
import Contact from "./components/contact";
import Team from "./components/team";
import Events from "./components/events";
import Newsletter from "./components/newsletter";
import Gallery from "./components/gallery";
import Newsletter_reg from "./components/newsletter_registration";
import Reg_page from "./components/reg_page";
import Newsletter_jan from "./components/newsletter_jan"
import Newsletter_feb from "./components/newsletter_feb"
import Treasurehunt_reg from "./components/treasurehunt_registration"

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/isp" element={<Isp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element= {<Events/>}/>
          <Route path="/newsletter" element= {<Newsletter/>}/>
          <Route path="/gallery" element= {<Gallery/>}/>
          <Route path="/newsletter_registration" element= {<Newsletter_reg/>}/>  
          <Route path="/reg_page" element= {<Reg_page/>}/> 
          <Route path="/newsletter_jan" element= {<Newsletter_jan/>}/> 
          <Route path="/newsletter_feb" element= {<Newsletter_feb/>}/>
          <Route path="/treasurehunt_registration" element= {<Treasurehunt_reg/>}/> 
          <Route
            path="/Register"
            component={() => {
              window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfEwLd2Zw4ulm7UgDLwtPANbu8h7TQZvQkhunRqebXi0lZP2A/viewform";
              return null;
            }}
          />
        </Routes>
      </>
    )
  );
}

export default App;