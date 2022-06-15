import { About } from "./about"
import { Contact } from "./contact"
import { Features } from "./features"
import { Footer } from "./Footer"
import { Counters } from "./Counters"
import { Services } from "./services"
import { Navigationbar } from "./Navigationbar"
import Testemonials from "./Testemonials"
import { Gallery } from "./gallery"
import { Team } from "./Team"
import { DescriptionCards } from "./DescriptionCards"
import JsonData from "../data/data.json";

import { useState, useEffect } from "react";
import Slider from "./Slider"
// import { Blogs } from "./Blogs"
import { allInstitutions } from "../redux/Actions/InstitutionActions"
import { useDispatch, useSelector } from "react-redux"

export const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const dispatch = useDispatch();

  const getInstitutionsList = () => dispatch(allInstitutions());
  useEffect(() => {
    getInstitutionsList();
  })

  return (

    <div >
      <Navigationbar />
       <Slider />
      <DescriptionCards data={landingPageData.DescriptionCards} />
      {/* <Blogs data={landingPageData.Blogs} /> */}
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Counters />
      <Gallery data={landingPageData.Gallery} />
      <Services data={landingPageData.Services} />
      <Testemonials data={landingPageData.Testemonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      <Footer />
    </div>
  )
}