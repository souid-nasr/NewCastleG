import { Navigation } from "./navigation"
import { Headers } from "./Headers"
import JsonData from "../data/data.json";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'

export const Abouts = (props) => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    const { t } = useTranslation()

    return (
        <>
            <div>
                <Navigation />
                <Headers data={landingPageData.Headers} />
            </div>
        </>
    )
}