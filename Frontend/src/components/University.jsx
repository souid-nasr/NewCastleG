import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link, useLocation } from "react-router-dom";
export const University = () => {
    const location = useLocation();
    const filteredList = location.state?.filteredList;
    return (
            <div className="container card-university">
                {filteredList && filteredList.map((institution) => (
            <div class="cards-univ">
                <div class="card card1">
                    <div class="container-card-univ">
                    <img src="/assets/Bangor-university.png" alt="" />
                    </div>
                    <div class="details">
                        <h3>{institution.country}</h3>
                        <p>Bangor University has been selected as 1 of the 12 UK universities to stage a Moot Court final in the Supreme Court (before a Supreme Court Justice) .</p>
                        <h6> <ChevronRightIcon />Learn More</h6>
                    </div>
                    </div>
                    </div>
                    ))}
                    </div>
     
    );
};

export default University;
