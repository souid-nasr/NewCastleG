import { Footer } from "./Footer";
import { Link, useLocation } from "react-router-dom";

const FilterType = () => {
    const location = useLocation();
    const intersection = location.state?.intersection;

    return (
        <div>
            <h1>
                dddddd
            </h1>

            {/* {intersection.map((institution) => (
            <div class="main-body" key={institution.id}>
                <div className="blog-post">
                    <div className="blog-post__image">
                        <img src={institution.logo}  />
                    </div>
                    <div className="blog-post__info">
                        <h1 className="blog-post__title">
                        {institution.name}
                        </h1>
                        <p className="blog-post__text">
                        {institution.description1}                     </p>
                        <p className="blog-post__text">
                        {institution.description2}                     </p>
                        <div className="blog-post__date">
                            <span>{institution.country}</span>
                        </div>
                        <a className="blog-post__cta">Apply Now</a>  <a className="blog-post__cta">Learn More</a>
                    </div>
                </div>
            </div>
            ))} */}
        </div>
    );
};

<Footer />
export default FilterType;
