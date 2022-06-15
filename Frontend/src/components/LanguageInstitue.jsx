import { useState, useEffect, useMemo } from "react";
import JsonData from "../data/data.json"
import { Navigationbar } from "./Navigationbar";
import Carousel from "./Carousel";
import { allInstitutions } from "../redux/Actions/InstitutionActions"
import { useDispatch, useSelector } from "react-redux"
import { DescriptionCardsInstitution } from "./DescriptionCardsInstitution"
import { ContactInstitution } from "./ContactInstitution"
import { Footer } from "./Footer"

const LanguageInstitue = () => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);
    const dispatch = useDispatch();

    const getInstitutionsList = () => dispatch(allInstitutions());
    const data = useSelector(
        (state) => state.institutionReducer.data
    );
    useEffect(() => {
        getInstitutionsList();
    })
    const [sportList, setSportList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();

    useEffect(() => {
        setSportList(data);
    }, []);
    console.log(sportList)

    var filteredListCategory = data.filter((item) => item.category === "Language Institute")
    return (
        <div>
            <Navigationbar />
            <Carousel />
            <DescriptionCardsInstitution data={landingPageData.DescriptionCardsInstitution} />

            {filteredListCategory && filteredListCategory.map((institution) => (
               
               <section class="review" id="review" key={institution._id}>
                       
                    <div class="box-container">
                        <div class="box">
                            <div class="user">
                                <img src={institution.logo} alt="" />
                                <div class="user-info">
                                    <h6>{institution.name}</h6>
                                    <span>{institution.group}</span>
                                </div>
                            </div>
                            <p>{institution.description1}</p>
                            <span class="fas fa-quote-right"></span>
                        </div>
                    </div>
                </section>

            ))
            }
           <ContactInstitution data={landingPageData.ContactInstitution} />
            <section class="contact" id="contact">
            <div className="container">
                <div class="row">
                    <form action="">
                        <input type="text" placeholder="name" class="box" />
                        <input type="email" placeholder="email" class="box" />
                        <input type="number" placeholder="number" class="box" />
                        <textarea name="" class="box" placeholder="message" id="" cols="30" rows="10"></textarea>
                        <input type="submit" value="send message" className="btn btn-institue" />
                    </form>
                    <div class="image">
                        <img src="/assets/background-image.jpg" alt="" />
                    </div>
                </div>
                </div>
            </section>
            <Footer />

            </div>
    );
};

export default LanguageInstitue;