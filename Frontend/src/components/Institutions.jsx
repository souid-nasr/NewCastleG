import { Navigation } from "./navigation"
import { Headers } from "./Headers"
import University from "./University"
import JsonData from "../data/data.json";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'
import { Navigationbar } from "./Navigationbar";

export const Institutions = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const { t } = useTranslation()

  return (
    <>
      <div>
      <Navigationbar/>
        <Headers data={landingPageData.Headers} />
        <University data={landingPageData.Institution} />
      </div>
    </>
  )
}