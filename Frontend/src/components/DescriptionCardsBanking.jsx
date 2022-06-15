import React, { useState } from 'react';

export const DescriptionCardsBanking = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
        <br />
        <br />
            <div className="container">
                <div className='section-title gallery'>
                    <h2>WE PROVIDE VARIOUS TRAINING COURSES</h2>
                 <p>IESAW offers education and training in a large number of areas in the banking <br /> industry. We have initially concentrated on the following as being possibly <br />  relevant to this project (but the menu of programs can be easily amended) .</p>
                </div>
            </div>
        </>
    );
}
