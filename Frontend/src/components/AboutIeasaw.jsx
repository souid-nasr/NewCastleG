import { useState, useEffect } from "react";
import JsonData from "../data/data.json"
import Carousel from "./Carousel";
import { Navigationbar } from "./Navigationbar";
import { DescriptionCardsOilGas } from "./DescriptionCardsOilGas"
import { Footer } from "./Footer";
import { DescriptionCardsOilGasTraining } from "./DescriptionCardsOilGasTraining"
import { ContactInstitution } from "./ContactInstitution"
import Accordion from 'react-bootstrap/Accordion'
import { Ieasawdescription } from "./Ieasawdescription"

const AboutIeasaw = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>
            <Navigationbar />
            <Carousel />
            <DescriptionCardsOilGas data={landingPageData.DescriptionCardsOilGas} />
           <div className="container">
         
            <section className="about" id="about">
                <div className="row">

                    <div className="video-container">
                        <img src="/assets/graduation-student.jpg" alt="" />
                        <h3>We Can Do It</h3>
                    </div>

                    <div className="content">
                        <h3>LEARN ENGLISH PLAYING BEAUTIFUL FOOTBALL</h3>
                        <p>City Football Language School (CFLS) is a fully immersive football and English language programme for 9-17 year old boys and girls. Based at the Etihad Campus,</p>
                        <p>it has been designed to give you an authentic insight into the life of a professional football player at the home of Manchester City.</p>
                        <h6>Brochures:</h6>
                        <a className="btn">Arabic</a>
                        <a className="btn">English</a>
                    </div>
                </div>
            </section>

            <Ieasawdescription data={landingPageData.Ieasawdescription} />

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h1>We Have Strong Background</h1></Accordion.Header>
                    <Accordion.Body>
                     Our Mission is to meet the learning objectives of individuals and organizations in achieving maximum success , and potentially leading to the organic growth of ambitious global leaders supported by world class educational institutions. Our Vision is to empower individuals in every part of the world to achieve the full intellectual potentials and realize their dreams. Therefore our goals are to be the the leader in the fostering a system of learning from global cultures which value knowledge, Dedication, Respect, and the courage to change for the better.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h1>We Will Always Here To Support You </h1></Accordion.Header>
                    <Accordion.Body>
                    We deliver training and technology transfer programs in a wide range of topics such as petroleum engineering, business, marketing, banking, human resource development, special needs education and nursing. Involving British universities and colleges in the region in the delivery of these programs both in the region and overseas.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <h1>We Love What We Do</h1> </Accordion.Header>
                    <Accordion.Body>
                    The Management and Consultancy Team includes, an expert in international education and a senior consultant on technology transfer particularly in relation to the Middle East and Far East countries who has also worked in the ME. All of these people work par-time for the Company and have worked for universities in the region.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
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
                        <img src="/assets/image-description.jpg" alt="" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AboutIeasaw;