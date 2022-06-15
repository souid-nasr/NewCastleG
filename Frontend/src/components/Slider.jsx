import React, { useState, useEffect, useRef, useMemo } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import SchoolIcon from '@material-ui/icons/School';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PublicIcon from '@material-ui/icons/Public';
import { allInstitutions } from "../redux/Actions/InstitutionActions"
import { useDispatch, useSelector } from "react-redux"
import FilterType from "./FilterType";
import { Link } from "react-router-dom";

const featuredProducts = [
  "/assets/ieasaw-background.jpg",
  "/assets/background-image.jpg",
  "/assets/image1.jpg",
];
let count = 0;
let slideInterval;
export default function Slider({ filteringName, country }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const [category, setCategory] = useState("")
  const [degree, setDegree] = useState("")
  const [subject, setSubject] = useState("")
  const [institution, setInstitution] = useState("")

  const handleChangeCategory = event => {
    setCategory({ value: event.target.value });
  };
  const handleChangeDegree = event => {
    setDegree({ value: event.target.value });
  };
  const handleChangeSubject = event => {
    setSubject({ value: event.target.value });
  };
  const handleChangeInstitution = event => {
    setInstitution({ institution: event.target.value });
  };
  const InstitutionErrors = useSelector((state) => state.institutionReducer.errors);

  const dispatch = useDispatch();

  const getInstitutionsList = () => dispatch(allInstitutions());
  const data = useSelector(
    (state) => state.institutionReducer.data
  );
  useEffect(() => {
    getInstitutionsList();
  })


  // Filtering
  const [sportList, setSportList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const [sportListCountry, setSportListCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();

  const [sportListDegree, setSportListDegree] = useState([]);
  const [selectedDegree, setSelectedDegree] = useState();

  const [sportListSubject, setSportListSubject] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState();


  // Add default value on page load catgory
  useEffect(() => {
    setSportList(data);
  }, []);

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return sportList;
    }
    return sportList.filter((item) => item.category === selectedCategory);
  }


  // Add default value on page load country 
  useEffect(() => {
    setSportListCountry(data);
  }, []);
  // Function to get filtered list
  function getFilteredListCountry() {
    // Avoid filter when selectedCategory is null
    if (!selectedCountry) {
      return sportListCountry;
    }
    return sportListCountry.filter((item) => item.country === selectedCountry);
  }


    // Add default value on page load degree 
    useEffect(() => {
      setSportListDegree(data);
    }, []);
    
    // Function to get filtered list
    function getFilteredListDegree() {
      // Avoid filter when selectedCategory is null
      if (!selectedDegree) {
        return sportListDegree;
      }
      return sportListDegree.filter((item) => item.degree === selectedDegree);
    }
  

       // Add default value on page load subject
       useEffect(() => {
        setSportListSubject(data);
      }, []);
      console.log(sportListSubject)
      // Function to get filtered list
      function getFilteredListSubject() {
        // Avoid filter when selectedCategory is null
        if (!selectedSubject) {
          return sportListSubject;
        }
        return sportListSubject.filter((item) => item.subject === selectedSubject);
      }


  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredListCountry, [selectedCountry, sportListCountry]);
  var filteredListCategory = useMemo(getFilteredList, [selectedCategory, sportList]);
  var filteredListDegree = useMemo(getFilteredListDegree, [selectedDegree, sportListDegree]);
  var filteredListSubject = useMemo(getFilteredListSubject, [selectedSubject, sportListSubject]);
  //
  var intersection1 = filteredList.filter(x => filteredListCategory.includes(x));
  var intersection2 = filteredListDegree.filter(y => filteredListSubject.includes(y));
  var intersection = intersection1.filter(z => intersection2.includes(z));

  // function  country 
   function handleCountryChange(event) {
    setSelectedCountry(event.target.value);
  }

  // function category
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // function degree 
  function handleDegreeChange(event) {
    setSelectedDegree(event.target.value);
  }
  // function subject 
  
  function handleSubjectChange(event) {
    setSelectedSubject(event.target.value);
  }


  return (
    <div ref={slideRef} className="slider-img">
      <div className="aspect-img">
        <img src={featuredProducts[currentIndex]} alt="" />
      </div>

      <div className="content-slider">
        <div className="title-slider">
          <h1>CHOESE YOUR PLACE TO STUDY</h1>
          <p>
            We offer you academic admission and acceptance of language
            institutes in the best universities. !
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor=""><PublicIcon />Country</label>

            <select class="form-select my-2"
              name="category-list"
              id="category-list"
              onChange={handleCountryChange}
              value={institution.country}
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
            </select>
          </div>

          <div className="container">
            <label htmlFor=""><MenuBookIcon />Categories</label>
            <select class="form-select my-2"
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
              value={institution.category}
            >

              <option>
                University
              </option>
              <option>
                Language Institute
              </option>
            </select>
          </div>

          <div className="container">
            <label htmlFor=""><SchoolIcon />Degree</label>
            <select class="form-select my-2"
              name="category-list"
              id="category-list"
              onChange={handleDegreeChange}
              value={institution.degree}
            >
              {/* <option disabled="" selected="">University
              </option> */}
 
              <option>
                Undergraduate
              </option>
              <option>
                Postgraduate
              </option>
            </select>
             </div>

          <div className="container">
            <label htmlFor=""><CardMembershipIcon />Subject</label>
            <select class="form-select my-2"
              name="category-list"
              id="category-list"
              onChange={handleSubjectChange}
              value={institution.subject}
            >

<option>
              Business
              </option>
              <option>
                Engineering
              </option>
              <option>
                Medicine
              </option>
              <option>
              Sciences
              </option>
              <option>
              Divers
              </option>
              {/* <option>
              Divers
              </option> */}
            </select>
          </div>
          <Link to={{pathname:"/institution/search",intersection:intersection}} state={{ intersection:intersection }} className="btn-apply-stdents" ><button className="btn-apply-stdents" >Search University</button></Link>
        </div>
      </div>

      <div className="button-slider">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>

      {/* <div className="sport-list">
        {intersection.map((element, index) => (
          <FilterType {...element} key={index} />
        ))}
      </div> */}


    </div>
  );
}