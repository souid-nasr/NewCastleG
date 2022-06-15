import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import CustomizedDialogs from './Dialog';
import { allInstitutions } from "../redux/Actions/InstitutionActions"
import { useDispatch, useSelector } from "react-redux"
export const Navigationbar = (props) => {

    const { t, i18n } = useTranslation()

    const onChangeLang = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    useEffect(() => {
        for (let index = 0; index < document.getElementsByClassName('lang').length; index++) {
            const element = document.getElementsByClassName('lang')[index];
            if (element.value === i18n.language) {
                element.setAttribute("selected", "true")
            }
        }
    }, [])

//Filtering Functionality

const dispatch = useDispatch();

  const getInstitutionsList = () =>  setTimeout(() => {
    // ... even asynchronously!
    dispatch(allInstitutions())
  }, 1) ;
  // const getInstitutionsList = () => dispatch(allInstitutions());
  const data = useSelector(
    (state) => state.institutionReducer.data
  );
  useEffect(() => {
    getInstitutionsList();
  })
    //************************************ */
    ;
    const [institutionList, setInstitutionList] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState();
  // Add default value on page load country 
  useEffect(() => {
    setInstitutionList(data);
  }, []);
  console.log(institutionList)
  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCountry) {
      return institutionList;
    }
    return institutionList.filter((item) => item.country === selectedCountry);
  }
  function handleCountryChange(event) {
    setSelectedCountry(event.target.value);
  }
  var filteredList = useMemo(getFilteredList, [selectedCountry, institutionList]);

    return (
        <>
            <nav className='navbar-one flex'>
                <div className="left-nav flex">
                    <div className="twitter">

                        <ul>
                            <li>
                            <a href="https://twitter.com/newcastlegroup1"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                        </ul>

                    </div>

                    <div className="instagram">

                        <ul>
                            <li>
                                <a><i class="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                        </ul>

                    </div>

                    <div className="facebook">

                        <ul>
                            <li>
                            <a href="https://www.facebook.com/Newcastlegroup-105722275511915"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            </li>
                        </ul>

                    </div>


                </div>

                <div className="right-nav flex">
                    <div className="btn-signin">
                        <CustomizedDialogs />
                    </div>

                    <div class="lang-menu">
                        <div class="selected-lang">
                            <h6><i class="fa fa-globe" aria-hidden="true"></i></h6>
                        </div>
                        <ul onChange={onChangeLang}>
                            <li>
                                <a class="en">English</a>
                            </li>
                            <li>
                                <a class="fr">French</a>
                            </li>
                            <li>
                                <a class="ar">Arabic</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

            <nav className='Navigationbar'>
                <div className="wrapper">
                    <div className="logo"><Link to='/'>
                        <img src="assets/logs.png" /></Link></div>

                    <input type="radio" name="slide" id="menu-btn" />
                    <input type="radio" name="slide" id="cancel-btn" />


                    <ul className="nav-links training-link">
                        <label for="cancel-btn" class="btn cancel-btn"><i class="fa fa-times" aria-hidden="true"></i></label>
                        <li><Link to='/'><i class="fa fa-home" aria-hidden="true" style={{ color: "black" }}></i> Home</Link></li>
                       
                        <li>
                            <a href='http://www.ctcgulf.com/courses' >Training</a>
                            {/* <input type="checkbox" id="showDrop" />
                            <label for="showDrop" className="mobile-item">Dropdown Menu</label>

                            <ul className="drop-menu">

                                <li><a><Link to='/training'>Football & English </Link></a></li>
                                <li><a><Link to='/oilgas'>Oil and Gas</Link></a></li>
                                <li><a><Link to='/banking'>Banking</Link></a></li>
                            </ul> */}
                        </li>
                        <li>
                            <Link to='/institutions'  className="desktop-item">Universtries</Link>
                            <input type="checkbox" id="showMega" />
                            <label for="showMega" className="mobile-item">Mega Menu</label>

                            <div className="mega-box">
                                <div className="content">

                                    <div className="row">
                                        <img src="/assets/background-img-7.jpg" alt="" />
                                    </div>


                                    <div className="row">
                                        <header><i class="fa fa-university" aria-hidden="true"></i> Universities Directory</header>
                                        <div>
                                            
                                        </div>
                                        <ul className="mega-links">
                                        <li onChange={handleCountryChange} ><Link to={{pathname:"/institutions",filteredList:filteredList}} state={{ filteredList:filteredList }} className="btn-apply-stdents" >United Kingdom</Link></li>
                                            <li ><Link to={{pathname:"/institutions",filteredList:filteredList}} state={{ filteredList:filteredList }} className="btn-apply-stdents" >Australia</Link></li>
                                            <li><Link to={{pathname:"/institutions",filteredList:filteredList}} state={{ filteredList:filteredList }} className="btn-apply-stdents" >Germany</Link></li>
                                            <li><Link to={{pathname:"/institutions",filteredList:filteredList}} state={{ filteredList:filteredList }} className="btn-apply-stdents" >Turkish</Link></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <ul className="mega-links">
                                            <li><Link to={{pathname:"/institutions",filteredList:filteredList}} state={{ filteredList:filteredList }} className="btn-apply-stdents" >Sweden</Link ></li>
                                            <li><Link to={{pathname:"/institutions",filteredList:filteredList}} state={{ filteredList:filteredList }} className="btn-apply-stdents" >Holland</Link ></li>
                                            <li><Link to={{pathname:"/institutions",filteredList:filteredList}} state={{ filteredList:filteredList }} className="btn-apply-stdents" >United State</Link ></li>
                                            <li><Link to={{pathname:"/institutions",filteredList:filteredList}} state={{ filteredList:filteredList }} className="btn-apply-stdents" >New Zealand</Link ></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <ul className="mega-links">
                                            <li><Link to={{pathname:"/institutions",filteredList:filteredList}} state={{ filteredList:filteredList }} className="btn-apply-stdents" >Malaysia</Link ></li>
                                            <li><Link to={{pathname:"/institutions",filteredList:filteredList}} state={{ filteredList:filteredList }} className="btn-apply-stdents" >Canada</Link ></li>
                                            <li><Link to={{pathname:"/institutions",filteredList:filteredList}} state={{ filteredList:filteredList }} className="btn-apply-stdents" >Ireland</Link ></li>
                                            <li><Link to={{pathname:"/institutions",filteredList:filteredList}} state={{ filteredList:filteredList }} className="btn-apply-stdents" >Cyprus</Link ></li>
                                        </ul>
                                    </div>
                                                {/* <select class="form-select my-2"
              name="category-list"
              id="category-list"
              onChange={handleCountryChange}
            >
 <option value="Afghanistan"> Afghanistan </option>
                  <option value="Albania"> Albania </option>
                  <option value="Algeria"> Algeria </option>
                  <option value="American Samoa"> American Samoa </option>
                  <option value="Andorra"> Andorra </option>
                  <option value="Angola"> Angola </option>
                  <option value="Antigua and Barbuda"> Antigua and Barbuda </option>
                  <option value="Argentina"> Argentina </option>
                  <option value="Armenia"> Armenia </option>
                  <option value="Australia"> Australia </option>
                  <option value="Austria"> Austria </option>
                  <option value="Azerbaijan"> Azerbaijan </option>
                  <option value="Bahamas"> Bahamas </option>
                  <option value="Bahrain"> Bahrain </option>
                  <option value="Bangladesh"> Bangladesh </option>
                  <option value="Barbados"> Barbados </option>
                  <option value="Belarus"> Belarus </option>
                  <option value="Belgium"> Belgium </option>
                  <option value="Belize"> Belize </option>
                  <option value="Benin"> Benin </option>
                  <option value="Bermuda"> Bermuda </option>
                  <option value="Bhutan"> Bhutan </option>
                  <option value="Bolivia"> Bolivia </option>
                  <option value="Bosnia and Herzegovina"> Bosnia and Herzegovina </option>
                  <option value="Botswana"> Botswana </option>
                  <option value="Brazil"> Brazil </option>
                  <option value="Brunei"> Brunei </option>
                  <option value="Bulgaria"> Bulgaria </option>
                  <option value="Burkina Faso"> Burkina Faso </option>
                  <option value="Burundi"> Burundi </option>
                  <option value="Cambodia"> Cambodia </option>
                  <option value="Cameroon"> Cameroon </option>
                  <option value="Canada"> Canada </option>
                  <option value="Caribbean"> Caribbean </option>
                  <option value="Cape Verde"> Cape Verde </option>
                  <option value="Cayman Islands"> Cayman Islands </option>
                  <option value="Central African Republic"> Central African Republic </option>
                  <option value="Chad"> Chad </option>
                  <option value="Chile"> Chile </option>
                  <option value="China"> China </option>
                  <option value="Colombia"> Colombia </option>
                  <option value="Comoros"> Comoros </option>
                  <option value="Costa Rica"> Costa Rica </option>
                  <option value="Cote d’Ivoire"> Cote d’Ivoire </option>
                  <option value="Croatia"> Croatia </option>
                  <option value="Cuba"> Cuba </option>
                  <option value="Cyprus"> Cyprus </option>
                  <option value="Czech Republic"> Czech Republic </option>
                  <option value="Democratic Republic of the Congo"> Democratic Republic of the Congo </option>
                  <option value="Denmark"> Denmark </option>
                  <option value="Djibouti"> Djibouti </option>
                  <option value="Dominica"> Dominica </option>
                  <option value="Dominican Republic"> Dominican Republic </option>
                  <option value="East Timor"> East Timor </option>
                  <option value="Ecuador"> Ecuador </option>
                  <option value="Egypt"> Egypt </option>
                  <option value="El Salvador"> El Salvador </option>
                  <option value="Equatorial Guinea"> Equatorial Guinea </option>
                  <option value="Eritrea"> Eritrea </option>
                  <option value="Estonia"> Estonia </option>
                  <option value="Ethiopia"> Ethiopia </option>
                  <option value="Fiji"> Fiji </option>
                  <option value="Finland"> Finland </option>
                  <option value="France"> France </option>
                  <option value="French Polynesia"> French Polynesia </option>
                  <option value="Gabon"> Gabon </option>
                  <option value="Georgia"> Georgia </option>
                  <option value="Germany"> Germany </option>
                  <option value="Ghana"> Ghana </option>
                  <option value="Greece"> Greece </option>
                  <option value="Greenland"> Greenland </option>
                  <option value="Grenada"> Grenada </option>
                  <option value="Guam"> Guam </option>
                  <option value="Guatemala"> Guatemala </option>
                  <option value="Guinea"> Guinea </option>
                  <option value="Guinea-Bissau"> Guinea-Bissau </option>
                  <option value="Guyana"> Guyana </option>
                  <option value="Haiti"> Haiti </option>
                  <option value="Holland"> Holland </option>
                  <option value="Honduras"> Honduras </option>
                  <option value="Hong Kong"> Hong Kong </option>
                  <option value="Hungary"> Hungary </option>
                  <option value="Iceland"> Iceland </option>
                  <option value="India"> India </option>
                  <option value="Indonesia"> Indonesia </option>
                  <option value="Iran"> Iran </option>
                  <option value="Iraq"> Iraq </option>
                  <option value="Ireland"> Ireland </option>
                  <option value="Israel"> Israel </option>
                  <option value="Italy"> Italy </option>
                  <option value="Jamaica"> Jamaica </option>
                  <option value="Japan"> Japan </option>
                  <option value="Jordan"> Jordan </option>
                  <option value="Kazakhstan"> Kazakhstan </option>
                  <option value="Kenya"> Kenya </option>
                  <option value="Kiribati"> Kiribati </option>
                  <option value="Kosovo"> Kosovo </option>
                  <option value="Kuwait"> Kuwait </option>
                  <option value="Kyrgyzstan"> Kyrgyzstan </option>
                  <option value="Laos"> Laos </option>
                  <option value="Latvia"> Latvia </option>
                  <option value="Lebanon"> Lebanon </option>
                  <option value="Lesotho"> Lesotho </option>
                  <option value="Liberia"> Liberia </option>
                  <option value="Libya"> Libya </option>
                  <option value="Liechtenstein"> Liechtenstein </option>
                  <option value="Lithuania"> Lithuania </option>
                  <option value="Luxembourg"> Luxembourg </option>
                  <option value="Macedonia"> Macedonia </option>
                  <option value="Madagascar"> Madagascar </option>
                  <option value="Malawi"> Malawi </option>
                  <option value="Malaysia"> Malaysia </option>
                  <option value="Maldives"> Maldives </option>
                  <option value="Mali"> Mali </option>
                  <option value="Malta"> Malta </option>
                  <option value="Marshall Islands"> Marshall Islands </option>
                  <option value="Mauritania"> Mauritania </option>
                  <option value="Mauritius"> Mauritius </option>
                  <option value="Mexico"> Mexico </option>
                  <option value="Micronesia"> Micronesia </option>
                  <option value="Moldova"> Moldova </option>
                  <option value="Monaco"> Monaco </option>
                  <option value="Mongolia"> Mongolia </option>
                  <option value="Montenegro"> Montenegro </option>
                  <option value="Morocco"> Morocco </option>
                  <option value="Mozambique"> Mozambique </option>
                  <option value="Myanmar"> Myanmar </option>
                  <option value="Namibia"> Namibia </option>
                  <option value="Nauru"> Nauru </option>
                  <option value="Nepal"> Nepal </option>
                  <option value="Netherlands"> Netherlands </option>
                  <option value="New Zealand"> New Zealand </option>
                  <option value="Nicaragua"> Nicaragua </option>
                  <option value="Niger"> Niger </option>
                  <option value="Nigeria"> Nigeria </option>
                  <option value="North Korea"> North Korea </option>
                  <option value="Northern Mariana Islands"> Northern Mariana Islands </option>
                  <option value="Norway"> Norway </option>
                  <option value="Oman"> Oman </option>
                  <option value="Pakistan"> Pakistan </option>
                  <option value="Palau"> Palau </option>
                  <option value="Palestine, State of"> Palestine, State of </option>
                  <option value="Panama"> Panama </option>
                  <option value="Papua New Guinea"> Papua New Guinea </option>
                  <option value="Paraguay"> Paraguay </option>
                  <option value="Peru"> Peru </option>
                  <option value="Philippines"> Philippines </option>
                  <option value="Poland"> Poland </option>
                  <option value="Portugal"> Portugal </option>
                  <option value="Puerto Rico"> Puerto Rico </option>
                  <option value="Qatar"> Qatar </option>
                  <option value="Romania"> Romania </option>
                  <option value="Russia"> Russia </option>
                  <option value="Rwanda"> Rwanda </option>
                  <option value="Saint Kitts and Nevis"> Saint Kitts and Nevis </option>
                  <option value="Saint Lucia"> Saint Lucia </option>
                  <option value="Saint Vincent and the Grenadines"> Saint Vincent and the Grenadines </option>
                  <option value="Samoa"> Samoa </option>
                  <option value="San Marino"> San Marino </option>
                  <option value="Sao Tome and Principe"> Sao Tome and Principe </option>
                  <option value="Saudi Arabia"> Saudi Arabia </option>
                  <option value="Senegal"> Senegal </option>
                  <option value="Serbia and Montenegro"> Serbia and Montenegro </option>
                  <option value="Seychelles"> Seychelles </option>
                  <option value="Sierra Leone"> Sierra Leone </option>
                  <option value="Singapore"> Singapore </option>
                  <option value="Slovakia"> Slovakia </option>
                  <option value="Slovenia"> Slovenia </option>
                  <option value="Solomon Islands"> Solomon Islands </option>
                  <option value="Somalia"> Somalia </option>
                  <option value="South Africa"> South Africa </option>
                  <option value="South Korea"> South Korea </option>
                  <option value="South Sudan"> South Sudan </option>
                  <option value="Spain"> Spain </option>
                  <option value="Sri Lanka"> Sri Lanka </option>
                  <option value="Sudan"> Sudan </option>
                  <option value="Suriname"> Suriname </option>
                  <option value="Swaziland"> Swaziland </option>
                  <option value="Sweden"> Sweden </option>
                  <option value="Switzerland"> Switzerland </option>
                  <option value="Syria"> Syria </option>
                  <option value="Taiwan"> Taiwan </option>
                  <option value="Tajikistan"> Tajikistan </option>
                  <option value="Tanzania"> Tanzania </option>
                  <option value="Thailand"> Thailand </option>
                  <option value="The Gambia"> The Gambia </option>
                  <option value="Timor"> Timor </option>
                  <option value="Togo"> Togo </option>
                  <option value="Tonga"> Tonga </option>
                  <option value="Trinidad and Tobago"> Trinidad and Tobago </option>
                  <option value="Tunisia"> Tunisia </option>
                  <option value="Turkey"> Turkey </option>
                  <option value="Turkmenistan"> Turkmenistan </option>
                  <option value="Tuvalu"> Tuvalu </option>
                  <option value="Uganda"> Uganda </option>
                  <option value="Ukraine"> Ukraine </option>
                  <option value="United Arab Emirates"> United Arab Emirates </option>
                  <option value="United Kingdom"> United Kingdom </option>
                  <option value="United States"> United States </option>
                  <option value="Uruguay"> Uruguay </option>
                  <option value="Uzbekistan"> Uzbekistan </option>
                  <option value="Vanuatu"> Vanuatu </option>
                  <option value="Vatican City"> Vatican City </option>
                  <option value="Venezuela"> Venezuela </option>
                  <option value="Vietnam"> Vietnam </option>
                  <option value="Virgin Islands, British"> Virgin Islands, British </option>
                  <option value="Virgin Islands, U.S."> Virgin Islands, U.S. </option>
                  <option value="Yemen"> Yemen </option>
                  <option value="Zambia"> Zambia </option>
                  <option value="Zimbabwe"> Zimbabwe </option>
            </select> */}
                                </div>
                            </div>
                        </li>
                        <li><Link to='/languageinstitue'>Language institutes</Link></li>
                        <li><Link to='/aboutieasaw'>About us</Link></li>
                        <li><Link to='/contactieasaw'>Contact us</Link></li>

                        <div className="btn-apply-stdents">
                            <Link to='/apply-student' className="apply"><SupervisedUserCircleIcon /> Apply Student </Link>
                        </div>
                    </ul>
                    <label for="menu-btn" class="btn menu-btn"><i class="fa fa-bars" aria-hidden="true"></i></label>
                    <div className="logo" ><a href="http://iesaw.com/">
                       
                        <img src="assets/logoieasaw.jpg" style={{width:"80px"}} /> </a></div>
                </div>
            </nav>

        </>
    )
}
