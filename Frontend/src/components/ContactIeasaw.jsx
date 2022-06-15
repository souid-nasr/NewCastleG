import { useState, useEffect } from "react";
import JsonData from "../data/data.json"
import { Navigationbar } from "./Navigationbar";
import Carousel from "./Carousel";
import { ContactInstitution } from "./ContactInstitution"
import { Footer } from "./Footer";

const ContactIeasaw = () => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>
            <Navigationbar />
            <Carousel />
            <ContactInstitution data={landingPageData.ContactInstitution} />

            <section className="contact" id="contact">
                <div className="row">
                    <form action="">
                        <input type="text" placeholder="name" className="box" />
                        <input type="email" placeholder="email" className="box" />
                        <input type="number" placeholder="number" className="box" />
                        <textarea name="" className="box" placeholder="message" id="" cols="30" rows="10"></textarea>
                        <input type="submit" value="send message" className="btn" />
                    </form>
                    <div className="image">
                        <p><i class="fa fa-star" aria-hidden="true"></i>  The aim is to enable students to obtain academic admission at one of our partner universities.
                        <br /> Contact us to apply for study at one of our partner universities. We provide assistance to advise you from an appropriate institution to choose your study through registration with the university. If you have any specific inquiry, please feel free to communicate with us, we will be more than happy to answer your inquiries.</p>
                        <p><i class="fa fa-map-marker" aria-hidden="true"></i>  United Kingdom</p>
                        <p><i class="fa fa-map-marker" aria-hidden="true"></i> 2 Osborne Road, Jesmond Newcastle upon Tyne</p>
                        <p><i class="fa fa-phone" aria-hidden="true"></i>  0044-191-6497495</p>
                        <p><i class="fa fa-envelope-o" aria-hidden="true"></i> info@iesaw.com</p>
                        <p><i class="fa fa-envelope-o" aria-hidden="true"></i> adm@iesaw.com</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ContactIeasaw;