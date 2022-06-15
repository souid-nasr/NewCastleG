import { useState, useEffect } from "react";
import JsonData from "../data/data.json"
import { Navigationbar } from "./Navigationbar";
import Carousel from "./Carousel";
import { DescriptionCardsBanking } from "./DescriptionCardsBanking"
import { Footer } from "./Footer";
import { ContactInstitution } from "./ContactInstitution"

const Banking = () => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>
          <Navigationbar />
            <Carousel />
            <DescriptionCardsBanking data={landingPageData.DescriptionCardsBanking} />
            <div className="container">

            <section className="about" id="about">
                <div className="row">
                    <div className="video-container">
                    <img src="/assets/BusinessCommunication.jpeg" alt="" />
                        <h3>Business Communication Skills</h3>
                    </div>

                    <div className="content">
                        <h3>Business Communication Skills :</h3>
                        <p> Business English: speaking, listening, reading, summarizing, and writing</p>
                        <p> Technical banking and financial English.</p>
                        <p> Effective telephone, skype, and email communication.</p>
                        <p>  Writing an effective proposal.</p>
                        <p>  Written and oral presentation skills.</p>
                        <p>  Conducting a meeting.</p>
                    </div>
                </div>

            </section>

            <section className="about" id="about">
                <div className="row">

                    <div className="content">
                        <h3>Professional and Management Training : </h3>
                        <p> Leadership and project management.</p>
                        <p> Developing a client-focused organization.</p>
                        <p> Management of innovation, technology and change.</p>
                        <p> Contemporary issues in managing global finance and banking.</p>
                        <p> Self-generated continuous professional development.</p>
                        <p> Strategic management.</p>
                        <p> Maximising corporate human and financial resources.</p>
                    </div>

                    <div className="video-container">
                    <img src="/assets/ManagementTraining.jpg" alt="" />
                        <h3>Professional and Management Training </h3>
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
                        <img src="/assets/bank.png" alt="" />
                    </div>

                </div>

            </section>
            <Footer />

        </div>
    );
};

export default Banking;
