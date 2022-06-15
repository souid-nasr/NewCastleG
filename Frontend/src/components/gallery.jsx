import { useState, useEffect } from "react";
import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div className='text-center'>
      <div className='container'>
        <div className='section-title gallery'>
          <h2>What you can study</h2>
          <p>
          We deliver a range of foundation and integrated undergraduate and<br /> postgraduate degree courses.
          The first stage of your course is taught  at <br />one of our colleges, while the  rest you will continue at your university.
          </p>
          <br />
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} degrees={d.degrees} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
        <br />
      </div>
    </div>
  )
}
