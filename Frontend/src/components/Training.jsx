import { useState, useEffect } from "react";
import JsonData from "../data/data.json"
import SmoothScroll from "smooth-scroll";
import { Navigationbar } from "./Navigationbar";
import { Footer } from "./Footer"
import { DescriptionCardsInstitution } from "./DescriptionCardsInstitution"
import VerticalTabs from "./VerticalTabs"
import Carousel from "./Carousel";


export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const Training = () => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <>
           <Navigationbar />
            <Carousel />
            <DescriptionCardsInstitution data={landingPageData.DescriptionCardsInstitution} />
            
            <div className="container">
            <section class="about" id="about">
                <div class="row">

                    <div class="video-container">
                        <img src="/assets/FootballGalleries2.jpg" alt="" />
                        <h3>Football</h3>
                    </div>

                    <div class="content">
                        <h3>LEARN ENGLISH PLAYING BEAUTIFUL FOOTBALL</h3>
                        <p>City Football Language School (CFLS) is a fully immersive football and English language programme for 9-17 year old boys and girls. Based at the Etihad Campus,</p>
                        <p>it has been designed to give you an authentic insight into the life of a professional football player at the home of Manchester City.</p>
                        <h6>Brochures:</h6>
                        <a class="btn">Arabic</a>
                        <a class="btn">English</a>

                    </div>

                </div>

            </section>

            <section class="about" id="about">
                <div class="row">

                    <div class="content">
                        <h3>A UNIQUE EXPERIENCE: </h3>
                        <h6>World Class Facilities:</h6>
                        <p>You will train at City Football Academy, an outstanding training centre shared by Manchester City’s First Team, Women’s team and Academy teams.</p>
                        <h6>International Mix:</h6>
                        <p>Since 2015, we have welcomed 56 different nationalities on the course, creating a truly international experience.</p>
                        <h6>International Mix:</h6>
                        <p>Football and English language sessions are integrated from one session to the next in a unique learning plan designed to immerse and inspire.</p>
                    </div>

                    <div class="video-container">
                        <img src="/assets/FootballGalleries4.jpg" alt="" />
                        <h3>Football</h3>
                    </div>

                </div>

            </section>



            <section class="icons-container">
                <div class="icons">
                    <div class="info">
                        <h3>DEVELOP ENGLISH SKILLS</h3>
                        <p> 3 hours of Football Plus sessions per day</p>
                        <p> Develop language skills through media training sessions and press conference role play</p>
                        <p> Learn about player and match analysis through interactive workshops</p>
                        <p> Gain an understanding of effective communication skills, both on and off the field</p>
                        <p> Experience life as a Manchester City player </p>
                        <p> Have fun making friends from all over the world</p>
                    </div>
                </div>


                <div class="icons">
                    <div class="info">
                        <h3>PLAY BEAUTIFUL FOOTBALL </h3>
                        <p>  3 hours of football training per day </p>
                        <p>  Follow City Football Schools’ authentic training philosophy and methodology </p>
                        <p>  Focus on development of individual technique </p>
                        <p>  Train in a team environment </p>
                        <p>  Improve game understanding and creativity through playing </p>
                        <p>  Experience how City players train and competeHave fun making friends from all over the world </p>
                        <p>   ...</p>
                        <p>   ...</p>

                    </div>
                </div>


                <div class="icons">
                    <div class="info">
                        <h3>WHATS INCLUDED?</h3>
                        <p> 30 hours football coaching</p>
                        <p> 30 hours Football Plus sessions (English language)</p>
                        <p> Exclusive City Football Schools training kit</p>
                        <p> Private en-suite single bedrooms with Wi-Fi</p>
                        <p> Daily coach transfer to City Football Academy</p>
                        <p> Full-board meals</p>
                        <p> Laundry facilities available</p>

                        <p> 2 weekend excursions</p>
                        <p> Evening activities every night</p>
                        <p> All course materials</p>
                        <p> End-of-course certificate and academic report</p>


                    </div>
                </div>


                <div class="icons">
                    <div class="info">
                        <h3>Boys Programme</h3>
                        <p>DURATION : 2 Weeks (13 Nights)</p>
                        <p>AGE : 12 – 17 Years</p>
                        <p>START DATES : 02 July <br />16 July  <br />30 July</p>

                    </div>

                    <div class="info">
                        <h3>Girls Programme</h3>
                        <p>DURATION : 2 Weeks (13 Nights)</p>
                        <p>AGE : 12 – 17 Years</p>
                        <p>START DATES : 16 July<br />  Girls-only training sessions <br />
                            Private girls accommodation <br />
                            Female pastoral staff</p>
                    </div>


                    <div class="info">
                        <h3>Juniors Programme</h3>
                        <p>DURATION : 2 Weeks (13 Nights)</p>
                        <p>AGE : 9 - 11 Years</p>
                        <p>START DATES : 02 July</p>
                        <p>...</p>
                        <p>...</p>
                    </div>


                </div>

            </section>



            <section class="products" id="products">

                <h3 class="heading"> PHOTO <span> GALLERIES </span> </h3>

                <div class="box-container">

                    <div class="box">
                        <div class="image">
                            <img src="/assets/FootballGalleries1.jpg" alt="" />
                            <div class="icons">
                                <a class="fa fa-heart"></a>
                                <a class="cart-btn">Learn more</a>
                                <a class="fa fa-share"></a>
                            </div>
                        </div>

                    </div>

                    <div class="box">
                        <div class="image">
                            <img src="/assets/FootballGalleries2.jpg" alt="" />
                            <div class="icons">
                            <a class="fa fa-heart"></a>
                                <a class="cart-btn">Learn more</a>
                                <a class="fa fa-share"></a>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src="/assets/FootballGalleries3.jpg" alt="" />
                            <div class="icons">
                            <a class="fa fa-heart"></a>
                                <a class="cart-btn">Learn more</a>
                                <a class="fa fa-share"></a>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src="/assets/FootballGalleries4.jpg" alt="" />
                            <div class="icons">
                            <a class="fa fa-heart"></a>
                                <a class="cart-btn">Learn more</a>
                                <a class="fa fa-share"></a>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src="/assets/FootballGalleries5.jpg" alt="" />
                            <div class="icons">
                            <a class="fa fa-heart"></a>
                                <a class="cart-btn">Learn more</a>
                                <a class="fa fa-share"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VerticalTabs />
        </div>
        </>

    );
};
export default Training;



