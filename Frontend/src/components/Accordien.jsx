import { useState, useEffect } from "react";
import JsonData from "../data/data.json"
// 

// export const scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 1000,
//     speedAsDuration: true,
// });

const Accordien = () => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>

            <div className="accordions">
                <div>
                    <input type="radio" name="example_accordion" id="section1" className="accordion__inputs"/>
                        <label for="section1" className="accordion__labels">Section #1</label>
                        <div className="accordion__contents">
                            <p>Section #1</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat,
                                aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a
                                voluptatibus fugiat fuga facere!
                            </p>
                        </div>
                </div>
                <div>
                    <input type="radio" name="example_accordion" id="section2" className="accordion__inputs"/>
                        <label for="section2" className="accordion__labels">Section #2</label>
                        <div className="accordion__contents">
                            <p>Section #2</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat,
                                aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a
                                voluptatibus fugiat fuga facere!
                            </p>
                        </div>
                </div>
                <div>
                    <input type="radio" name="example_accordion" id="section3" className="accordion__inputs"/>
                        <label for="section3" className="accordion__labels">Section #3</label>
                        <div className="accordion__contents">
                            <p>Section #3</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat,
                                aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a
                                voluptatibus fugiat fuga facere!
                            </p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Accordien;