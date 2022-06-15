import { useState, useEffect } from "react";
import JsonData from "../data/data.json"
import { Footer } from "./Footer";


const VerticalTabs = () => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    let tabs = document.querySelectorAll(".vertical-tab h3");
    let tabContents = document.querySelectorAll(".tab-vertical-content div");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabContents.forEach((content) => {
                content.classList.remove("active");
            });
            tabs.forEach((tab) => {
                tab.classList.remove("active");
            });
            tabContents[index].classList.add("active");
            tabs[index].classList.add("active");
        });
    });

    return (
        <div>

            <div className="container-vertical-tab">
                <div className="vertical-tab">
                    <h3 className="active"> Cost</h3>
                    <h3> Book Your Place</h3>
                    <h3> Accommodation</h3>
                    <h3> Welfare</h3>
                    <h3> Excursion & Activities</h3>
                    <h3> Programme</h3>
                    <h3> Certificate</h3>
                    <h3> Contact Us</h3>

                </div>
                <div className="tab-vertical-content">
                    <div className="active">
                        <h4>OVERVIEW OF PRICES</h4>
                        <p>
                            Course fee: £2795 (includes Registration Fee)
                            Airport transfer: Return transfer to and from Manchester airport is available at an additional cost of £90, please email info@cityfootball-language.com to arrange a transfer after you have booked your child’s flights. Please contact us to arrange a transfer to and from a different airport.
                            Unaccompanied minor (UM): For players travelling as an unaccompanied minor with airlines, there is a charge of £60 in addition to the airline’s standard fee. This ensures there is a named person to meet, greet and sign for UM players on arrival
                            Damage deposit: A damage deposit of £40 will be required to cover any damage cost if necessary, to be handed to staff in cash on arrival. The deposit will be returned to your child on their last day providing no damage has been made.
                            Laundry bag: To use the complimentary daily kit wash service, players must purchase a laundry bag for £5 when arriving at the residence. Alternatively, players may

                        </p>
                    </div>

                    <div>
                        <h4>Top Notch 24/7 Support</h4>
                        <p>
                            Lorem ipsum dolor sit amet maiores
                            Consectetur adipisicing elit
                            Aut earum numquam hic placeat
                            Fugiat rem consequatur neque
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic qui non placeat ad explicabo dignissimos amet iusto veniam!

                            Quo expedita tempore modi minima at adipisci saepe excepturi alias consequuntur sunt asperiores enim ut assumenda hic vitae, odio deleniti illo, veniam quas!
                        </p>
                        <button className="btn btn-primary">Read more</button>
                    </div>

                    <div>
                        <h4>100% Responsive</h4>
                        <p>
                            Lorem ipsum dolor sit amet maiores
                            Consectetur adipisicing elit
                            Aut earum numquam hic placeat
                            Fugiat rem consequatur neque
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic qui non placeat ad explicabo dignissimos amet iusto veniam!

                            Quo expedita tempore modi minima at adipisci saepe excepturi alias consequuntur sunt asperiores enim ut assumenda hic vitae, odio deleniti illo, veniam quas!
                        </p>
                        <button className="btn btn-primary">Read more</button>
                    </div>


                    <div>
                        <h4>Well Documented</h4>
                        <p>
                            Lorem ipsum dolor sit amet maiores
                            Consectetur adipisicing elit
                            Aut earum numquam hic placeat
                            Fugiat rem consequatur neque
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic qui non placeat ad explicabo dignissimos amet iusto veniam!

                            Quo expedita tempore modi minima at adipisci saepe excepturi alias consequuntur sunt asperiores enim ut assumenda hic vitae, odio deleniti illo, veniam quas!
                        </p>
                        <button className="btn btn-primary">Read more</button>
                    </div>

                    <div>
                        <h4>First Title</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aut soluta et, deserunt cum consequuntur, rerum molestias beatae laborum, temporibus tempore veniam a repellendus id blanditiis dolorem praesentium veritatis! Fugiat.
                            Sequi eos sunt, odio modi sapiente saepe hic alias doloribus fugit vel pariatur nesciunt minus cum officiis dolore maxime dolor dolores, tenetur nulla quis, ducimus quae voluptas ab accusamus. Vitae.

                        </p>
                    </div>

                    <div>
                        <h4>Second Title</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aut soluta et, deserunt cum consequuntur, rerum molestias beatae laborum, temporibus tempore veniam a repellendus id blanditiis dolorem praesentium veritatis! Fugiat.
                            Sequi eos sunt, odio modi sapiente saepe hic alias doloribus fugit vel pariatur nesciunt minus cum officiis dolore maxime dolor dolores, tenetur nulla quis, ducimus quae voluptas ab accusamus. Vitae.

                        </p>
                    </div>

                    <div>
                        <h4>Third Title</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aut soluta et, deserunt cum consequuntur, rerum molestias beatae laborum, temporibus tempore veniam a repellendus id blanditiis dolorem praesentium veritatis! Fugiat.
                            Sequi eos sunt, odio modi sapiente saepe hic alias doloribus fugit vel pariatur nesciunt minus cum officiis dolore maxime dolor dolores, tenetur nulla quis, ducimus quae voluptas ab accusamus. Vitae.

                        </p>
                    </div>


                    <div>
                        <h4>Fourth Title</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aut soluta et, deserunt cum consequuntur, rerum molestias beatae laborum, temporibus tempore veniam a repellendus id blanditiis dolorem praesentium veritatis! Fugiat.
                            Sequi eos sunt, odio modi sapiente saepe hic alias doloribus fugit vel pariatur nesciunt minus cum officiis dolore maxime dolor dolores, tenetur nulla quis, ducimus quae voluptas ab accusamus. Vitae.

                        </p>
                    </div>



                </div>
            </div>

            
        </div>
        

    );
};
<Footer />

export default VerticalTabs;
