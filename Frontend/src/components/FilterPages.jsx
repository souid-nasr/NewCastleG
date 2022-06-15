import React from 'react';
import { useLocation, Link } from "react-router-dom";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Navigationbar } from './Navigationbar';
import { Footer } from "./Footer"

export const FilterPages = () => {
    const location = useLocation();
    const institution = location.state?.institution;
    console.log(institution)
    return (
        <>
            <Navigationbar />
            

            <section class="icons-container">
                <div class="icons">
                    <div class="info">
                        <img src={institution.logo} alt="" style={{ width: '50px' }} />
                        <h1>{institution.name}</h1>
                        {institution.description1}
                        {institution.description2}<br />
                        <br />

                        {/* <li>
                            {institution.courses}
                        </li> */}

                        <div className="box-list">
                            <h2>List Of Courses</h2>
                            <ul>{institution.Art}</ul><ul>{institution.Accounting}</ul> <ul>{institution.Biology}</ul> <ul>{institution.Business}</ul> <ul>{institution.Chemistry}</ul> <ul>{institution.Computing}</ul> <ul>{institution.Counselling}</ul> <ul>{institution.Criminology}</ul> <ul>{institution.Design}</ul> <ul>{institution.Economics}</ul> <ul>{institution.Education}</ul> <ul>{institution.Engineering}</ul> <ul>{institution.English}</ul> <ul>{institution.Environment}</ul> <ul>{institution.Geography}</ul> <ul>{institution.Health}</ul> <ul>{institution.History}</ul> <ul>{institution.Languages}</ul> <ul>{institution.Law}</ul> <ul>{institution.Marketing}</ul> <ul>{institution.Mathematics}</ul> <ul>{institution.Music}</ul> <ul>{institution.Nursing}</ul> <ul>{institution.Philosophy}</ul> <ul>{institution.Physics}</ul> <ul>{institution.Politics}</ul> <ul>{institution.Psychology}</ul> <ul>{institution.Religious}</ul> <ul>{institution.Science}</ul> <ul>{institution.Sociology}</ul> <ul>{institution.Software}</ul> <ul>{institution.Sport}</ul> <ul>{institution.Statistics}</ul>
                        </div>
                        <br />
                        <div className="btn-apply-stdents">
                            <Link to='/apply-student' className="apply"><SupervisedUserCircleIcon /> Apply Now </Link>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
