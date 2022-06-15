import React, { useState, useEffect } from 'react';
import JsonData from "../data/data.json";
import { allInstitutions } from "../redux/Actions/InstitutionActions"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom";
import { Footer } from "./Footer"
import { Navigationbar } from "./Navigationbar";
import { DescriptionCardsBlogs } from "./DescriptionCardsBlogs"
import { useMemo } from 'react';

export const Blogs = () => {
    const location = useLocation();
    const intersection = location.state?.intersection;
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);


    const dispatch = useDispatch();

    const getInstitutionsList = () => dispatch(allInstitutions());
    const data = useSelector(
        (state) => state.institutionReducer.data
    );

    const [institutionList, setInstitutionList] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState();
    // Add default value on page load country 
    useEffect(() => {
        setInstitutionList(intersection);
    }, []);

    // Function to get filtered list
    function getFilteredList() {
        // Avoid filter when selectedCategory is null
        if (!selectedCountry) {
            return institutionList;
        }
        return institutionList.filter((item) => item.group === selectedCountry);
    }
    console.log(filteredList)

    function handleCountryChange(event) {
        setSelectedCountry(event.target.value);
    }
    var filteredList = useMemo(getFilteredList, [selectedCountry, institutionList]);


    // Function duplicate list of universites exemple 
    const users = [
        {id: 32, fName:'Mary', lName:'smith'},
        {id: 65, fName:'Mary', lName:'smith'},
        {id: 105, fName:'Mary', lName:'smith'},
        {id: 65, fName:'Mary', lName:'smith'},
        {id: 12, fName:'Mary', lName:'smith'},
        {id: 32, fName:'Mary', lName:'smith'},
    ];
    const uniqUsers =Array.from(users.reduce((map, obj) => map.set(obj.id,obj),new Map()).values());


    return (
        <>
            <div >
                <Navigationbar data={landingPageData.Navigationbar}/>
                <DescriptionCardsBlogs data={landingPageData.DescriptionCardsBlogs} />

                <div className="container">
                <div class="section-container">

                    <div class="columns image">

                        <h2>Universities</h2>
                        <p>
                            With Ieasaw International, you can begin your higher education,journey and unlock a world of opportunity.
                        </p>
                        <img src="https://oxfordinternational.b-cdn.net/wp-content/uploads/2021/10/SFState_H_rgb.jpg" />
                        <img src="https://oxfordinternational.b-cdn.net/wp-content/uploads/2021/09/DMU-Logo-Positive-Original.png" />
                        <img src="https://oxfordinternational.b-cdn.net/wp-content/uploads/2021/09/17764_bangor_logo_c1_flush_Bangor-University-Logo-Main_Bangor-University-Logo-Main-2.png" />
                        <img src="https://oxfordinternational.b-cdn.net/wp-content/uploads/2021/09/Dundee.svg" />
                        <img src="https://oxfordinternational.b-cdn.net/wp-content/uploads/2021/09/Greenwich.svg" />
                        <img src="https://oxfordinternational.b-cdn.net/wp-content/uploads/2021/09/bradford.svg" />
                      
                        <form class="filter-sidebar" id="search-and-filter-form" action="" method=" GET">
                           
                            <fieldset class="filter-card tag-input p-3 m-3">
                                 <p>The aim is to enable students to obtain academic admission at one of our partner universities. Contact us to apply for study at one of our partner universities. We provide assistance to advise you from an appropriate institution to choose your study through registration with the university. If you have any specific inquiry, please feel free to communicate with us, we will be more than happy to answer your inquiries.</p>
                                <legend><h2>Search By Group of Universities</h2></legend>
                                <select className="form-select select-blogs"
                                    name="category-list"
                                    id="category-list"
                                    onChange={handleCountryChange}
                                >
                                    {/* {intersection && intersection.map((institution) => (
                                        <option value={institution.group} key={institution._id} >{institution.group}
                                        </option>
                                    ))
                                    } */}
                        <option>
                                       
                                    </option>
                                    <option>
                                        NAVITAS
                                    </option>
                                    <option>
                                        Study Group
                                    </option>
                                    <option>
                                        CAMBRIDGE GROUP
                                    </option>
                                    <option>
                                        BRIDGE GROUP
                                    </option>
                                    <option>
                                        INTO
                                    </option>
                                    <option>
                                        KAPLAN
                                    </option>
                                </select>
                            </fieldset>
                        </form>
                    </div>


                        <div class="content-container">

                            <section className="blogs" id="blogs">
                                {filteredList.length==0?(<div>
                                    <h1>This University does not exist </h1>
                                </div>):(
                                <div className="box-container">
                                    {filteredList && filteredList.map((institution) => (
                                        <div className="box" data-aos="fade-up"
                                            key={institution._id}
                                        >
                                            <div className="image-box-univ">
                                                <img src={institution.logoInst} alt="" />
                                            </div>
                                            <div className="content">
                                                <h3> {institution.name}</h3>
                                                <p className="small">{institution.country}</p>
                                                <Link className="btn-read" to={{ pathname: "/institution/details", institution: institution }} state={{ institution: institution }} >Read More</Link>
                                                <div className="icons">
                                                    <a><i className="fa fa-facebook" aria-hidden="true"></i>
                                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                )}
                            </section>
                        </div>
                </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

