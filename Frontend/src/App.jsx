import { useState, useEffect } from "react";
import FilterType from "./components/FilterType";
import Training from "./components/Training";
import OilGas from "./components/OilGas";
import Banking from "./components/Banking";
import LanguageInstitue from "./components/LanguageInstitue";
import AboutIeasaw from "./components/AboutIeasaw";
import ContactIeasaw from "./components/ContactIeasaw";
import JsonData from "./data/data.json";
import "./App.css";
import { Home } from "./components/Home";
import { Institutions } from "./components/Institutions";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import  { AboutUs }   from "./components/AboutUs";
import  { SignUp }   from "./components/SignUp";
import  Students from "./components/Students";
import {FilterPages} from "./components/FilterPages"
import {Blogs} from "./components/Blogs"


const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (

    <div>
    <Router>
      <Routes>
        <Route exact  path="/" element={<Home />} />
        <Route exact  path="/contactieasaw" element={<ContactIeasaw data={landingPageData.ContactIeasaw}/> }/>
        <Route exact  path="/aboutieasaw" element={<AboutIeasaw data={landingPageData.AboutIeasaw}/> }/>
        <Route exact  path="/languageinstitue" element={<LanguageInstitue data={landingPageData.LanguageInstitue}/> }/>
        <Route exact  path="/banking" element={<Banking data={landingPageData.Banking}/> }/>
        <Route exact  path="/oilgas" element={<OilGas data={landingPageData.OilGas}/> }/>
        <Route exact  path="/training" element={<Training data={landingPageData.Training}/> }/>
        <Route exact  path="/institution/search" element={<Blogs data={landingPageData.FilterType}/> }/>
        <Route exact  path="/apply-student" element={<Students data={landingPageData.ApplyStudent}/> } />
        <Route exact  path="/institutions" element={<Institutions />} />
        <Route exact  path="/aboutus" element={<AboutUs data={landingPageData.AboutUs}/>} />
        <Route exact  path="/SignUp" element={<SignUp />} />
        <Route exact  path={`/institution/details`} element={<FilterPages />} />
        <Route exact  path={`/students`} element={<Students />} />
      </Routes>
     </Router>
    </div>
  );
};

export default App;
