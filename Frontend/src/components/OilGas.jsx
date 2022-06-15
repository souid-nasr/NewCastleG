import { useState, useEffect } from "react";
import JsonData from "../data/data.json"
import { useForm } from "react-hook-form";
import { Navigationbar } from "./Navigationbar";
import { DescriptionCardsOilGas } from "./DescriptionCardsOilGas"
import Carousel from "./Carousel";
import { Footer } from "./Footer";
import { DescriptionCardsOilGasTraining } from "./DescriptionCardsOilGasTraining"
import { ContactInstitution } from "./ContactInstitution"

const OilGas = () => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <>
           <Navigationbar />
            <Carousel />
            <DescriptionCardsOilGas data={landingPageData.DescriptionCardsOilGas} />
          
          <div className="container">

            <section className="about" id="about">
                <div className="row">

                    <div className="content OilGas">
                        <p><i className="fa fa-asterisk" aria-hidden="true"></i> Technical education and the improved performance of technicians requires a process of formal and structured education. Through IESAWs programs new competencies will be acquired by the trainees and existing abilities and expertise will be enhanced. The levels of skill, knowledge, and competence of students after they graduate and work in oil industries as technicians is directly associated with the quality of their educational development program.</p>
                        <p><i className="fa fa-wrench" aria-hidden="true"></i> IESAWs extensive network of International Universities and Colleges means it is able to draw together the greatest expertise to deliver its development programs. IESAW enlists the best possible staff to lead its programs. In addition to its world class staff, it also has high level industry contacts which provide real world expertise as part of the development programs offered. The quality of the teaching staff means that the courses are always current. Economical, technological and political developments are anticipated, and their possible effects discussed in relation to industry and the global climate.</p>
                        <p><i className="fa fa-star-half-o" aria-hidden="true"></i> Our reputation and success is derived from several key characteristics which form the basis of our programs. Purpose, quality, individualized curriculum, reliability and consistency are what makes us the leaders in today's world.</p>
                    </div>

                    <div className="video-container">
                    <img src="/assets/oil.jpg" alt="" />
                        <h3>OilGas</h3>
                    </div>
                </div>
            </section>

            <DescriptionCardsOilGasTraining data={landingPageData.DescriptionCardsOilGasTraining} />

            <section className="review" id="review">

                <div className="box-container">

                    <div className="box">
                        <div className="stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <h3>Operations</h3>
                        <p>Engineering</p>
                        <p>Electronics</p>
                        <p>Mechanical</p>
                        <p>Welding Technology</p>
                        <p>Business</p>

                        <div className="user">
                            <img src="/assets/production.jpg" alt="" />
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>

                    <div className="box">
                    <div className="stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <h3>Production</h3>
                        <p>Drilling technology</p>
                        <p>Instrumentation</p>
                        <p>Construction</p>
                        <p>Language</p>
                        <p>Finance</p>
                        <div className="user">
                            <img src="/assets/operation.jpg" alt="" />
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>

                    <div className="box">
                    <div className="stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <h3>Maintenance</h3>
                        <p>Electrical Maintenance</p>
                        <p>Industrial safety</p>
                        <p>Safety and Equipment</p>
                        <p>Accounting</p>
                        <p>Management</p>

                        <div className="user">
                            <img src="/assets/maintenance.jpg" alt="" />
                            
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>

                </div>

            </section>

            <DescriptionCardsOilGasTraining data={landingPageData.DescriptionCardsOilGasTraining} />

            <section className="review" id="review">

                <div className="box-container">

                    <div className="box">
                    <div className="stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <h3>Training proposal</h3>
                        <p>Accommodation</p>
                        <p>Insurance</p>
                       

                        <div className="user">
                            <img src="/assets/ManagementTraining.jpg" alt="" />
                           
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>

                    <div className="box">
                    <div className="stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <h3>Travel, transfers and transit</h3>
                        <p>English tuition, if required</p>
                        <p>Medical insurance-healthcare</p>
                        <div className="user">
                            <img src="/assets/image9.jpg" alt="" />
                          
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>

                    <div className="box">
                    <div className="stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <h3>Travel visas for all purposes</h3>
                        <p>Progress reports</p>
                        <p>Sociala ctivities and trips</p>
                        
                        <div className="user">
                            <img src="/assets/Business.jpg" alt="" /> 
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </section>
            </div>

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
                        <img src="/assets//ieasaw-background.jpg" alt="" />
                    </div>
                </div>
            </section>
          <Footer />
        </>
    );
};

export default OilGas;




